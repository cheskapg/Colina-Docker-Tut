"use client";
import Image from "next/image";
import DropdownMenu from "@/components/dropdown-menu";
import Add from "@/components/shared/buttons/add";
import DownloadPDF from "@/components/shared/buttons/downloadpdf";
import Edit from "@/components/shared/buttons/edit";
import { useEffect, useState } from "react";
import { onNavigate } from "@/actions/navigation";
import { useParams, useRouter } from "next/navigation";
import { fetchSurgeriesByPatient } from "@/app/api/medical-history-api/surgeries.api";
import { SuccessModal } from "@/components/shared/success";
import { ErrorModal } from "@/components/shared/error";
import { SurgeriesModalContent } from "@/components/modal-content/surgeries-modal-content";
import Modal from "@/components/reusable/modal";
import Pagination from "@/components/shared/pagination";
import ResuableTooltip from "@/components/reusable/tooltip";
<<<<<<< HEAD
=======
import { formatTableDate } from "@/lib/utils";
import PdfDownloader from "@/components/pdfDownloader";
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de

export default function Surgeries() {
  if (typeof window === "undefined") {
  }
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [isOpenSortedBy, setIsOpenSortedBy] = useState(false);
  const [patientSurgeries, setPatientSurgeries] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalSurgeries, setTotalSurgeries] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pageNumber, setPageNumber] = useState("");
  const [gotoError, setGotoError] = useState(false);
  const [term, setTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("DESC");
  const [surgeryUuid, setSurgeryUuid] = useState("");
  const router = useRouter();
  const [sortBy, setSortBy] = useState("typeOfSurgery");
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [surgeryData, setSurgeryData] = useState<any[]>([]);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const params = useParams<{
    id: any;
    tag: string;
    item: string;
  }>();
  const patientId = params.id.toUpperCase();

  // const patientId = params.id;
  const handleOrderOptionClick = (option: string) => {
    setIsOpenOrderedBy(false);
    if (option === "Ascending") {
      setSortOrder("ASC");
    } else {
      setSortOrder("DESC");
    }
  };

  const handleSortOptionClick = (option: string) => {
    setIsOpenSortedBy(false);
    if (option === "Type") {
      setSortBy("typeOfSurgery");
    } else if (option === "Surgery") {
      setSortBy("surgery");
    } else {
      setSortBy("notes");
    }
    console.log("option", option);
  };
  const optionsOrderedBy = [
    { label: "Ascending", onClick: handleOrderOptionClick },
    { label: "Descending", onClick: handleOrderOptionClick },
  ];
  const optionsSortBy = [
    { label: "Type", onClick: handleSortOptionClick },
    { label: "Surgery", onClick: handleSortOptionClick },
    { label: "Notes", onClick: handleSortOptionClick },
  ];

  const isModalOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "visible";
      setIsEdit(false);
      setSurgeryData([]);
    }
  };

<<<<<<< HEAD
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
    } else {
      setGotoError(true);
      setTimeout(() => {
        setGotoError(false);
      }, 3000);
      console.error("Invalid page number:", pageNumber);
    }
  };
  const formatDate = (dateOfSurgery: string | number | Date) => {
    // Create a new Date object from the provided createdAt date string
    const date = new Date(dateOfSurgery);

    // Get the month, day, and year
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();

    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate;
  };
  const handlePageNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageNumber(e.target.value);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`flex ring-1 ring-gray-300 items-center justify-center  w-[49px]  ${
            currentPage === i ? "btn-pagination" : ""
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

=======
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSurgeriesByPatient(
          patientId,
          term,
          currentPage,
          sortBy,
          sortOrder as "ASC" | "DESC",
          4,
          router,
        );

        //convert date to ISO string

        setPatientSurgeries(response.data);
        console.log("Patient list after setting state:", response.data);
        setTotalPages(response.totalPages);
        setTotalSurgeries(response.totalCount);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage, sortOrder, sortBy, term, isOpen]);

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

  const onSuccess = () => {
    setIsSuccessOpen(true);
    setIsEdit(false);
    isModalOpen(false);
  };

  const onFailed = () => {
    setIsErrorOpen(true);
    setIsEdit(false);
  };
  console.log(patientSurgeries, "PatientSurgeries");
  return (
<<<<<<< HEAD
    <div className="  w-full h-full flex flex-col justify-between">
      <div className="w-full h-full">
        <div className="w-full justify-between flex mb-2">
          <div className="flex-row">
            <div className="flex gap-2">
              <p className="p-title">Medical History</p>
=======
    <div className="flex h-full w-full flex-col justify-between">
      <div className="h-full w-full">
        <div className="mb-2 flex w-full justify-between">
          <div className="flex-row">
            <div className="flex gap-2">
              <p className="p-table-title">Medical History</p>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              <p className="slash">{">"}</p>
              <p
                onClick={() => {
                  setIsLoading(true);
                  router.replace(
<<<<<<< HEAD
                    `/patient-overview/${patientId.toLowerCase()}/medical-history/allergies`
=======
                    `/patient-overview/${patientId.toLowerCase()}/medical-history/allergies`,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  );
                }}
                className="bread"
              >
                Allergies
              </p>
              <p className="slash">{"/"}</p>
              <p className="active">Surgeries</p>
            </div>
            <div>
<<<<<<< HEAD
              <p className="text-[#64748B] font-normal w-[1157px] h-[22px] text-[15px]">
=======
            <p className="my-1 h-[23px] text-[15px] font-normal text-[#64748B]">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                Total of {totalSurgeries} Surgeries
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => isModalOpen(true)} className="btn-add gap-2">
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

        <div className="w-full sm:rounded-lg items-center">
          <div className="w-full justify-between flex items-center bg-[#F4F4F4] h-[75px]">
            <form className="mr-5 relative">
=======
              <Image src="/imgs/add.svg" alt="" width={18} height={18} />
              <p className="">Add</p>
            </button>
            <PdfDownloader
              props={["Uuid", "Date_of_surgery", "Type", "Surgery", "Notes"]}
              variant={"Surgery Table"}
              patientId={patientId}
            />
          </div>
        </div>

        <div className="w-full items-center sm:rounded-lg">
          <div className="flex h-[75px] w-full items-center justify-between bg-[#F4F4F4]">
            <form className="relative mr-5">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              {/* search bar */}
              <label className=""></label>
              <div className="flex">
                <input
<<<<<<< HEAD
                  className="py-3 px-5 m-5 w-[573px] outline-none h-[47px] pt-[15px] ring-[1px] ring-[#E7EAEE] text-[15px] rounded pl-10 relative bg-[#fff] bg-no-repeat bg-[573px] bg-[center] bg-[calc(100%-20px)]"
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
                />
              </div>
            </form>
            <div className="flex w-full justify-end items-center gap-[12px] mr-3">
              <p className="text-[#191D23] opacity-[60%] font-semibold text-[15px]">
=======
                  className="pointer-events-none absolute left-8 top-8"
                />
              </div>
            </form>
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
        <div>
          <table className="text-left rtl:text-right">
            <thead>
<<<<<<< HEAD
              <tr className="uppercase text-[#64748B] border-y text-[15px] h-[70px] font-semibold">
                <td className="px-6 py-3 ">Surgery ID </td>
                <td className="px-6 py-3 ">DATE OF SURGERY</td>
                <td className="px-6 py-3 ">TYPE</td>
                <td className="px-6 py-3 ">SURGERY</td>
                <td className="px-6 py-3 ">NOTES</td>
                <td className="py-3 px-6 text-center">Action</td>
                <td className="w-[14px]"></td>
              </tr>
            </thead>
            <tbody className="h-[220px] overflow-y-scroll">
              {patientSurgeries.length == 0 && (
                <div className="border-1 w-[180vh] py-5  absolute flex justify-center items-center">
                  <p className="text-[15px] font-normal text-gray-700 text-center">
                    No Surgeries Found <br />
                  </p>
                </div>
=======
            <tr className="h-[70px] border-b text-[15px] font-semibold uppercase text-[#64748B]">
                <td className="px-6 py-3">Surgery ID </td>
                <td className="px-6 py-3">DATE OF SURGERY</td>
                <td className="px-6 py-3">TYPE</td>
                <td className="px-6 py-3">SURGERY</td>
                <td className="px-6 py-3">NOTES</td>
                <td className="relative px-6 py-3">
                  <p className="absolute right-[80px] top-[24px]">Action</p>
                </td>
              </tr>
            </thead>
            <tbody className="h-[254px]">
              {patientSurgeries.length == 0 && (
                <h1 className="border-1 absolute flex items-center justify-center py-5">
                  <p className="text-center text-[15px] font-normal text-gray-700">
                    No Surgeries Found <br />
                  </p>
                </h1>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              )}
              {patientSurgeries.map((surgery, index) => (
                <tr
                  key={index}
<<<<<<< HEAD
                  className="group hover:bg-[#f4f4f4]  border-b text-[15px]"
                >
                  <td className="px-6 py-3 ">
                    <ResuableTooltip text={surgery.surgeries_uuid} />
                  </td>
                  <td className="px-6 py-3 ">
                    {formatDate(surgery.surgeries_dateOfSurgery)}
                  </td>
                  <td className="px-6 py-3 ">
                    <ResuableTooltip text={surgery.surgeries_typeOfSurgery} />
                  </td>
                  <td className="px-6 py-3 ">
                    <ResuableTooltip text={surgery.surgeries_surgery} />
                  </td>
                  <td className="px-6 py-3 ">
                    <ResuableTooltip text={surgery.surgeries_notes} />
                  </td>
                  <td className="py-3 px-6 flex justify-center">
=======
                  className="group h-[63px] border-b text-[15px] hover:bg-[#f4f4f4]"
                >
                  <td className="px-6 py-3">
                    <ResuableTooltip text={surgery.surgeries_uuid} />
                  </td>
                  <td className="px-6 py-3">
                    {formatTableDate(surgery.surgeries_dateOfSurgery)}
                  </td>
                  <td className="px-6 py-3">
                    <ResuableTooltip text={surgery.surgeries_typeOfSurgery} />
                  </td>
                  <td className="px-6 py-3">
                    <ResuableTooltip text={surgery.surgeries_surgery} />
                  </td>
                  <td className="px-6 py-3">
                    <ResuableTooltip text={surgery.surgeries_notes} />
                  </td>
                  <td className="relative py-3 pl-6">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    <div
                      onClick={() => {
                        isModalOpen(true);
                        setIsEdit(true);
                        setSurgeryData(surgery);
                      }}
<<<<<<< HEAD
=======
                      className="absolute right-[40px] top-[11px]"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    >
                      <Edit></Edit>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
      {isOpen && (
        <Modal
          content={
            <SurgeriesModalContent
              isModalOpen={isModalOpen}
              isOpen={isOpen}
              isEdit={isEdit}
              surgeryData={surgeryData}
              label="sample label"
              onSuccess={onSuccess}
              onFailed={onFailed}
              setErrorMessage={setError}
              setIsUpdated={setIsUpdated}
            />
          }
          isModalOpen={isModalOpen}
        />
      )}

      {isSuccessOpen && (
        <SuccessModal
          label="Success"
          isAlertOpen={isSuccessOpen}
          toggleModal={setIsSuccessOpen}
          isUpdated={isUpdated}
          setIsUpdated={setIsUpdated}
        />
      )}
      {isErrorOpen && (
        <ErrorModal
          label="Surgery already exist"
          isAlertOpen={isErrorOpen}
          toggleModal={setIsErrorOpen}
          isEdit={isEdit}
          errorMessage={error}
        />
      )}
    </div>
  );
}
