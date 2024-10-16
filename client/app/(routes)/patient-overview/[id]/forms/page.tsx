"use client";

import Image from "next/image";
import DropdownMenu from "@/components/dropdown-menu";
import Add from "@/components/shared/buttons/add";
import DownloadPDF from "@/components/shared/buttons/downloadpdf";
<<<<<<< HEAD
import Edit from "@/components/shared/buttons/view";
=======
import Edit from "@/components/shared/buttons/edit";
import Archive from "@/components/shared/buttons/archive";
import { formatTableDate } from "@/lib/utils";

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FormsModalContent } from "@/components/modal-content/forms-modal-content";
import { FormViewsModalContent } from "@/components/modal-content/formsview-modal-content";
import Modal from "@/components/reusable/modal";
import {
  createFormsOfPatient,
  fetchFormsByPatient,
  addFormFile,
  deleteFormFiles,
  getCurrentFileCountFromDatabase,
  updateFormsOfPatient,
} from "@/app/api/forms-api/forms.api";
import { toast } from "@/components/ui/use-toast";
import { SuccessModal } from "@/components/shared/success";
import { ConfirmationModal } from "@/components/modal-content/confirmation-modal-content";
import Pagination from "@/components/shared/pagination";
import ResuableTooltip from "@/components/reusable/tooltip";
<<<<<<< HEAD
=======
import PdfDownloader from "@/components/pdfDownloader";
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
interface Modalprops {
  isEdit: any;
  formAddData: any;
  isModalOpen: (isOpen: boolean) => void;
  onSuccess: () => void;
}

interface FormFile {
  file: any; // Assuming file property exists for the key
  filename: string;
  data: Uint8Array;
  file_uuid: string;
}

function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>): void {
  throw new Error("Function not implemented.");
}

export default function FormsTab() {
  const router = useRouter();
  const params = useParams<{
    id: any;
    tag: string;
    item: string;
  }>();

  const [fileNames, setFileNames] = useState<string[]>([]);
  const [fileTypes, setFileTypes] = useState<string[]>([]);
  const [selectedFiles, setSelectedFormFiles] = useState<File[]>([]);
  const [numFilesCanAdd, setNumFilesCanAdd] = useState<number>(5);
  const [selectedFileNames, setSelectedFileNames] = useState<string[]>([]);
  const [formFiles, setFormFiles] = useState<any[]>([]); //
  const [formViewdData, setFormViewData] = useState<any[]>([]);
  const patientId = params.id.toUpperCase();
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [isOpenSortedBy, setIsOpenSortedBy] = useState(false);
  const [sortOrder, setSortOrder] = useState("ASC");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [patientForms, setPatientForms] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState("dateIssued");
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalForms, setTotalForms] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState("");
  const [gotoError, setGotoError] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState("");
  const [term, setTerm] = useState<string>("");
  const [isEdit, setIsEdit] = useState(false);
  const [formsToEdit, setFormsToEdit] = useState<any[]>([]);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isView, setIsView] = useState(false);
  const [confirmArchived, setConfirmArchived] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formsUuid, setFormsUuid] = useState("");
  const handleOrderOptionClick = (option: string) => {
    if (option === "Ascending") {
      setSortOrder("ASC");
    } else {
      setSortOrder("DESC");
    }
  };

  const handleSortOptionClick = (option: string) => {
    if (option == "Form ID") {
      setSortBy("uuid");
    } else if (option == "Name") {
      setSortBy("nameofDocument");
    } else if (option == "Date") {
      setSortBy("dateIssued");
    }
    console.log(sortBy, "option");
  };

  const optionsOrderedBy = [
    { label: "Ascending", onClick: handleOrderOptionClick },
    { label: "Descending", onClick: handleOrderOptionClick },
  ];
  const optionsSortBy = [
    { label: "Form ID", onClick: handleSortOptionClick },
    { label: "Name", onClick: handleSortOptionClick },
    { label: "Date Issued", onClick: handleSortOptionClick },
  ];
  // end of orderby & sortby function

  const [isOpen, setIsOpen] = useState(false);

  const isModalOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "visible";
    }
  };

  const isConfirmModalOpen = (confirmArchived: boolean) => {
    setConfirmArchived(confirmArchived);
    if (confirmArchived) {
      document.body.style.overflow = "hidden";
    } else if (!confirmArchived) {
      document.body.style.overflow = "visible";
    }
  };

  // add form
  const [isAddOpen, setIsAddOpen] = useState(false);
  const isAddModalOpen = (isAddOpen: boolean) => {
    setIsAddOpen(isAddOpen);
    if (isAddOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isAddOpen) {
      document.body.style.overflow = "visible";
    }
  };
  // add form
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFormsByPatient(
          patientId,
          term,
          currentPage,
          sortBy,
          sortOrder as "ASC" | "DESC",
          false,
<<<<<<< HEAD
          router
=======
          4,
          router,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        );
        setPatientForms(response.data);
        console.log("DATAAAAA:", response.data);
        setTotalPages(response.totalPages);
        setTotalForms(response.totalCount);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage, sortOrder, sortBy, term, isSuccessOpen]);

  const onSuccess = () => {
    setIsSuccessOpen(true);
    setIsEdit(false);
  };

  const [formData, setFormData] = useState({
    isArchived: true,
  });

  const handleIsArchived = async (formUuid: string) => {
    setIsSubmitted(true);
    try {
      await updateFormsOfPatient(formUuid, formData, router);
      onSuccess();
      setConfirmArchived(false);
      isModalOpen(false);

      return;
    } catch (error) {
    } finally {
      setIsSubmitted(false);
    }
  };

  if (isLoading) {
    return (
<<<<<<< HEAD
      <div className="container w-full h-full flex justify-center items-center ">
=======
      <div className="container flex h-full w-full items-center justify-center">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        <Image
          src="/imgs/colina-logo-animation.gif"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <div className="  w-full h-full flex flex-col justify-between">
      <div className="w-full h-full">
        <div className="w-full justify-between flex ">
          <div className="flex-row">
            <div className="flex gap-2">
              <p className="p-title">Form</p>
=======
    <div className="flex h-full w-full flex-col justify-between">
      <div className="h-full w-full">
        <div className="flex w-full justify-between">
          <div className="flex-row">
            <div className="flex gap-2">
              <p className="p-table-title">Form</p>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              <span className="slash">{">"}</span>
              <span
                onClick={() => {
                  setIsLoading(true);
                  router.replace(
<<<<<<< HEAD
                    `/patient-overview/${patientId.toLowerCase()}/forms/archived`
=======
                    `/patient-overview/${patientId.toLowerCase()}/forms/vaccination`,
                  );
                }}
                className="bread"
              >
                Vaccination
              </span>
              <span className="bread">/</span>
              <span
                onClick={() => {
                  setIsLoading(true);
                  router.replace(
                    `/patient-overview/${patientId.toLowerCase()}/forms/archived`,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  );
                }}
                className="bread"
              >
                Archived
              </span>
            </div>
            <div>
<<<<<<< HEAD
              <p className="text-[#64748B] font-normal w-[1157px] h-[22px] text-[15px]">
                Total of {totalForms} logs
=======
            <p className="my-1 h-[23px] text-[15px] font-normal text-[#64748B]">
            Total of {totalForms} logs
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setIsAddOpen(true);
              }}
              className="btn-add gap-2"
            >
<<<<<<< HEAD
              <Image src="/imgs/add.svg" alt="" width={22} height={22} />
              <p className="text-[18px]">Add</p>
            </button>
            <button className="btn-pdfs gap-2">
              <Image
                src="/imgs/downloadpdf.svg"
                alt=""
                width={22}
                height={22}
              />
              <p className="text-[18px]">Download PDF</p>
            </button>
          </div>
        </div>

        <div className="w-full sm:rounded-lg items-center pt-2">
          <div className="w-full justify-between flex items-center bg-[#F4F4F4] h-[75px]">
            <form className="mr-5 relative">
=======
              <Image src="/imgs/add.svg" alt="" width={18} height={18} />
              <p className="">Add</p>
            </button>
            <PdfDownloader
              props={["Uuid", "Name_of_document", "Date_issued", "Notes"]}
              variant={"Forms Table"}
              patientId={patientId}
            />
          </div>
        </div>

        <div className="w-full items-center pt-2 sm:rounded-lg">
          <div className="flex h-[75px] w-full items-center justify-between bg-[#F4F4F4]">
            <form className="relative mr-5">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              {/* search bar */}
              <label className=""></label>
              <div className="flex">
                <input
<<<<<<< HEAD
                  className="py-3 px-5 m-5 w-[573px] outline-none h-[47px] pt-[14px] ring-[1px] ring-[#E7EAEE] text-[15px] rounded pl-10 relative bg-[#fff] bg-no-repeat bg-[573px] bg-[center] bg-[calc(100%-20px)]"
=======
                  className="relative mx-5 my-4 h-[47px] w-[460px] rounded-[3px] border-[1px] border-[#E7EAEE] bg-[#fff] bg-[center] bg-no-repeat px-5 py-3 pl-10 pt-[14px] text-[15px] outline-none placeholder:text-[#64748B]"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  type="text"
                  placeholder="Search by reference no. or name..."
                  value={term}
                  onChange={(e) => {
                    setTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
                <Image
                  src="/svgs/search.svg"
                  alt="Search"
                  width="20"
                  height="20"
<<<<<<< HEAD
                  className="absolute left-8 top-9 pointer-events-none"
=======
                  className="pointer-events-none absolute left-8 top-8"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                />
              </div>
            </form>

<<<<<<< HEAD
            <div className="flex w-full justify-end items-center gap-[12px] mr-3">
              <p className="text-[#191D23] opacity-[60%] font-semibold text-[15px]">
=======
            <div className="mr-3 flex w-full items-center justify-end gap-[12px]">
              <p className="text-[15px] font-semibold text-[#191D23] opacity-[60%]">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                Order by
              </p>
              <DropdownMenu
                options={optionsOrderedBy.map(({ label, onClick }) => ({
                  label,
                  onClick: () => {
                    onClick(label);
                  },
                }))}
                open={isOpenOrderedBy}
                width={"165px"}
                label={"Select"}
              />
<<<<<<< HEAD
              <p className="text-[#191D23] opacity-[60%] font-semibold text-[15px]">
=======
              <p className="text-[15px] font-semibold text-[#191D23] opacity-[60%]">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                Sort by
              </p>
              <DropdownMenu
                options={optionsSortBy.map(({ label, onClick }) => ({
                  label,
                  onClick: () => {
                    onClick(label);
                    console.log("label", label);
                  },
                }))}
                open={isOpenSortedBy}
                width={"165px"}
                label={"Select"}
              />
            </div>
          </div>

          {/* START OF TABLE */}
          <div>
            <table className="text-left rtl:text-right">
              <thead>
<<<<<<< HEAD
                {" "}
                <tr className="uppercase text-[#64748B] border-b-[1px] text-[15px] h-[70px] font-semibold">
=======
              
                <tr className="h-[70px] border-b text-[15px] font-semibold uppercase text-[#64748B]">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  <td className="px-6 py-3">FORM UID</td>
                  <td className="px-6 py-3">NAME OF DOCUMENT</td>
                  <td className="px-6 py-3">DATE ISSUED</td>
                  <td className="px-6 py-3">NOTES</td>
<<<<<<< HEAD
                  <td className="px-6 py-3 text-center">ACTION</td>
                  <td className="w-[14px]"></td>
                </tr>
              </thead>
              <tbody className="h-[220px] overflow-y-scroll">
                {patientForms.length === 0 && (
                  <tr>
                    <td className="border-1 w-[180vh] py-5 absolute flex justify-center items-center">
                      <p className="text-[15px] font-normal text-gray-700 text-center">
=======
                  <td className="relative px-6 py-3">
                  <p className="absolute right-[114px]  top-[24px]">ACTION</p>
                  </td>
                </tr>
              </thead>
              <tbody className="h-[254px]">
                {patientForms.length === 0 && (
                  <tr>
                    <td className="border-1 absolute flex items-center justify-center py-5">
                      <p className="text-center text-[15px] font-normal text-gray-700">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                        No forms <br />
                      </p>
                    </td>
                  </tr>
                )}
                {patientForms.map((form, index) => (
                  <tr
                    key={index}
<<<<<<< HEAD
                    className="odd:bg-white border-b hover:bg-[#f4f4f4] group text-[15px]"
=======
                    className="group h-[63px] border-b text-[15px] hover:bg-[#f4f4f4]"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  >
                    <td className="px-6 py-3">
                      <ResuableTooltip text={form.forms_uuid} />
                    </td>
<<<<<<< HEAD
                    <td className="px-6 py-3 ">
                      <ResuableTooltip text={form.forms_nameOfDocument} />
                    </td>
                    <td className="px-6 py-3 ">{form.forms_dateIssued}</td>
                    <td className="px-6 py-3 ">
                      <ResuableTooltip text={form.forms_notes} />
                    </td>

                    <td className="px-6 py-3 flex gap-2 justify-center">
=======
                    <td className="px-6 py-3">
                      <ResuableTooltip text={form.forms_nameOfDocument} />
                    </td>
                    <td className="px-6 py-3">
                    {formatTableDate(form.forms_dateIssued)}</td>
                    <td className="px-6 py-3">
                      <ResuableTooltip text={form.forms_notes} />
                    </td>

                    <td className="py-6 relative ">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      <p
                        onClick={() => {
                          isModalOpen(true);
                          setIsEdit(true);
                          setFormViewData(form);
                        }}
<<<<<<< HEAD
                      >
                        <Edit />
                      </p>
                      <p>
                        <button
=======
                        className="absolute right-[146px] top-[11px]"

                      >
                        <Edit />
                      </p>
                      <p
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                          onClick={(e) => {
                            setFormsUuid(form.forms_uuid);
                            setConfirmArchived(true);
                          }}
<<<<<<< HEAD
                          className="w-[90px] h-[35px] rounded bg-[#E7EAEE]  hover:!text-white hover:!bg-[#007C85] group-hover:bg-white group-hover:text-black"
                        >
                          Archive
                        </button>
=======
                          className="absolute right-[40px] top-[11px]"
                          >
                          <Archive/>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* END OF TABLE */}
        </div>
      </div>
      {/* pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        setCurrentPage={setCurrentPage}
      />
      {confirmArchived && (
        <Modal
          content={
            <ConfirmationModal
              uuid={formsUuid}
              setConfirm={setConfirmArchived}
              label="Archived"
              handleFunction={(e) => {
                handleIsArchived(formsUuid);
              }}
              isSubmitted={isSubmitted}
            />
          }
          isModalOpen={isConfirmModalOpen}
        />
      )}
      {isOpen && (
        <Modal
          content={
            <FormViewsModalContent
              isModalOpen={isModalOpen}
              formsData={formViewdData}
              isView={false}
            />
          }
          isModalOpen={isModalOpen}
        />
      )}
      {isSuccessOpen && (
        <SuccessModal
          label={isEdit ? "Edit Form" : "Add Form"}
          isAlertOpen={isSuccessOpen}
          toggleModal={setIsSuccessOpen}
          isUpdated={isUpdated}
          setIsUpdated={setIsUpdated}
        />
      )}
      {isAddOpen && (
        <Modal
          content={
            <FormsModalContent
              isModalOpen={setIsAddOpen}
              onSuccess={onSuccess}
              isEdit={undefined}
              formAddData={undefined}
            />
          }
          isModalOpen={isAddModalOpen}
        />
      )}
    </div>
  );
}
