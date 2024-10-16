"use client";

import React, { useEffect } from "react";
import DropdownMenu from "@/components/dropdown-menu";
import Edit from "@/components/shared/buttons/edit";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchScheduledMedByPatient } from "@/app/api/medication-logs-api/scheduled-med-api";
import { ErrorModal } from "@/components/shared/error";
import { SuccessModal } from "@/components/shared/success";
import Image from "next/image";
import Modal from "@/components/reusable/modal";
import { ScheduledModalContent } from "@/components/modal-content/scheduled-modal-content";
import Pagination from "@/components/shared/pagination";
import ResuableTooltip from "@/components/reusable/tooltip";
<<<<<<< HEAD
=======
import { formatTableTime } from "@/lib/utils"; // Adjust the path as needed
import { formatTableDate } from "@/lib/utils"; // Adjust the path as needed
import PdfDownloader from "@/components/pdfDownloader";
import AddButton from "@/components/reusable/addButton";
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de

const Scheduled = () => {
  const router = useRouter();
  if (typeof window === "undefined") {
  }
  // start of orderby & sortby function
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [sortOrder, setSortOrder] = useState("DESC");
  const [sortBy, setSortBy] = useState("createdAt");
  const [pageNumber, setPageNumber] = useState("");
  const [patientScheduledMed, setPatientScheduledMed] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalScheduledMeds, setTotalScheduledMeds] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [scheduledMedData, setScheduledMedData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [gotoError, setGotoError] = useState(false);
  const [term, setTerm] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
<<<<<<< HEAD

  interface Modalprops {
    label: string;
    isOpen: boolean;
    isModalOpen: (isOpen: boolean) => void;
  }
=======
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de

  const isModalOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "visible";
      setIsEdit(false);
      setScheduledMedData([]);
    }
  };
  const [perPage, setPerPage] = useState(4);

  const params = useParams<{
    id: any;
    tag: string;
    item: string;
  }>();
  const [filterStatusFromCheck, setFilterStatusFromCheck] = useState<string[]>(
    [],
  );
  const [isOpenFilterStatus, setIsOpenFilterStatus] = useState(false);
  const handleStatusUpdate = (checkedFilters: string[]) => {
    setFilterStatusFromCheck(checkedFilters);
    // if (checkedFilters) {
    //   console.log("Checked zz in Parent:", filterStatusFromCheck);
    // }
    // Here you can further process the checked filters or update other state as needed
  };
  const optionsFilterStatus = [
    { label: "Refused", onClick: setFilterStatusFromCheck },
    { label: "Given", onClick: setFilterStatusFromCheck },
    { label: "Held", onClick: setFilterStatusFromCheck },
  ];
  const patientId = params.id.toUpperCase();

  const [isOpenSortedBy, setIsOpenSortedBy] = useState(false);
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
    if (option === "Date") {
      setSortBy("medicationLogsDate");
    } else if (option === "Time") {
      setSortBy("medicationLogsTime");
    } else {
      setSortBy("medicationLogsName");
    }
    console.log("option", option);
  };
  const optionsOrderedBy = [
    { label: "Ascending", onClick: handleOrderOptionClick },
    { label: "Descending", onClick: handleOrderOptionClick },
  ];
  const optionsSortBy = [
    { label: "Date", onClick: handleSortOptionClick },
    { label: "Time", onClick: handleSortOptionClick },
    { label: "Medication", onClick: handleSortOptionClick },
  ]; // end of orderby & sortby function

<<<<<<< HEAD
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
        const response = await fetchScheduledMedByPatient(
          patientId,
          term,
          currentPage,
          sortBy,
          sortOrder as "ASC" | "DESC",

          filterStatusFromCheck,
          4,
          router,
        );
        setPatientScheduledMed(response.data);
        setTotalPages(response.totalPages);
        setTotalScheduledMeds(response.totalCount);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [
    currentPage,
    sortOrder,
    sortBy,
    term,
    isSuccessOpen,
    filterStatusFromCheck,
  ]);

  const onSuccess = () => {
    setIsSuccessOpen(true);
    setIsEdit(false);
    isModalOpen(false);
    setScheduledMedData([]);
  };
  const onFailed = () => {
    setIsErrorOpen(true);
    setIsEdit(false);
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

  console.log("patientScheduledMed", patientScheduledMed);
  console.log(patientScheduledMed);
  return (
<<<<<<< HEAD
    <div className="  w-full h-full flex flex-col justify-between">
      <div className="w-full h-full">
        <div className="w-full justify-between flex mb-2">
          <div className="flex-row">
            <div className="flex gap-2">
              <p className="p-title">Medication Logs</p>
=======
    <div className="flex h-full w-full flex-col justify-between">
      <div className="h-full w-full">
        <div className="mb-2 flex w-full justify-between">
          <div className="flex-row">
            <div className="flex gap-2">
              <p className="p-table-title">Medication Logs</p>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              <span className="slash">{">"}</span>
              <span className="active">Scheduled</span>
              <span className="slash">{"/"}</span>
              <span
                onClick={() => {
                  setIsLoading(true);
                  router.replace(
<<<<<<< HEAD
                    `/patient-overview/${patientId.toLowerCase()}/medication/prorenata`
=======
                    `/patient-overview/${patientId.toLowerCase()}/medication/prorenata`,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  );
                }}
                className="bread"
              >
                PRN
              </span>
            </div>
            <div>
<<<<<<< HEAD
              <p className="text-[#64748B] font-normal w-[1157px] h-[22px] text-[15px]">
=======
              <p className="my-1 h-[23px] text-[15px] font-normal text-[#64748B]">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                Total of {totalScheduledMeds} Scheduled Medication Logs
              </p>
            </div>
          </div>
          <div className="flex gap-2">
<<<<<<< HEAD
            <button onClick={() => isModalOpen(true)} className="btn-add gap-2">
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

        <div className="w-full m:rounded-lg items-center">
          <div className="w-full justify-between flex items-center bg-[#F4F4F4] h-[75px]">
            <form className="mr-5 relative">
=======
           <AddButton isModalOpen={isModalOpen} />
            <PdfDownloader
              props={["Uuid", "Date", "Time", "Medication", "Notes", "Status"]}
              variant={"Scheduled Medication Table"}
              patientId={patientId}
            />
          </div>
        </div>

        <div className="m:rounded-lg w-full items-center">
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
                <tr className="uppercase text-[#64748B] border-y text-[15px] h-[70px] font-semibold">
                  <td className="px-6 py-3">Medication ID</td>
                  <td className="px-6 py-3">Date</td>
                  <td className="px-6 py-3">Time</td>
                  <td className="px-6 py-3">Medication</td>
                  <td className="px-6 py-3">Notes</td>
                  <td className="px-6 py-3 ">Status</td>
                  <td className="px-9 py-3">Action</td>
                  <td className="w-[14px]"></td>
                </tr>
              </thead>
              <tbody className="h-[220px] overflow-y-scroll">
                {patientScheduledMed.length === 0 && (
                  <tr>
                    <td className="border-1 w-[180vh] py-5 absolute flex justify-center items-center">
                      <p className="text-[15px] font-normal text-gray-700 flex text-center">
=======
                <tr className="h-[70px] border-b text-[15px] font-semibold uppercase text-[#64748B]">
                  <td className="px-6 py-3">Medication UID</td>
                  <td className="px-6 py-3">Date</td>
                  <td className="px-6 py-3">Time</td>
                  <td className="px-6 py-3">Medication</td>
                  <td className="px-6 py-3">Dosage</td>
                  <td className="px-6 py-3">Notes</td>
                  <td className="relative px-6 py-3">
                    <div
                      className={`absolute ${filterStatusFromCheck?.length > 0 ? "right-[px] top-[24px]" : "right-[44px] top-[24px]"}`}
                    >
                      <DropdownMenu
                        options={optionsFilterStatus.map(
                          ({ label, onClick }) => ({
                            label,
                            onClick: () => {
                              // onClick(label);
                              // console.log("label", label);
                            },
                          }),
                        )}
                        open={isOpenFilterStatus}
                        width={"165px"}
                        statusUpdate={handleStatusUpdate} // Pass the handler function
                        checkBox={true}
                        title={"Status"}
                        label={"Status"}
                      />
                    </div>
                  </td>
                  <td className="relative px-6 py-3">
                    <p className="absolute right-[80px] top-[24px]">Action</p>
                  </td>
                </tr>
              </thead>
              <tbody className="h-[254px]">
                {patientScheduledMed.length === 0 && (
                  <tr>
                    <td className="border-1 absolute flex items-center justify-center py-5">
                      <p className="text-center text-[15px] font-normal text-gray-700">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                        No Scheduled Medication Log/s <br />
                      </p>
                    </td>
                  </tr>
                )}
                {patientScheduledMed.length > 0 && (
                  <>
                    {patientScheduledMed.map((schedMed, index) => (
                      <tr
                        key={index}
<<<<<<< HEAD
                        className="group hover:bg-[#f4f4f4]  border-b text-[15px]"
=======
                        className="group h-[63px] border-b text-[15px] hover:bg-[#f4f4f4]"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      >
                        <td className="px-6 py-3">
                          <ResuableTooltip
                            text={schedMed.medicationlogs_uuid}
                          />
                        </td>
                        <td className="px-6 py-3">
<<<<<<< HEAD
                          {schedMed.medicationlogs_medicationLogsDate}
                        </td>
                        <td className="px-6 py-4">
                          {new Date(
                            new Date().getFullYear(), // Use current year as default
                            new Date().getMonth(), // Use current month as default
                            new Date().getDate(), // Use current day as default
                            parseInt(
                              schedMed.medicationlogs_medicationLogsTime.split(
                                ":"
                              )[0]
                            ), // Extract hours
                            parseInt(
                              schedMed.medicationlogs_medicationLogsTime.split(
                                ":"
                              )[1]
                            ) // Extract minutes
                          ).toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          })}
=======
                          {formatTableDate(
                            schedMed.medicationlogs_medicationLogsDate,
                          )}
                        </td>
                        <td className="px-6 py-3">
                          {formatTableTime(
                            schedMed.medicationlogs_medicationLogsTime,
                          )}
                          {/* time not formattd left as is for now  and check with local time of machine */}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                        </td>
                        <td className="px-6 py-3">
                          <ResuableTooltip
                            text={schedMed.medicationlogs_medicationLogsName}
                          />
                        </td>
<<<<<<< HEAD
                        <td className="px-6 py-3">
                          <ResuableTooltip
                            text={schedMed.medicationlogs_notes}
                          />
                        </td>
                        <td className="text-15px me-1 px-6 py-5 rounded-full flex items-center">
                          <div
                            className={`px-2 font-semibold rounded-[20px] relative flex items-center ${
                              schedMed.medicationlogs_medicationLogStatus ===
                              "Given"
                                ? "bg-[#CCFFDD] text-[#17C653] text-[15px]" // Green color for Given
                                : schedMed.medicationlogs_medicationLogStatus ===
                                  "Held"
                                ? "bg-[#E7EAEE] text-[#71717A] text-[15px]" // Dark color for Held
                                : schedMed.medicationlogs_medicationLogStatus ===
                                  "Refused"
                                ? "bg-[#FFE8EC] text-[#EF4C6A] text-[15px]" // Red color for Refused
                                : schedMed.medicationlogs_medicationLogStatus
                            }`}
                          >
                            {schedMed.medicationlogs_medicationLogStatus}
                          </div>
                        </td>

                        <td className="px-6 py-3">
=======

                        <td className="px-6 py-3">
                          <ResuableTooltip
                            text={schedMed.medicationlogs_notes}
                          />
                        </td>
                        <td className="px-6 py-3">
                          {schedMed.medicationlogs_medicationLogsDosage}
                          {/* static value for dosage temporary */}
                        </td>
                        <td className="relative">
                          <div
                            className={`absolute right-[18px] top-[18px] flex h-[25px] w-[85px] items-center justify-center rounded-[30px] font-semibold ${
                              schedMed.medicationlogs_medicationLogStatus ===
                              "Given"
                                ? "bg-[#CCFFDD] text-[#17C653]" // Green color for Given
                                : schedMed.medicationlogs_medicationLogStatus ===
                                    "Held"
                                  ? "h-[25px] bg-[#FFF8DD] px-7 text-center text-[#F6C000]" // Dark color for Held
                                  : schedMed.medicationlogs_medicationLogStatus ===
                                      "Refused"
                                    ? "h-[25px] w-[85px] bg-[#FFE8EC] text-[#DB3956]" // Red color for Refused
                                    : schedMed.medicationlogs_medicationLogStatus
                            }`}
                          >
                            {schedMed.medicationlogs_medicationLogStatus}
                          </div>
                        </td>

                        <td className="relative py-3 pl-6">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                          <p
                            onClick={() => {
                              isModalOpen(true);
                              setIsEdit(true);
                              setScheduledMedData(schedMed);
                            }}
<<<<<<< HEAD
=======
                            className="absolute right-[40px] top-[11px]"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                          >
                            <Edit></Edit>
                          </p>
                        </td>
                      </tr>
                    ))}
                  </>
                )}
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
      {isOpen && (
        <Modal
          content={
            <ScheduledModalContent
              isModalOpen={isModalOpen}
              uuid=""
              name=""
              aschData={""}
              isOpen={isOpen}
              isEdit={isEdit}
              scheduledMedData={scheduledMedData}
<<<<<<< HEAD
              setIsUpdated={setIsUpdated}
              label="sample label"
              onSuccess={onSuccess}
              onFailed={onFailed}
=======
              label="sample label"
              onSuccess={onSuccess}
              onFailed={onFailed}
              setIsUpdated={setIsUpdated}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              setErrorMessage={setError}
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
          label="Scheduled Log already exist"
          isAlertOpen={isErrorOpen}
          toggleModal={setIsErrorOpen}
          isEdit={isEdit}
          errorMessage={error}
        />
      )}
    </div>
  );
};

export default Scheduled;
