"use client";

import { searchPatientList } from "@/app/api/patients-api/patientList.api";
import DropdownMenu from "@/components/dropdown-menu";
import Edit from "@/components/shared/buttons/view";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SuccessModal } from "@/components/shared/success";
import { getAccessToken } from "@/app/api/login-api/accessToken";
import DownloadPDF from "@/components/shared/buttons/downloadpdf";
import { fetchUpcomingAppointments } from "@/app/api/appointments-api/upcoming-appointments-api";
import Image from "next/image";
import * as React from "react";
import { format, set } from "date-fns";
import { Calendar as CalendarIcon, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { fetchAllAppointments } from "@/app/api/appointments-api/fetch-all-appointments.api";
import { ErrorModal } from "@/components/shared/error";
import Pagination from "@/components/shared/pagination";
import { fetchProfileImages } from "@/app/api/patients-api/patientProfileImage.api";
import ResuableTooltip from "@/components/reusable/tooltip";
<<<<<<< HEAD
=======
import PdfDownloader from "@/components/pdfDownloader";
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de

export default function AppointmentPage() {
  const router = useRouter();

  if (typeof window === "undefined") {
    return (
<<<<<<< HEAD
      <div className="w-full h-full flex justify-center items-center">
=======
      <div className="flex h-full w-full items-center justify-center">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        <Image
          src="/imgs/colina-logo-animation.gif"
          width={100}
          height={100}
          alt="loading"
        />
      </div>
    );
  }

  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);

  const [isOpenSortedBy, setIsOpenSortedBy] = useState(false);
<<<<<<< HEAD
  const [sortBy, setSortBy] = useState("appointmentDate");
  const [appointmentList, setAppointmentList] = useState<any[]>([]);
  const [patientIdappointmentList, setPatientId] = useState<number>(0);
=======
  const [isOpenFilterStatus, setIsOpenFilterStatus] = useState(false);
  const [sortBy, setSortBy] = useState("appointmentStatus");
  const [appointmentList, setAppointmentList] = useState<any[]>([]);
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalAppointments, setTotalAppointments] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [pageNumber, setPageNumber] = useState("");
  const [gotoError, setGotoError] = useState(false);
  const [term, setTerm] = useState("");
<<<<<<< HEAD
  const [sortOrder, setSortOrder] = useState("ASC");
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [totalUpcoming, setTotalUpcoming] = useState(0);
  const [upcomingTotalPages, setUpcomingTotalPages] = useState(0);
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();
  const [upcomingAppointments, setUpcomingAppointments] = useState<
    {
      patient_firstName: string;
      patient_middleName: string;
      patient_lastName: string;
      appointments_appointmentDate: string;
      appointments_appointmentEndTime: string;
      appointments_appointmentTime: string;
    }[]
  >([]);
=======
  const [sortOrder, setSortOrder] = useState("DESC");
  // const [filterStatus, setFilterStatus] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  const startD = startDate
    ? startDate.toISOString().slice(0, 10)
    : "2021-01-01";
  const endD = endDate ? endDate.toISOString().slice(0, 10) : "2300-01-01";
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const isEdit = false;
  const handleOrderOptionClick = (option: string) => {
    if (option === "Ascending") {
      setSortOrder("ASC");
    } else {
      setSortOrder("DESC");
    }
  };

  const handleSortOptionClick = (option: string) => {
    if (option == "Status") {
      setSortBy("appointmentStatus");
    } else if (option == "Date") {
      setSortBy("appointmentDate");
    } else if (option == "Time") {
      setSortBy("appointmentTime");
    } else if (option == "Endtime") {
      setSortBy("appointmentEndTime");
<<<<<<< HEAD
    }
    console.log(sortBy, "ooption");
  };

=======
    } else if (option == "Name") {
      setSortBy("patient_firstName");
    }
    console.log(sortBy, "ooption");
  };
  // const handleFilterStatusClick = (option: string) => {
  //   if (option == "Scheduled") {
  //     setFilterStatus("Scheduled");
  //   } else if (option == "On-going") {
  //     setFilterStatus("On-going");
  //   } else if (option == "Missed") {
  //     setFilterStatus("Missed");
  //   } else if (option == "Cancelled") {
  //     setFilterStatus("Cancelled");
  //   } else {
  //     setFilterStatus("");
  //   }
  //   console.log(sortBy, "ooption");
  // };

  // const [selectedStatuses, setSelectedStatuses] = useState([]);
  // const handleFilterStatusClick = (label) => {
  //   setSelectedStatuses((prevSelected) => {
  //     if (prevSelected.includes(label)) {
  //       return prevSelected.filter((status) => status !== label);
  //     } else {
  //       return [...prevSelected, label];
  //     }
  //   });
  // };
  const [filterStatusFromCheck, setFilterStatusFromCheck] = useState<string[]>(
    [],
  );
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  const optionsOrderedBy = [
    { label: "Ascending", onClick: handleOrderOptionClick },
    { label: "Descending", onClick: handleOrderOptionClick },
  ];
  const optionsSortBy = [
<<<<<<< HEAD
    { label: "Status", onClick: handleSortOptionClick },
    { label: "Date", onClick: handleSortOptionClick },
    { label: "Time", onClick: handleSortOptionClick },
    { label: "Endtime", onClick: handleSortOptionClick },
  ]; // end of orderby & sortby function

  const isModalOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
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
          className={`flex border border-px items-center justify-center  w-[49px]  ${
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
  const [patientImages, setPatientImages] = useState<any[]>([]);

  useEffect(() => {
=======
    { label: "Name", onClick: handleSortOptionClick },
    { label: "Date", onClick: handleSortOptionClick },
    { label: "Time", onClick: handleSortOptionClick },
    { label: "End Time", onClick: handleSortOptionClick },
    { label: "Status", onClick: handleSortOptionClick },
  ]; // end of orderby & sortby function
  const optionsFilterStatus = [
    { label: "Scheduled", onClick: setFilterStatusFromCheck },
    { label: "Patient-IN", onClick: setFilterStatusFromCheck },
    { label: "On-going", onClick: setFilterStatusFromCheck },
    { label: "Cancelled", onClick: setFilterStatusFromCheck },
    { label: "Missed", onClick: setFilterStatusFromCheck },
    { label: "Done", onClick: setFilterStatusFromCheck },
  ]; // end of status function


  const [patientImages, setPatientImages] = useState<any[]>([]);

  const handleStatusUpdate = (checkedFilters: string[]) => {
    setFilterStatusFromCheck(checkedFilters);

    // Here you can further process the checked filters or update other state as needed
  };
  // const [statusFiltered, setStatusFiltered] = useState<string>("");

  useEffect(() => {
    // setStatusFiltered(filterStatusFromCheck.join(", "));
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    const fetchData = async () => {
      try {
        const upcomingAppoinments = await fetchAllAppointments(
          term,
          currentPage,
          sortBy,
          sortOrder as "ASC" | "DESC",
<<<<<<< HEAD
          startD,
          endD,
          router
=======
          filterStatusFromCheck,
          startD,
          endD,
          5,
          router,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        );
        // Convert the Set back to an array
        // Extract unique patient UUIDs using a Set
        const uniquePatientUuids = new Set(
          upcomingAppoinments.data.map(
<<<<<<< HEAD
            (patient: { patient_uuid: any }) => patient.patient_uuid
          )
=======
            (patient: { patient_uuid: any }) => patient.patient_uuid,
          ),
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        );

        const patientUuids = Array.from(uniquePatientUuids);
        console.log(patientUuids, "patientUuids");
        const appointmentsArray = Object.values(upcomingAppoinments.data);
        setTotalPages(upcomingAppoinments.totalPages);
        setAppointmentList(appointmentsArray);
        setTotalAppointments(upcomingAppoinments.totalCount);
        setIsLoading(false);
        const profileImagesResponse = await fetchProfileImages(
<<<<<<< HEAD
          patientUuids as string[]
=======
          patientUuids as string[],
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        );
        if (profileImagesResponse) {
          const patientImagesData = profileImagesResponse.map((image: any) => {
            // Convert the image data buffer to a data URL if available
            if (image.data) {
              const buffer = Buffer.from(image.data);
              const dataUrl = `data:image/jpeg;base64,${buffer.toString(
<<<<<<< HEAD
                "base64"
=======
                "base64",
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              )}`;
              return {
                patientUuid: image.patientUuid,
                data: dataUrl,
              };
            } else {
              // If no data URL is available, return an empty object
              return {
                patientUuid: image.patientUuid,
                data: "",
              };
            }
          });
          setPatientImages(patientImagesData);
          console.log(patientImagesData, "patientImagesData");
        }

        return upcomingAppoinments;
      } catch (error) {}
    };
    fetchData();
<<<<<<< HEAD
  }, [currentPage, startDate, endDate, sortBy, sortOrder, term]);

=======
  }, [
    currentPage,
    filterStatusFromCheck,
    startDate,
    endDate,
    sortBy,
    sortOrder,
    term,
  ]);
  useEffect(() => {
    setFilterStatusFromCheck(filterStatusFromCheck);
    // const newLabel = filterStatusFromCheck.length > 0 ? filterStatusFromCheck.join(", "):"Status"
    const newLabel =
      filterStatusFromCheck.length > 0
        ? `${filterStatusFromCheck.length} Status Selected`
        : "Status";

    // setStatusFiltered(newLabel);
    console.log(filterStatusFromCheck.join(", "), "parent");
    console.log(newLabel, "new parent");
  }, [filterStatusFromCheck]);
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  // const handlePatientClick = (patientId: any) => {
  //   const lowercasePatientId = patientId.toLowerCase();
  //   setIsLoading(true);
  //   onNavigate(
  //     router,
  //     `/patient-overview/${lowercasePatientId}/medical-history/allergies`
  //   );
  // };
  console.log(startD, "startDate");
  console.log(appointmentList, "appointmentList");
  if (isLoading) {
    return (
<<<<<<< HEAD
      <div className="container w-full h-full flex justify-center items-center">
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
  };
  const onFailed = () => {
    setIsErrorOpen(true);
  };

  return (
<<<<<<< HEAD
    <div className="w-full px-[150px] pt-[90px] flex flex-col justify-between h-full">
      <div className="h-full w-full">
        <div className="flex justify-end">
          {/* <p
            onClick={() => router.push("/dashboard")}
            className="text-[#64748B] underline cursor-pointer text-[15px]"
          >
            Back to Dashboard
          </p> */}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col mb-3">
            <p className="p-title">Appointments List Records</p>

            <p className="text-[#64748B] font-normal w-[1157px] h-[22px] text-[15px]">
=======
    <div className="flex h-full w-full flex-col justify-between px-[150px] py-[90px]">
      <div className="h-full w-full">
        <div className="flex items-center justify-between">
          <div className="flex h-full flex-col justify-center">
            <p className="p-table-title">Appointments List Records</p>

            <p className="h-[22px] w-[1157px] text-[15px] font-normal text-[#64748B]">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              Total of {totalAppointments} Appointments
            </p>
          </div>
          <div className="flex flex-row justify-end">
<<<<<<< HEAD
            <DownloadPDF></DownloadPDF>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full bg-[#F4F4F4] justify-between items-center flex px-5 h-[75px] rounded-sm gap-5">
            <div className="flex items-center bg-white rounded-sm border border-gray-200  px-4 py-2 h-[47px] w-[460px]">
              <Search className="h-4 w-4 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search by reference no. or name..."
                className="flex-grow focus:outline-none text-gray-700"
=======
            <PdfDownloader
              props={[
                "Name",
                "Uuid",
                "Date",
                "Start_Time",
                "End_Time",
                "Status",
              ]}
              variant={"Appointment List Table"}
            />
          </div>
        </div>

        <div className="mt-4 w-full items-center sm:rounded-lg">
          <div className="flex h-[75px] w-full items-center justify-between gap-5 bg-[#F4F4F4] pr-3">
            {/* <div className="flex h-[47px] w-[460px] items-center rounded-sm border border-gray-200 bg-white px-4 py-2">
              <Search className="mr-2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search by reference no. or name..."
                className="flex-grow text-gray-700 focus:outline-none"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                value={term}
                onChange={(e) => {
                  setTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
<<<<<<< HEAD
            </div>

            <div className="w-[500px]">
              <div className="flex w-full justify-end items-center gap-3">
=======
            </div> */}
            <form className="relative">
              {/* search bar */}
              <label className=""></label>
              <div className="flex flex-col">
                <input
                  className="sub-title relative m-5 h-[47px] w-[460px] rounded bg-[#fff] bg-no-repeat px-5 py-3 pl-10 pt-[14px] outline-none ring-[1px] ring-[#E7EAEE]"
                  type="text"
                  placeholder="Search by reference no. or name..."
                  value={term}
                  onChange={(e) => {
                    setTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      // Add your search logic here
                    }
                  }}
                />
                <Image
                  src="/svgs/search.svg"
                  alt="Search"
                  width={18.75}
                  height={18.75}
                  className="pointer-events-none absolute left-8 top-9 h-[18.75px] w-[18.75px]"
                />
              </div>
            </form>
            <div className="w-[500px]">
              <div className="flex w-full items-center justify-end gap-3">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                <p className="font-semibold text-[#191D23] text-opacity-60">
                  Filter Date
                </p>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
<<<<<<< HEAD
                        "w-[166px] justify-start text-left font-normal h-[47px] rounded-[5px]",
                        !startDate && "text-muted-foreground"
=======
                        "h-[47px] w-[166px] justify-start rounded-[5px] text-left font-normal",
                        !startDate && "text-muted-foreground",
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP") : <span>From</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
<<<<<<< HEAD
                        "w-[166px] justify-start text-left font-normal h-[47px] rounded-[5px] *:",
                        !endDate && "text-muted-foreground"
=======
                        "*: h-[47px] w-[166px] justify-start rounded-[5px] text-left font-normal",
                        !endDate && "text-muted-foreground",
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PPP") : <span>To</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="w-[500px]">
<<<<<<< HEAD
              <div className="w-full justify-end items-center flex gap-3">
                <p className="flex text-[#191D23] opacity-[60%] font-semibold">
=======
              <div className="flex w-full items-center justify-end gap-3">
                <p className="flex font-semibold text-[#191D23] opacity-[60%]">
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
<<<<<<< HEAD
                  label={"Select"}
                />
                <p className="text-[#191D23] opacity-[60%] font-semibold text-[15px]">
=======
                  label={"Descending"}
                />
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
<<<<<<< HEAD

          <div>
            <table className="w-full h-full justify-center items-start text-[15px]">
              <thead className="text-left rtl:text-right">
                <tr className="uppercase font-semibold text-[#64748B] border-b border-[#E7EAEE] h-[70px]">
                  <td className="px-6 py-5 ">Name</td>
                  <td className="px-6 py-5 ">Appointment UID</td>
                  <td className="px-6 py-5 ">Date</td>
                  <td className="px-6 py-5 ">Time</td>
                  <td className="px-6 py-5 ">End time</td>
                  <td className="px-6 py-5  flex justify-start">Status</td>
=======
          <div>
            <table className="h-full w-full items-start justify-center">
              <thead className="text-left rtl:text-right">
                <tr className="sub-title h-[70px] border-b border-[#E7EAEE] !font-semibold uppercase">
                  <td className="px-6 py-5">Name</td>
                  <td className="px-6 py-5">Appointment UID</td>
                  <td className="px-6 py-5">Date</td>
                  <td className="px-6 py-5">Time</td>
                  <td className="px-6 py-5">End time</td>
                  <td className="px-6 py-5">
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
                  </td>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                </tr>
              </thead>
              <tbody>
                {appointmentList.length === 0 && (
                  <tr>
<<<<<<< HEAD
                    <td className="border-1 w-[180vh] py-5 absolute flex justify-center items-center">
                      <p className="text-[15px] font-normal text-gray-700 flex text-center">
=======
                    <td className="border-1 absolute flex w-[180vh] items-center justify-center py-5">
                      <p className="flex text-center text-[15px] font-normal text-gray-700">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                        No Appointments Found! <br />
                      </p>
                    </td>
                  </tr>
                )}
                {appointmentList.map((appointment, index) => (
                  <tr
                    key={index}
<<<<<<< HEAD
                    className="bg-white hover:bg-[#f4f4f4] group border-b "
                  >
                    <td className="px-6 py-5 flex items-center gap-2">
                      {patientImages.some(
                        (image) =>
                          image.patientUuid === appointment.patient_uuid
=======
                    className="group border-b bg-white hover:bg-[#f4f4f4]"
                  >
                    <td className="flex items-center gap-2 px-6 py-5">
                      {patientImages.some(
                        (image) =>
                          image.patientUuid === appointment.patient_uuid,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      ) ? (
                        // Render the matched image
                        <div>
                          {patientImages.map((image, imgIndex) => {
                            if (
                              image.patientUuid === appointment.patient_uuid
                            ) {
                              return (
                                <div key={imgIndex}>
                                  {image.data ? (
<<<<<<< HEAD
                                    <div className=" min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px]">
                                      <Image
                                        className="rounded-full object-cover w-12 h-12"
=======
                                    <div className="max-h-[45px] min-h-[45px] min-w-[45px] max-w-[45px]">
                                      <Image
                                        className="h-12 w-12 rounded-full object-cover"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                                        src={image.data} // Use the base64-encoded image data directly
                                        alt=""
                                        width={45}
                                        height={45}
                                      />
                                    </div>
                                  ) : (
                                    // Render the stock image (.svg) if data is empty
                                    <Image
<<<<<<< HEAD
                                      className="rounded-full min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px]"
=======
                                      className="max-h-[45px] min-h-[45px] min-w-[45px] max-w-[45px] rounded-full"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                                      src="/imgs/user-no-icon.svg"
                                      alt=""
                                      width={45}
                                      height={45}
                                    />
                                  )}
                                </div>
                              );
                            }
                            return null;
                          })}
                        </div>
                      ) : (
                        // Render a placeholder image if no matching image found
                        <div>
                          <Image
<<<<<<< HEAD
                            className="rounded-full min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px]"
=======
                            className="max-h-[45px] min-h-[45px] min-w-[45px] max-w-[45px] rounded-full"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                            src="/imgs/loading.gif" // Show loading gif while fetching images
                            alt="Loading"
                            width={45}
                            height={45}
                          />
                        </div>
                      )}
                      <span className="overflow-hidden">
                        <ResuableTooltip
                          text={`${appointment.patient_firstName} 
                        ${appointment.patient_lastName}`}
                        />
                      </span>
                    </td>
<<<<<<< HEAD
                    <td className="px-6 py-5 ">
=======
                    <td className="px-6 py-5">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      {appointment.appointments_uuid}
                    </td>
                    <td className="px-6 py-5">
                      {appointment.appointments_appointmentDate}
                    </td>
<<<<<<< HEAD
                    <td className="px-6 py-5 ">
                      {appointment.appointments_appointmentTime}
                    </td>
                    <td className=" px-6 py-5">
                      {appointment.appointments_appointmentEndTime}
                    </td>

                    <td className="text-15px text-nowrap  px-6 py-5 rounded-full">
                      <div
                        className={`px-2 font-semibold rounded-[20px] flex items-center w-fit ${
=======
                    <td className="px-6 py-5">
                      {appointment.appointments_appointmentTime}
                    </td>
                    <td className="px-6 py-5">
                      {appointment.appointments_appointmentEndTime}
                    </td>

                    <td className="text-15px text-nowrap rounded-full px-6 py-5">
                      <div
                        className={`flex w-fit items-center rounded-[20px] px-2 font-semibold ${
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                          appointment.appointments_appointmentStatus ===
                          "Scheduled"
                            ? "bg-[#E7EAEE] text-[#71717A]" // Green color for Scheduled
                            : appointment.appointments_appointmentStatus ===
<<<<<<< HEAD
                              "Done"
                            ? "bg-[#CCFFDD] text-[#17C653]" // Dark color for Done
                            : appointment.appointments_appointmentStatus ===
                                "Patient-IN" ||
                              appointment.appointments_appointmentStatus ===
                                "On-going"
                            ? "bg-[#FFF8DD] text-[#F6C000]" // Yellow for On Going
                            : appointment.appointments_appointmentStatus ===
                              "Missed"
                            ? "bg-[#FFE8EC] text-[#EF4C6A]" // Red color for Missed
                            : appointment.appointments_appointmentStatus ===
                              "Cancelled"
                            ? "bg-[#FFE8EC] text-[#EF4C6A]" // Red color for Cancelled
                            : ""
                        }`}
                      >
                        <span
                          className={`inline-block h-2 w-2 rounded-full mr-1 ${
=======
                                "Done"
                              ? "bg-[#CCFFDD] text-[#17C653]" // Dark color for Done
                              : appointment.appointments_appointmentStatus ===
                                    "Patient-IN" ||
                                  appointment.appointments_appointmentStatus ===
                                    "On-going"
                                ? "bg-[#FFF8DD] text-[#F6C000]" // Yellow for On Going
                                : appointment.appointments_appointmentStatus ===
                                    "Missed"
                                  ? "bg-[#FFE8EC] text-[#EF4C6A]" // Red color for Missed
                                  : appointment.appointments_appointmentStatus ===
                                      "Cancelled"
                                    ? "bg-[#FFE8EC] text-[#EF4C6A]" // Red color for Cancelled
                                    : ""
                        }`}
                      >
                        <span
                          className={`mr-1 inline-block h-2 w-2 rounded-full ${
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                            appointment.appointments_appointmentStatus ===
                            "Scheduled"
                              ? "bg-[#7E7E7E]" // Green color for Scheduled
                              : appointment.appointments_appointmentStatus ===
<<<<<<< HEAD
                                "Done"
                              ? "bg-[#0EB146]" // Dark color for Done
                              : appointment.appointments_appointmentStatus ===
                                  "Patient-IN" ||
                                appointment.appointments_appointmentStatus ===
                                  "On-going"
                              ? "bg-[#E4B90E]" // Yellow for On Going
                              : appointment.appointments_appointmentStatus ===
                                  "Missed" ||
                                appointment.appointments_appointmentStatus ===
                                  "Cancelled"
                              ? "bg-[#EE4D4D]" // Red color for Missed and Cancelled
                              : ""
=======
                                  "Done"
                                ? "bg-[#0EB146]" // Dark color for Done
                                : appointment.appointments_appointmentStatus ===
                                      "Patient-IN" ||
                                    appointment.appointments_appointmentStatus ===
                                      "On-going"
                                  ? "bg-[#E4B90E]" // Yellow for On Going
                                  : appointment.appointments_appointmentStatus ===
                                        "Missed" ||
                                      appointment.appointments_appointmentStatus ===
                                        "Cancelled"
                                    ? "bg-[#EE4D4D]" // Red color for Missed and Cancelled
                                    : ""
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                          }`}
                        ></span>
                        {appointment.appointments_appointmentStatus}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          setCurrentPage={setCurrentPage}
        />
      </div>
      {/* {isOpen && (
        <AppointmentsModal
          isModalOpen={isModalOpen}
          isOpen={isOpen}
          label="sample label"
          isView={false}
          appointmentData={appointmentList}
        />
      )} */}
      {isSuccessOpen && (
        <SuccessModal
          label="Success"
          isAlertOpen={isSuccessOpen}
          toggleModal={setIsSuccessOpen}
          setIsUpdated=""
          isUpdated=""
        />
      )}
      {isErrorOpen && (
        <ErrorModal
          label="Patient already exist"
          isAlertOpen={isErrorOpen}
          toggleModal={setIsErrorOpen}
          isEdit={isEdit}
          errorMessage={error}
        />
      )}
    </div>
  );
}
