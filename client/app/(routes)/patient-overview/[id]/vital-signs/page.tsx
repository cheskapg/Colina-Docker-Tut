"use client";
import Image from "next/image";
<<<<<<< HEAD

=======
import { formatTableTime } from "@/lib/utils";
import { formatTableDate } from "@/lib/utils";
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
import DropdownMenu from "@/components/dropdown-menu";
import Add from "@/components/shared/buttons/add";
import DownloadPDF from "@/components/shared/buttons/downloadpdf";
import Edit from "@/components/shared/buttons/edit";
import { useEffect, useState } from "react";
import { onNavigate } from "@/actions/navigation";
import { useParams, useRouter } from "next/navigation";
import { fetchVitalSignsByPatient } from "@/app/api/vital-sign-api/vital-sign-api";
import { SuccessModal } from "@/components/shared/success";
import Modal from "@/components/reusable/modal";
import { VitalModalContent } from "@/components/modal-content/vital-modal-content";
import Pagination from "@/components/shared/pagination";
<<<<<<< HEAD
import ResuableTooltip from "@/components/reusable/tooltip";
=======
import ResuableTooltip from "@/components/reusable/tooltip";import PdfDownloader from "@/components/pdfDownloader";

import {
  getBloodPressureCategoryClass,
  getRowClassName,
  getHeartRateCategoryClass,
  getTemperatureCategoryClass,
  getRespiratoryRateCategoryClass,
} from "@/lib/valuesCategory/vitalSignsCategories";
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
export default function vitalsigns() {
  const router = useRouter();
  if (typeof window === "undefined") {
  }
<<<<<<< HEAD
=======

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  // start of orderby & sortby function
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [sortOrder, setSortOrder] = useState("DESC");
  const [sortBy, setSortBy] = useState("createdAt");
  const [pageNumber, setPageNumber] = useState("");
  const [patientVitalSign, setPatientVitalSign] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalVitalSigns, setTotalVitalSigns] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [vitalSignData, setVitalSignData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [gotoError, setGotoError] = useState(false);
  const [term, setTerm] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
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
      setVitalSignData([]);
    }
  };

  const params = useParams<{
    id: any;
    tag: string;
    item: string;
  }>();

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
      setSortBy("date");
    } else if (option === "Status") {
      setSortBy("bloodPressure");
    } else {
      setSortBy("heartRate");
    }
    console.log("option", option);
  };
  const optionsOrderedBy = [
    { label: "Ascending", onClick: handleOrderOptionClick },
    { label: "Descending", onClick: handleOrderOptionClick },
  ];
  const optionsSortBy = [
    { label: "Date", onClick: handleSortOptionClick },
    { label: "Blood Pressure", onClick: handleSortOptionClick },
    { label: "Heart Rate", onClick: handleSortOptionClick },
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

=======
 
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchVitalSignsByPatient(
          patientId,
          term,
          currentPage,
          sortBy,
          sortOrder as "ASC" | "DESC",
          4,
          router,
        );
        setPatientVitalSign(response.data);
        setTotalPages(response.totalPages);
        setTotalVitalSigns(response.totalCount);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage, sortOrder, sortBy, term, isSuccessOpen]);

  console.log(patientVitalSign, "patientVitalSign");

  const onSuccess = () => {
    setIsSuccessOpen(true);
    setIsEdit(false);
    isModalOpen(false);
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
    <div className="w-full h-full flex flex-col justify-between">
      <div className="w-full h-full">
        <div className="w-full justify-between flex mb-2">
          <div className="flex-row">
            <p className="p-title">Vital Signs</p>

            <div>
              <p className="text-[#64748B] font-normal w-[1157px] h-[22px] text-[15px]">
=======
    <div className="flex h-full w-full flex-col justify-between">
      <div className="h-full w-full">
        <div className="mb-2 flex w-full justify-between">
          <div className="flex-row">
            <p className="p-table-title">Vital Signs</p>
            <div>
              <p className="my-1 h-[23px] text-[15px] font-normal text-[#64748B]">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                Total of {totalVitalSigns} Vital Signs
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
=======
              <Image src="/imgs/add.svg" alt="" width={18} height={18} />
              <p className="">Add</p>
            </button>
            <button className="btn-pdf gap-2">
              <Image
                src="/imgs/downloadpdf.svg"
                alt=""
                width={18}
                height={18}
              />
              <p className="">Generate PDF</p>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
            </button>
          </div>
        </div>

<<<<<<< HEAD
        <div className="w-full sm:rounded-lg items-center">
          <div className="w-full justify-between flex items-center bg-[#F4F4F4] h-[75px]">
            <form className="mr-5 relative">
=======
        <div className="w-full items-center sm:rounded-lg">
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
              <tr className=" text-[#64748B] border-y text-[15px] h-[70px] font-semibold">
                <td className="px-6 py-3 ">VITAL SIGN ID</td>
                <td className="px-6 py-3 ">DATE</td>
                <td className="px-6 py-3 ">TIME</td>
                <td className="px-6 py-3 ">BP (mmHg)</td>
                <td className="px-6 py-3 ">HR (bpm)</td>
                <td className="px-6 py-3 ">TEMP (°F)</td>
                <td className="px-6 py-3 ">RESP (brtds/min)</td>
                <td className="px-6 py-3 text-center">ACTION</td>
                <td className="w-[14px]"></td>
              </tr>
            </thead>

            <tbody className="h-[220px] overflow-y-scroll">
              {patientVitalSign.length == 0 && (
                <div className="border-1 w-[180vh] py-5 absolute flex justify-center items-center">
                  <p className="text-[15px] font-normal text-gray-700 text-center">
=======
              <tr className="h-[70px] border-b text-[15px] font-semibold text-[#64748B]">
                <td className="px-6 py-3">VITAL SIGN UID</td>
                <td className="px-6 py-3">DATE</td>
                <td className="px-6 py-3">TIME</td>
                <td className="px-6 py-3">BP (mmHg)</td>
                <td className="px-6 py-3">HR (bpm)</td>
                <td className="px-6 py-3">TEMP (°F)</td>
                <td className="px-6 py-3">RESP (brtds/min)</td>
                <td className="relative px-6 py-3">
                  <p className="absolute right-[80px] top-[24px]">ACTION</p>
                </td>
              </tr>
            </thead>

            <tbody className="h-[254px]">
              {patientVitalSign.length == 0 && (
                <div className="border-1 absolute flex items-center justify-center py-5">
                  <p className="text-center text-[15px] font-normal text-gray-700">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    No Vital Sign/s <br />
                  </p>
                </div>
              )}
              {patientVitalSign.map((vitalSign, index) => (
                <tr
                  key={index}
<<<<<<< HEAD
                  className="odd:bg-white border-b hover:bg-[#f4f4f4] group text-[15px]"
                >
                  <td className="px-6 py-3 ">
                    <ResuableTooltip text={vitalSign.vitalsign_uuid} />
                  </td>
                  <td className="px-6 py-3 ">
                    {formatDate(vitalSign.vitalsign_date)}
                  </td>
                  <td className="px-6 py-3 ">
                    {formatTime(vitalSign.vitalsign_time)}
                  </td>
                  <td className="px-6 py-3 ">
=======
                  className={`group h-[63px]  text-[15px] ${
                    getRowClassName(
                      vitalSign.vitalsign_bloodPressure,
                      vitalSign.vitalsign_heartRate,
                      vitalSign.vitalsign_respiratoryRate,
                      vitalSign.vitalsign_temperature,
                    ) 
                  } ${
                    getRowClassName(
                      vitalSign.vitalsign_bloodPressure,
                      vitalSign.vitalsign_heartRate,
                      vitalSign.vitalsign_respiratoryRate,
                      vitalSign.vitalsign_temperature,
                    ) === ""
                      ? "border-b hover:bg-[#f4f4f4]"
                      : " hover:bg-opacity-60"
                  }`}
                >
                  <td className="px-6 py-3">
                    <ResuableTooltip text={vitalSign.vitalsign_uuid} />
                  </td>
                  <td className="px-6 py-3">
                    {formatTableDate(vitalSign.vitalsign_date)}
                  </td>
                  <td className="px-6 py-3">
                    {formatTableTime(vitalSign.vitalsign_time)}
                  </td>
                  <td
                    className={`px-6 py-3 ${getBloodPressureCategoryClass(vitalSign.vitalsign_bloodPressure)}`}
                  >
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    <ResuableTooltip
                      text={`${vitalSign.vitalsign_bloodPressure}mmHg`}
                    />
                  </td>
<<<<<<< HEAD
                  <td className="px-6 py-3 ">
                    {vitalSign.vitalsign_heartRate}bpm
                  </td>
                  <td className="px-6 py-3 ">
                    {vitalSign.vitalsign_temperature}°F
                  </td>
                  <td className="px-6 py-3 ">
=======
                  <td
                    className={`px-6 py-3 ${getHeartRateCategoryClass(vitalSign.vitalsign_heartRate)}`}
                  >
                    {" "}
                    {vitalSign.vitalsign_heartRate}bpm
                  </td>
                  <td
                    className={`px-6 py-3 ${getTemperatureCategoryClass(vitalSign.vitalsign_temperature)}`}
                  >
                    {vitalSign.vitalsign_temperature}°F
                  </td>
                  <td
                    className={`px-6 py-3 ${getRespiratoryRateCategoryClass(vitalSign.vitalsign_respiratoryRate)}`}
                  >
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    <ResuableTooltip
                      text={`${vitalSign.vitalsign_respiratoryRate}breaths/min`}
                    />
                  </td>

<<<<<<< HEAD
                  <td className="px-6 py-3 flex justify-center">
=======
                  <td className="relative py-3 pl-6">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    <p
                      onClick={() => {
                        isModalOpen(true);
                        setIsEdit(true);
                        setVitalSignData(vitalSign);
                      }}
<<<<<<< HEAD
                    >
                      <Edit></Edit>
=======
                      className="absolute right-[40px] top-[11px]"
                    >
                      <Edit
                        className={getRowClassName(
                          vitalSign.vitalsign_bloodPressure,
                          vitalSign.vitalsign_heartRate,
                          vitalSign.vitalsign_respiratoryRate,
                          vitalSign.vitalsign_temperature,
                        )}
                      ></Edit>
                      {/* <div className="bg-[#fdf6d7] text-[FFEFF2]"> {getRowClassName(
                          vitalSign.vitalsign_bloodPressure,
                          vitalSign.vitalsign_heartRate,
                          vitalSign.vitalsign_respiratoryRate,
                          vitalSign.vitalsign_temperature,
                        )}GFDFD</div>
                      <div className="bg-[#FEBB00] text-[DB3956]"></div> */}
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
            <VitalModalContent
              isModalOpen={isModalOpen}
              isEdit={isEdit}
              isOpen={isOpen}
              label="sample label"
              vitalSignData={vitalSignData}
              onSuccess={onSuccess}
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
    </div>
  );
}
