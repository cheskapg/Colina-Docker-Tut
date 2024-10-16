"use client";
import Image from "next/image";
import DropdownMenu from "@/components/dropdown-menu";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchFormsByPatient } from "@/app/api/forms-api/forms.api";
import Pagination from "@/components/shared/pagination";
import ResuableTooltip from "@/components/reusable/tooltip";
=======
import { ConfirmationModal } from "@/components/modal-content/confirmation-modal-content";
import Modal from "@/components/reusable/modal";
import { formatTableDate } from "@/lib/utils";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchFormsByPatient,  updateFormsOfPatient,
} from "@/app/api/forms-api/forms.api";
import Pagination from "@/components/shared/pagination";
import ResuableTooltip from "@/components/reusable/tooltip";
import Restore from "@/components/shared/buttons/restore";
import PdfDownloader from "@/components/pdfDownloader";
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de

export default function ArchiveTab() {
  const router = useRouter();
  const params = useParams<{
    id: any;
    tag: string;
    item: string;
  }>();
<<<<<<< HEAD
=======
  const [formData, setFormData] = useState({
    isArchived: false,
  });

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  const patientId = params.id.toUpperCase();
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [isOpenSortedBy, setIsOpenSortedBy] = useState(false);
  const [sortOrder, setSortOrder] = useState("ASC");
  const [currentPage, setCurrentPage] = useState<number>(1);
<<<<<<< HEAD
  const [patientArchive, setpatientArchive] = useState<any[]>([]);
=======
  const [patientArchived, setPatientArchive] = useState<any[]>([]);
  const [confirmRestore, setConfirmRestore] = useState(false);
  const [formsUuid, setFormsUuid] = useState("");

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  const [sortBy, setSortBy] = useState("dateIssued");
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalArchive, setTotalArchive] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
<<<<<<< HEAD
=======
  const [isSubmitted, setIsSubmitted] = useState(false);

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  const [term, setTerm] = useState<string>("");
  const handleOrderOptionClick = (option: string) => {
    if (option === "Ascending") {
      setSortOrder("ASC");
    } else {
      setSortOrder("DESC");
    }
  };
<<<<<<< HEAD

=======
  const handleIsArchived = async (formUuid: string) => {
    setIsSubmitted(true);
    try {
      await updateFormsOfPatient(formUuid, formData, router);
      onSuccess();
      setConfirmRestore(false);
      isModalOpen(false);

      return;
    } catch (error) {
    } finally {
      setIsSubmitted(false);
    }
  };
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const onSuccess = () => {
    setIsSuccessOpen(true);
  };

  const isConfirmModalOpen = (confirmArchived: boolean) => {
    setConfirmRestore(confirmArchived);
    if (confirmArchived) {
      document.body.style.overflow = "hidden";
    } else if (!confirmArchived) {
      document.body.style.overflow = "visible";
    }
  };
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  const handleSortOptionClick = (option: string) => {
    if (option == "Name") {
      setSortBy("nameofDocument");
    } else if (option == "Notes") {
      setSortBy("notes");
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
    { label: "NAME", onClick: handleSortOptionClick },
    { label: "DATE ISSUED", onClick: handleSortOptionClick },
    { label: "NOTES", onClick: handleSortOptionClick },
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

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to handle going to next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleGoToPage = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    const pageNumberInt = parseInt(pageNumber, 10);

    // Check if pageNumber is a valid number and greater than 0
    if (
      !isNaN(pageNumberInt) &&
      pageNumberInt <= totalPages &&
      pageNumberInt > 0
    ) {
      setCurrentPage(pageNumberInt);

      console.log("Navigate to page:", pageNumberInt);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFormsByPatient(
          patientId,
          term,
          currentPage,
          sortBy,
          sortOrder as "ASC" | "DESC",
          true,
<<<<<<< HEAD
          router
        );
        setpatientArchive(response.data);
=======
          4,
          router,
        );
        setPatientArchive(response.data);
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        setTotalPages(response.totalPages);
        setTotalArchive(response.totalCount);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
      }
    };

    fetchData();
<<<<<<< HEAD
  }, [currentPage, sortOrder, sortBy, term]);

  if (isLoading) {
    return (
      <div className="container w-full h-full flex justify-center items-center ">
=======
  }, [currentPage, sortOrder, sortBy, term, isSuccessOpen]);

  if (isLoading) {
    return (
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
<<<<<<< HEAD
  console.log(patientArchive, "patientArchive");
  return (
    <div className="  w-full h-full flex flex-col justify-between">
      <div className="w-full h-full">
        <div className="w-full justify-between flex">
=======
  console.log(patientArchived, "patientArchived");
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div className="h-full w-full">
        <div className="flex w-full justify-between">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
          <div className="flex-row">
            <div className="flex gap-2">
              <p
                onClick={() => {
                  setIsLoading(true);
                  router.replace(
<<<<<<< HEAD
                    `/patient-overview/${patientId.toLowerCase()}/forms`
                  );
                }}
                className="p-title hover:underline cursor-pointer"
=======
                    `/patient-overview/${patientId.toLowerCase()}/forms`,
                  );
                }}
                className="p-table-title cursor-pointer hover:underline"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              >
                Form
              </p>
              <p className="slash">{">"}</p>
<<<<<<< HEAD
              <p className="active">Archived</p>
            </div>
            <div>
              <p className="text-[#64748B] font-normal w-[1157px] h-[22px] text-[15px]">
=======
              <span
                onClick={() => {
                  setIsLoading(true);
                  router.replace(
                    `/patient-overview/${patientId.toLowerCase()}/forms/vaccination`,
                  );
                }}
                className="bread"
              >
                Vaccination
              </span>
              <span className="bread">/</span>
              <p className="active">Archived</p>
            </div>
            <div>
              <p className="my-1 h-[23px] text-[15px] font-normal text-[#64748B]">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                Total of {totalArchive} logs
              </p>
            </div>
          </div>
          <div className="flex gap-2">
<<<<<<< HEAD
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
          <PdfDownloader
              props={["Uuid", "Name_of_document", "Date_issued", "Notes"]}
              variant={"Archived Forms Table"}
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
        </div>

        {/* START OF TABLE */}
<<<<<<< HEAD
        <div>
          {patientArchive.length == 0 ? (
            <div>
              <div className="w-full flex-col justify-center items-center">
                <table className="w-full block text-left rtl:text-right">
                  <thead className="w-full ">
                    <tr className=" text-[#64748B] border-b-[1px] text-[15px] ">
                      <td className="px-6 py-3 h-[70px]">NAME OF DOCUMENT</td>
                      <td className="px-6 py-3 ">DATE ISSUED</td>
                      <td className="px-6 py-3 ">NOTES</td>
                      <td className="px-6 py-3 ">ACTION</td>
                    </tr>
                  </thead>
                </table>
                <div className="py-5 flex justify-center items-center">
                  <p className="font-normal text-gray-700 text-center text-[15px]">
                    No Form/s
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <table className="w-full block text-left rtl:text-right">
              <thead className="w-full">
                <tr className=" text-[#64748B] border-b-[1px] text-[15px] h-[70px] font-semibold">
                  <td className="px-6 py-3">NAME OF DOCUMENT</td>
                  <td className="px-6 py-3">DATE ISSUED</td>
                  <td className="px-6 py-3 ">NOTES</td>
                  <td className="w-[14px]"></td>
                </tr>
              </thead>

              <tbody className="h-[220px] overflow-y-scroll">
                {patientArchive.map((form, index) => (
                  <tr
                    key={index}
                    className="odd:bg-white border-b hover:bg-[#f4f4f4] group text-[15px]"
                  >
                    <td className=" px-6 py-3 ">
                      <ResuableTooltip text={form.forms_nameOfDocument} />
                    </td>
                    <td className="px-6 py-3 ">{form.forms_dateIssued}</td>
                    <td className="px-6 py-3 ">
                      <ResuableTooltip text={form.forms_notes} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
=======
          <div>
            <table className="text-left rtl:text-right">
              <thead>
              
                <tr className="h-[70px] border-b text-[15px] font-semibold uppercase text-[#64748B]">
                  <td className="px-6 py-3">FORM UID</td>
                  <td className="px-6 py-3">NAME OF DOCUMENT</td>
                  <td className="px-6 py-3">DATE ISSUED</td>
                  <td className="px-6 py-3">NOTES</td>
                  <td className="relative px-6 py-3">
                  <p className="absolute right-[80px] top-[24px]">Action</p>
                  </td>
                </tr>
              </thead>
              <tbody className="h-[254px]">
                {patientArchived.length === 0 && (
                  <tr>
                    <td className="border-1 absolute flex w-[180vh] items-center justify-center py-5">
                      <p className="text-center text-[15px] font-normal text-gray-700">
                        No forms <br />
                      </p>
                    </td>
                  </tr>
                )}
                {patientArchived.map((form, index) => (
                  <tr
                    key={index}
                    className="group h-[63px] border-b text-[15px] hover:bg-[#f4f4f4]"
                  >
                    <td className="px-6 py-3">
                      <ResuableTooltip text={form.forms_uuid} />
                    </td>
                    <td className="px-6 py-3">
                      <ResuableTooltip text={form.forms_nameOfDocument} />
                    </td>
                    <td className="px-6 py-3">
                    {formatTableDate(form.forms_dateIssued)}</td>
                    <td className="px-6 py-3">
                      <ResuableTooltip text={form.forms_notes} />
                    </td>

                    <td className="relative py-3 pl-6">
                    <p
                            onClick={() => {
                              setFormsUuid(form.forms_uuid);
                              setConfirmRestore(true);
                            }}
                            className="absolute right-[40px] top-[11px]"
                            >
                            <Restore/>
                          </p>
                        </td>
                  </tr>

                ))}
              </tbody>
            </table>
        
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        </div>
        {/* END OF TABLE */}
      </div>
      {/* pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        setCurrentPage={setCurrentPage}
      />
<<<<<<< HEAD
=======
            {confirmRestore && (
        <Modal
          content={
            <ConfirmationModal
              uuid={formsUuid}
              setConfirm={setConfirmRestore}
              label="Restore"
              handleFunction={(e) => {
                handleIsArchived(formsUuid);
              }}
              isSubmitted={isSubmitted}
            />
          }
          isModalOpen={isConfirmModalOpen}
        />
      )}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    </div>
  );
}
