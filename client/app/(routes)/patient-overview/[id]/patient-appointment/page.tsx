"use client";
import Image from "next/image";

import React, { useEffect } from "react";
import DropdownMenu from "@/components/dropdown-menu";
import Add from "@/components/shared/buttons/add";
import DownloadPDF from "@/components/shared/buttons/downloadpdf";
import View from "@/components/shared/buttons/view";
import { useState } from "react";
import { onNavigate } from "@/actions/navigation";
<<<<<<< HEAD
import { useParams, useRouter } from "next/navigation";
import { fetchAppointmentsByPatient as fetchAppointmentsByPatient } from "@/app/api/appointments-api/appointments.api";
import { AppointmentviewModalContent } from "@/components/modal-content/appointmentview-modal-content";
=======
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { fetchAppointmentsByPatient as fetchAppointmentsByPatient } from "@/app/api/appointments-api/appointments.api";
import { AppointmenViewModalContent } from "@/components/modal-content/appointmentview-modal-content";
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
import Modal from "@/components/reusable/modal";
import { AppointmentModalContent } from "@/components/modal-content/appointment-modal-content";
import { ClipboardList } from "lucide-react";
import { AppointmentemailModalContent } from "@/components/modal-content/appointmentemail-modal-content";
import { SuccessModal } from "@/components/shared/success";
import { ErrorModal } from "@/components/shared/error";
import Pagination from "@/components/shared/pagination";
import ResuableTooltip from "@/components/reusable/tooltip";
<<<<<<< HEAD
=======
import PdfDownloader from "@/components/pdfDownloader";
import Edit from "@/components/shared/buttons/edit";
import { useEditContext } from "@/app/(routes)/patient-overview/[id]/editContext";

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
const Appointment = () => {
  const router = useRouter();
  if (typeof window === "undefined") {
  }
<<<<<<< HEAD
  // start of orderby & sortby function
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isEdit, setIsView] = useState(false);
=======
  const { isOpenHovered } = useEditContext();

  const searchParams = useSearchParams();
  const [appointmentId, setAppointmentId] = useState(searchParams.get("id"));
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isEdit, setIsEdit] = useState(false);
  const [isView, setIsView] = useState(false);
console.log(isEdit, "isEdit");
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  const [isUpdated, setIsUpdated] = useState(false);
  const formatDate = (createdAt: string | number | Date) => {
    // Create a new Date object from the provided createdAt date string
    const date = new Date(createdAt);

    // Get the month, day, and year
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();

    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate;
  };
  const formatTime = (timeString: string) => {
    // Split the time string into hours and minutes
    const [hours, minutes] = timeString.split(":").map(Number);

    // Format the hours part into 12-hour format
    let formattedHours = hours % 12 || 12; // Convert 0 to 12
    const ampm = hours < 12 ? "am" : "pm"; // Determine if it's AM or PM

    // If minutes is undefined or null, set it to 0
    const formattedMinutes =
      minutes !== undefined ? minutes.toString().padStart(2, "0") : "00";

    // Return the formatted time string
    return `${formattedHours}:${formattedMinutes}${ampm}`;
  };
  const [error, setError] = useState<string | null>(null);
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
  const [appointmentData, setAppointmentData] = useState<any[]>([]);

  const [patientAppointments, setPatientAppointments] = useState<any[]>([]);
  const [term, setTerm] = useState("");
<<<<<<< HEAD
  const [sortOrder, setSortOrder] = useState("ASC");
=======
  const [sortOrder, setSortOrder] = useState("DESC");
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  const [sortBy, setSortBy] = useState("appointmentDate");
  const [pageNumber, setPageNumber] = useState("");
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalAppointments, setTotalAppointments] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isOpenSortedBy, setIsOpenSortedBy] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const handleOrderOptionClick = (option: string) => {
    if (option === "Ascending") {
      setSortOrder("ASC");
    } else {
      setSortOrder("DESC");
    }
  };

  const params = useParams<{
    id: any;
    tag: string;
    item: string;
  }>();

  const patientId = params.id.toUpperCase();

  const handleSortOptionClick = (option: string) => {
    setIsOpenSortedBy(false);
    if (option === "Date") {
      setSortBy("appointmentDate");
    } else if (option === "Time") {
      setSortBy("appointmentTime");
    } else {
      setSortBy("appointmentStatus");
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
    { label: "Status", onClick: handleSortOptionClick },
  ]; // end of orderby & sortby function
  const [gotoError, setGotoError] = useState(false);
<<<<<<< HEAD

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenReminder, setIsOpenReminder] = useState(false);
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
=======
  const [filterStatusFromCheck, setFilterStatusFromCheck] = useState<string[]>(
    [],
  );
  const [filterTypeFromCheck, setFilterTypeFromCheck] = useState<string[]>(
    [],
  );
  const [isOpenFilterStatus, setIsOpenFilterStatus] = useState(false);
  const handleStatusUpdate = (checkedFilters: string[]) => {
    setFilterStatusFromCheck(checkedFilters);
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  };
  const handleTypeUpdate = (checkedFilters: string[]) => {
    setFilterTypeFromCheck(checkedFilters);
  };
  const optionsFilterStatus = [
    { label: "Scheduled", onClick: setFilterStatusFromCheck },
    { label: "Patient-IN", onClick: setFilterStatusFromCheck },
    { label: "On-going", onClick: setFilterStatusFromCheck },
    { label: "Cancelled", onClick: setFilterStatusFromCheck },
    { label: "Missed", onClick: setFilterStatusFromCheck },
    { label: "Done", onClick: setFilterStatusFromCheck },
  ];
  const optionsFilterType = [
    { label: "Podiatrist", onClick: setFilterTypeFromCheck },
    { label: "ER Visit", onClick: setFilterTypeFromCheck },
    { label: "Doctor's", onClick: setFilterTypeFromCheck },
    { label: "Dental", onClick: setFilterTypeFromCheck },
    { label: "Eye", onClick: setFilterTypeFromCheck },
    { label: "Others", onClick: setFilterTypeFromCheck },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenReminder, setIsOpenReminder] = useState(false);

  const isModalOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "visible";
<<<<<<< HEAD
=======
      setIsEdit(false);
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
      setIsView(false);
      setAppointmentData([]);
    }
  };

  const isModalReminderOpen = (isOpen: boolean) => {
    setIsOpenReminder(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "visible";
<<<<<<< HEAD
      setIsView(false);
=======
      setIsEdit(false);
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
      setAppointmentData([]);
    }
  };

  const onSuccess = () => {
<<<<<<< HEAD
=======
    setIsEdit(false);
    setIsView(false);
    isModalOpen(false);
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    setIsSuccessOpen(true);
  };
  const onFailed = () => {
    setIsErrorOpen(true);
<<<<<<< HEAD
=======
    setIsEdit(false);
    setIsView(false);
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAppointmentsByPatient(
          patientId,
          appointmentId != null && term == "" ? appointmentId : term,
          currentPage,
          sortBy,
          sortOrder as "ASC" | "DESC",
          filterStatusFromCheck,
          filterTypeFromCheck,
          4,
          router,
        );

        //convert date to ISO string

        setPatientAppointments(response.data);
        console.log("Patient list after setting state:", response.data);
        setTotalPages(response.totalPages);
        setTotalAppointments(response.totalCount);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
<<<<<<< HEAD
  }, [currentPage, sortOrder, sortBy, term, isOpen]);
  if (isLoading) {
    return (
      <div className="container w-full h-full flex justify-center items-center ">
=======
  }, [currentPage, sortOrder, sortBy, term, isOpen, filterStatusFromCheck, filterTypeFromCheck]);

  useEffect(() => {
    if (term != "") {
      setAppointmentId("");
    }
  }, [term]);
  useEffect(() => {
    console.log(isOpenHovered, "OPENHOVERED IN PAGE");
  }, [isOpenHovered]);

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

  return (
<<<<<<< HEAD
    <div className="w-full h-full flex flex-col justify-between">
      <div className="w-full h-full">
        <div className="w-full justify-between flex mb-2">
          <div className="flex-row">
            <p className="p-title">Appointment</p>

            <div>
              <p className="text-[#64748B] font-normal w-[1157px] h-[22px] text-[15px] ">
=======
    <div className="flex h-full w-full flex-col justify-between">
      <div className="h-full w-full">
        <div className="mb-2 flex w-full justify-between">
          <div className="flex-row">
            <p className="p-table-title">Appointment</p>

            <div>
              <p className="my-1 h-[23px] text-[15px] font-normal text-[#64748B]">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                Total of {totalAppointments} Appointments
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => isModalOpen(true)} className="btn-add gap-2">
<<<<<<< HEAD
              <Image src="/imgs/add.svg" alt="" width={22} height={22} />
              <p className="text-[18px]">Add</p>
            </button>
            <button
              onClick={() => isModalReminderOpen(true)}
              className="btn-pdfs gap-2"
            >
              <ClipboardList width={22} height={22} />
              <p className="text-[18px]">Reminder</p>
            </button>
          </div>
        </div>

        <div className="w-full m:rounded-lg items-center">
          <div className="w-full justify-between flex items-center bg-[#F4F4F4] h-[75px]">
            <form className="mr-5 relative">
=======
              <Image src="/imgs/add.svg" alt="" width={18} height={18} />
              <p className="">Add</p>
            </button>
            <PdfDownloader
              props={["Uuid", "Date", "Time", "End_time", "Details", "Status"]}
              variant={"Appointment Table"}
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
                  className="py-3 px-5 m-5 w-[573px] outline-none h-[47px] pt-[15px] ring-[1px] ring-[#E7EAEE] text-[15px] rounded pl-10 relative bg-[#fff] bg-no-repeat"
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
                  width={20}
                  height={20}
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
        <div>
          <table className="text-left rtl:text-right">
            <thead>
<<<<<<< HEAD
              <tr className="uppercase text-[#64748B] border-y text-[15px] h-[70px] font-semibold">
                <td className="px-6 py-3 ">STATUS</td>
                <td className="px-6 py-3 ">DATE</td>
                <td className="px-6 py-3 ">TIME</td>
                <td className="px-6 py-3 ">END TIME</td>
                <td className="px-6 py-3 ">DETAILS</td>
                <td className="py-3 px-6 text-center">ACTION</td>
                <td className="w-[14px]"></td>
              </tr>
            </thead>
            <tbody className="h-[220px] overflow-y-scroll">
              {patientAppointments.length === 0 && (
                <tr>
                  <td className="border-1 w-[180vh] py-5 absolute flex justify-center items-center">
                    <p className="font-normal text-gray-700 text-center text-[15px]">
=======
              <tr className="h-[70px] border-b text-[15px] font-semibold uppercase text-[#64748B]">
                <td className="w-[190px] py-3 pl-6">APPOINTMENT UID</td>
                <td className="w-[130px] py-3">DATE</td>
                <td className="w-[190px] py-3">DOCTOR'S NAME</td>
                <td className="w-[130px] py-3">TIME</td>
                <td className="w-[130px] py-3">END TIME</td>
                {/* <td className="w-[160px] py-3">TYPE</td> */}
                <td className="relative w-[170px]">
                  <div
                    className={`absolute ${filterStatusFromCheck?.length > 0 ? "top-[24px]" : "top-[24px]"}`}
                  >
                    <DropdownMenu
                      options={optionsFilterType.map(
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
                      statusUpdate={handleTypeUpdate} // Pass the handler function
                      checkBox={true}
                      title={"Type"}
                      label={"Type"}
                    />
                  </div>
                </td>
                <td className="w-[150px] py-3">DETAILS</td>

                <td className="relative">
                  <div
                    className={`absolute ${filterStatusFromCheck?.length > 0 ? "left-[26px] top-[24px]" : "left-[26px] top-[24px]"}`}
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
                  <p className="absolute right-[114px] top-[24px]">ACTION</p>
                </td>
              </tr>
            </thead>
            <tbody className="h-[254px]">
              {patientAppointments.length === 0 && (
                <tr>
                  <td className="border-1 absolute flex w-[180vh] items-center justify-center py-5">
                    <p className="text-center text-[15px] font-normal text-gray-700">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      No Appointment/s <br />
                    </p>
                  </td>
                </tr>
              )}
              {patientAppointments.length > 0 && (
                <>
                  {patientAppointments.map((appointments, index) => (
                    <tr
                      key={index}
                      className="group h-[63px] border-b text-[15px] hover:bg-[#f4f4f4]"
                    >
<<<<<<< HEAD
                      <td className="text-[15px] px-6 py-3  rounded-full flex items-center">
                        <div
                          className={`px-2 font-semibold rounded-[20px] relative flex items-center ${
                            appointments.appointments_appointmentStatus ===
                            "Scheduled"
                              ? "bg-[#E7EAEE] text-[#71717A] text-[15px]" // Green color for Scheduled
                              : appointments.appointments_appointmentStatus ===
                                "Done"
                              ? "bg-[#CCFFDD] text-[#17C653] text-[15px]" // Dark color for Done
                              : appointments.appointments_appointmentStatus ===
                                  "Patient-IN" ||
                                appointments.appointments_appointmentStatus ===
                                  "On-going"
                              ? "bg-[#FFF8DD] text-[#F6C000] text-[15px]" // Yellow for On Going
                              : appointments.appointments_appointmentStatus ===
                                  "Missed" ||
                                appointments.appointments_appointmentStatus ===
                                  "Cancelled"
                              ? "bg-[#FFE8EC] text-[#EF4C6A] text-[15px]" // Red color for Missed and Cancelled
                              : ""
                          }`}
                        >
                          <span
                            className={`inline-block h-2 w-2 rounded-full mr-1 ${
                              appointments.appointments_appointmentStatus ===
                              "Scheduled"
                                ? "bg-[#7E7E7E]" // Green color for Scheduled
                                : appointments.appointments_appointmentStatus ===
                                  "Done"
                                ? "bg-[#0EB146]" // Dark color for Done
                                : appointments.appointments_appointmentStatus ===
                                    "Patient-IN" ||
                                  appointments.appointments_appointmentStatus ===
                                    "On-going"
                                ? "bg-[#E4B90E]" // Yellow for On Going
                                : appointments.appointments_appointmentStatus ===
                                    "Missed" ||
                                  appointments.appointments_appointmentStatus ===
                                    "Cancelled"
                                ? "bg-[#EE4D4D]" // Red color for Missed and Cancelled
                                : ""
                            }`}
                          ></span>
                          {appointments.appointments_appointmentStatus}
                        </div>
                      </td>

                      <td className="px-6 py-3 text-[15px] ">
                        {appointments.appointments_appointmentDate}
                      </td>
                      <td className="px-6 py-3 text-[15px] ">
                        {formatTime(appointments.appointments_appointmentTime)}
                      </td>
                      <td className="px-6 py-3 text-[15px] ">
=======
                      <td className="w-[190px] py-3 pl-6">
                        {appointments.appointments_uuid}
                      </td>

                      <td className="w-[130px] py-3">
                        {formatDate(appointments.appointments_appointmentDate)}
                      </td>
                      <td className="w-[190px] py-3">
                        <ResuableTooltip
                          text={appointments.appointments_appointmentDoctor}
                        />
                      </td>
                      <td className="w-[130px] py-3">
                        {formatTime(appointments.appointments_appointmentTime)}
                      </td>
                      <td className="w-[130px] py-3">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                        {formatTime(
                          appointments.appointments_appointmentEndTime,
                        )}
                      </td>
<<<<<<< HEAD
                      <td className="px-6 py-3 text-[15px] ">
=======
                      <td className="w-[170px] py-3"><ResuableTooltip
                          text={appointments.appointments_appointmentType}
                        /></td>
                      <td className="w-[150px] py-3">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                        <ResuableTooltip
                          text={appointments.appointments_details}
                        />
                      </td>
<<<<<<< HEAD
                      <td className="py-3 px-6 flex justify-center">
=======
                      <td className="px-5 py-3">
                        <div
                          className={`relative flex h-[25px] w-[95px] items-center justify-center rounded-[30px] font-semibold capitalize placeholder:text-[15px] ${
                            appointments.appointments_appointmentStatus ===
                            "Scheduled"
                              ? "bg-[#E7EAEE] text-[#71717A]" // Green color for Scheduled
                              : appointments.appointments_appointmentStatus ===
                                  "Done"
                                ? "bg-[#CCFFDD] text-[#17C653]" // Dark color for Done
                                : appointments.appointments_appointmentStatus ===
                                      "Patient-IN" ||
                                    appointments.appointments_appointmentStatus ===
                                      "On-going"
                                  ? "bg-[#FFF8DD] text-[#F6C000]" // Yellow for On Going
                                  : appointments.appointments_appointmentStatus ===
                                      "Missed"
                                    ? "bg-[#FFE8EC] text-[#EF4C6A]" // Red color for Missed
                                    : appointments.appointments_appointmentStatus ===
                                          "Cancelled" ||
                                        appointments.appointments_appointmentStatus ===
                                          "Resched"
                                      ? "bg-[#FFE8EC] text-[#EF4C6A]" // Red color for Cancelled
                                      : ""
                          }`}
                        >
                          {appointments.appointments_appointmentStatus}
                        </div>
                      </td>
                      <td className="relative py-3 pl-6">
                        <p
                          onClick={() => {
                            isModalOpen(true);
                            setIsEdit(true);
                            setAppointmentData(appointments);
                          }}
                          className="absolute right-[146px] top-[11px]"
                        >
                          <Edit></Edit>
                        </p>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                        <p
                          onClick={() => {
                            isModalOpen(true);
                            setIsView(true);
                            setAppointmentData(appointments);
                          }}
                          className="absolute right-[40px] top-[11px]"
                        >
                          <View></View>
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
            <AppointmentModalContent
              isModalOpen={isModalOpen}
              onSuccess={onSuccess}
              isOpen={isOpen}
              isView={isEdit}
              appointmentData={appointmentData}
              label="sample label"
            />
          }
          isModalOpen={isModalOpen}
        />
      )}
<<<<<<< HEAD
=======
      {isView && (
        <Modal
          content={
            <AppointmenViewModalContent
              isModalOpen={isModalOpen}
              isView={isView}
              appointmentData={appointmentData}
              // isView={isView}
              // prescriptionData={prescriptionData}
            />
          }
          isModalOpen={isModalOpen}
        />
      )}

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
      {isOpenReminder && (
        <Modal
          content={
            <AppointmentemailModalContent
              onSuccess={onSuccess}
              onFailed={onFailed}
              isModalOpen={isModalReminderOpen}
            />
          }
          isModalOpen={isModalOpen}
        />
      )}

      {isSuccessOpen && (
        <SuccessModal
<<<<<<< HEAD
          label="Email Sent Succesfully"
          isAlertOpen={isSuccessOpen}
          toggleModal={setIsSuccessOpen}
          isUpdated={isUpdated}
=======
          label={isEdit? "Updated" : "Submitted"}
          isAlertOpen={isSuccessOpen}
          toggleModal={setIsSuccessOpen}
          isUpdated={isEdit}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
          setIsUpdated={setIsUpdated}
        />
      )}
      {isErrorOpen && (
        <ErrorModal
          label="Sending Email Failed"
          isAlertOpen={isErrorOpen}
          toggleModal={setIsErrorOpen}
          isEdit={isEdit}
          errorMessage={error}
        />
      )}
    </div>
  );
};

export default Appointment;
