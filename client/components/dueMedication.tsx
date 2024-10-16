"use client";
import React from "react";
import { onNavigate } from "@/actions/navigation";
import DropdownMenu from "@/components/dropdown-menu";
import Edit from "@/components/shared/buttons/view";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ErrorModal } from "@/components/shared/error";
import { SuccessModal } from "@/components/shared/success";
import { getAccessToken } from "@/app/api/login-api/accessToken";
import Add from "@/components/shared/buttons/add";
import DownloadPDF from "@/components/shared/buttons/downloadpdf";
import Modal from "@/components/reusable/modal";
import { DemographicModalContent } from "@/components/modal-content/demographic-modal-content";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { fetchDueMedication } from "@/app/api/medication-logs-api/due-medication-api";
import Image from "next/image";
import Pagination from "@/components/shared/pagination";
import { fetchProfileImages } from "@/app/api/patients-api/patientProfileImage.api";
import ResuableTooltip from "@/components/reusable/tooltip";
import DueMedicationLoader from "./loaders/dueMedicationLoader";
<<<<<<< HEAD

=======
import PdfDownloader from "./pdfDownloader";
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de

const DueMedication = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [isOpenSortedBy, setIsOpenSortedBy] = useState(false);
<<<<<<< HEAD
  const [sortBy, setSortBy] = useState("firstName");
  const [dueMedSortBy, setDueMedSortBy] = useState(
    "medicationlogs.medicationLogsTime"
=======
  const [dueMedSortBy, setDueMedSortBy] = useState(
    "medicationlogs.medicationLogsTime",
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  );
  const [patientList, setPatientList] = useState<any[]>([]);
  const [patientId, setPatientId] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalPatient, setTotalPatient] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [pageNumber, setPageNumber] = useState("");
  const [term, setTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("ASC");
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [dueMedTotalPages, setDueMedTotalPages] = useState(0);
  const [totalDueMedication, setTotalDueMedication] = useState(0);
  const [patientImages, setPatientImages] = useState<any[]>([]);
  const [dueMedicationList, setDueMedicationList] = useState<
    {
      patient_uuid: string;
      medicationlogs_medicationLogsName: string;
      patient_firstName: string;
      patient_lastName: string;
      patient_middleName: string;
      medicationlogs_medicationLogsDate: string;
      medicationlogs_medicationLogsTime: string;
      medicationlogs_uuid: string;
    }[]
  >([]);
  const isEdit = false;
  const handleOrderOptionClick = (option: string) => {
    if (option === "Ascending") {
      setSortOrder("ASC");
    } else {
      setSortOrder("DESC");
    }
  };

  const handleSortOptionClick = (option: string) => {
    if (option == "Name") {
      setDueMedSortBy("patient.firstName");
    } else if (option == "Due Med UID") {
<<<<<<< HEAD
      setDueMedSortBy("medicationlogs.medicationLogsName");
    } else if (option == "Date") {
      setDueMedSortBy("medicationlogs.medicationLogsDate");
=======
      setDueMedSortBy("medicationlogs.uuid");
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    } else if (option == "Time") {
      setDueMedSortBy("medicationlogs.medicationLogsTime");
    } else if (option == "Medication") {
      setDueMedSortBy("medicationlogs.medicationLogsName");
    }
<<<<<<< HEAD
    console.log(sortBy, "ooption");
=======
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  };

  const optionsOrderedBy = [
    { label: "Ascending", onClick: handleOrderOptionClick },
    { label: "Descending", onClick: handleOrderOptionClick },
  ];
  const optionsSortBy = [
    { label: "Name", onClick: handleSortOptionClick },
    { label: "Due Med UID", onClick: handleSortOptionClick },
<<<<<<< HEAD
    { label: "Date", onClick: handleSortOptionClick },
    { label: "Time", onClick: handleSortOptionClick },
    { label: "Medicaiton", onClick: handleSortOptionClick },
=======
    { label: "Time", onClick: handleSortOptionClick },
    { label: "Medication", onClick: handleSortOptionClick },
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  ]; // end of orderby & sortby function

  const isModalOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "visible";
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dueMedicationList = await fetchDueMedication(
          term,
          currentPage,
          dueMedSortBy,
          sortOrder as "ASC" | "DESC",
          5,
<<<<<<< HEAD
          router
=======
          router,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        );

        const uniquePatientUuids = new Set(
          dueMedicationList.data.map(
<<<<<<< HEAD
            (patient: { patient_uuid: any }) => patient.patient_uuid
          )
=======
            (patient: { patient_uuid: any }) => patient.patient_uuid,
          ),
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        );

        const patientUuids = Array.from(uniquePatientUuids);
        setDueMedicationList(dueMedicationList.data);
        setTotalPages(dueMedicationList.totalPages);
        setTotalDueMedication(dueMedicationList.totalCount);
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
      } catch (error) {
        // Handle error
      }
    };
    fetchData();
<<<<<<< HEAD
  }, [currentPage, term, sortBy, sortOrder]);
=======
  }, [currentPage, term, dueMedSortBy, sortOrder]);
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de

  const handlePatientClick = (patientId: any) => {
    const lowercasePatientId = patientId.toLowerCase();
    setIsLoading(true);
    onNavigate(
      router,
<<<<<<< HEAD
      `/patient-overview/${lowercasePatientId}/medical-history/allergies`
=======
      `/patient-overview/${lowercasePatientId}/medical-history/allergies`,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    );
  };

  if (isLoading) {
    return <DueMedicationLoader />;
  }
  console.log("patientList", patientList);

  const onSuccess = () => {
    setIsSuccessOpen(true);
  };
  const onFailed = () => {
    setIsErrorOpen(true);
  };
  return (
<<<<<<< HEAD
    <div className="w-full px-[150px] pt-[90px] flex flex-col justify-between h-full">
      <div className="w-full h-full">
        <div className="flex justify-end">
          {/* <p
            onClick={() => {
              setIsLoading(true);
              onNavigate(router, "/dashboard");
            }}
            className="text-[#64748B] underline cursor-pointer text-[15px]"
          >
            Back to Dashboard
          </p> */}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col mb-3">
            <p className="p-title">Due Medication</p>
            {/* number of patiens */}
            <p className="text-[#64748B] font-normal w-[1157px] h-[22px] text-[15px]">
=======
    <div className="flex h-full w-full flex-col justify-between px-[150px] py-[90px]">
      <div className="h-full w-full">
        <div className="flex items-center justify-between">
          <div className="flex h-full flex-col justify-center">
            <p className="p-table-title flex">Due Medication</p>
            {/* number of patiens */}
            <p className="sub-title">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              Total of {totalDueMedication == 0 ? "0" : totalDueMedication} Due
              Medication{totalDueMedication > 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex flex-row justify-end">
<<<<<<< HEAD
            <DownloadPDF></DownloadPDF>
          </div>
        </div>

        <div className="w-full sm:rounded-lg items-center">
          <div className="w-full justify-between flex items-center bg-[#F4F4F4] h-[75px]">
            <form className="mr-5 relative">
              {/* search bar */}
              <label className=""></label>
              <div className="flex">
                <input
                  className="py-3 px-5 m-5 w-[573px] outline-none h-[47px] pt-[14px] ring-[1px] ring-[#E7EAEE] text-[15px] rounded pl-10 relative bg-[#fff] bg-no-repeat "
=======
            <PdfDownloader
              props={["Name", "Uuid", "Medication", "Date", "Time"]}
              variant={"Due Medication Table"}
            />
          </div>
        </div>

        <div className="mt-4 w-full items-center sm:rounded-lg">
          <div className="flex h-[75px] w-full items-center justify-between bg-[#F4F4F4]">
            <form className="relative mr-5">
              {/* search bar */}
              <label className=""></label>
              <div className="flex flex-col">
                <input
                  className="sub-title relative m-5 h-[47px] w-[573px] rounded bg-[#fff] bg-no-repeat px-5 py-3 pl-10 pt-[14px] outline-none ring-[1px] ring-[#E7EAEE]"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  type="text"
                  placeholder="Search by reference no. or name..."
                  value={term}
                  onChange={(e) => {
                    setTerm(e.target.value);
                    setCurrentPage(1);
                  }}
<<<<<<< HEAD
=======
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      // Add your search logic here
                    }
                  }}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                />
                <Image
                  src="/svgs/search.svg"
                  alt="Search"
<<<<<<< HEAD
                  width="20"
                  height="20"
                  className="absolute left-8 top-9 pointer-events-none"
=======
                  width={18.75}
                  height={18.75}
                  className="pointer-events-none absolute left-8 top-9 h-[18.75px] w-[18.75px]"
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
<<<<<<< HEAD
                label={"Select"}
=======
                label={"Choose  "}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              />
            </div>
          </div>

          {/* START OF TABLE */}
          <div>
<<<<<<< HEAD
            <table className="w-full h-full justify-center items-start text-[15px]">
              <thead className=" text-left rtl:text-right">
                <tr className="uppercase font-semibold text-[#64748B] border-b border-[#E7EAEE] h-[70px]">
                  <td className="px-6 py-5 ">Name</td>
                  <td className="px-6 py-5 ">DUE MED UID</td>
                  <td className="px-6 py-5 ">Date</td>
                  <td className="px-6 py-5 ">Time</td>
                  <td className="px-6 py-5">Medication</td>
=======
            <table className="h-full w-full items-start justify-center">
              <thead className="text-left rtl:text-right">
                <tr className="sub-title h-[70px] border-b border-[#E7EAEE] !font-semibold uppercase">
                  <td className="px-6 py-5">Name</td>
                  <td className="w-[300px] px-6 py-5">DUE MED UID</td>
                  <td className="px-6 py-5">Medication</td>
                  <td className="w-[200px] px-6 py-5">Date</td>
                  <td className="w-[200px] px-6 py-5">Time</td>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                </tr>
              </thead>
              <tbody>
                {dueMedicationList.length === 0 && (
                  <tr>
<<<<<<< HEAD
                    <td className="border-1 w-[180vh] py-5 absolute flex justify-center items-center">
                      <p className="text-[15px] font-normal text-gray-700  text-center">
=======
                    <td className="border-1 absolute flex w-[180vh] items-center justify-center py-5">
                      <p className="text-center text-[15px] font-normal text-gray-700">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                        No Due Medication Found!
                      </p>
                    </td>
                  </tr>
                )}
                {dueMedicationList.map((dueMedication, index) => (
                  <tr
                    key={index}
<<<<<<< HEAD
                    className=" group  bg-white hover:bg-gray-100  border-b"
                  >
                    <td className="px-6 py-5 flex items-center gap-2">
                      {patientImages.some(
                        (image) =>
                          image.patientUuid === dueMedication.patient_uuid
=======
                    className="group border-b bg-white text-[15px] hover:bg-[#F4F4F4]"
                  >
                    <td className="flex items-center gap-2 px-6 py-5">
                      {patientImages.some(
                        (image) =>
                          image.patientUuid === dueMedication.patient_uuid,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      ) ? (
                        // Render the matched image
                        <div>
                          {patientImages.map((image, imgIndex) => {
                            if (
                              image.patientUuid === dueMedication.patient_uuid
                            ) {
                              return (
                                <div key={imgIndex}>
                                  {image.data ? (
                                    // Render the image if data is not empty
<<<<<<< HEAD
                                    <div className=" min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px]">
                                    <Image
                                      className="rounded-full object-cover w-12 h-12"
                                      src={image.data} // Use the base64-encoded image data directly
                                      alt=""
                                      width={45}
                                      height={45}
                                    />
                                  </div>
                                  ) : (
                                    // Render the stock image (.svg) if data is empty
                                    <Image
                                      className="rounded-full min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px]"
=======
                                    <div className="max-h-[45px] min-h-[45px] min-w-[45px] max-w-[45px]">
                                      <Image
                                        className="max-h-[45px] min-h-[45px] min-w-[45px] max-w-[45px] rounded-full object-cover"
                                        src={image.data} // Use the base64-encoded image data directly
                                        alt=""
                                        width={45}
                                        height={45}
                                      />
                                    </div>
                                  ) : (
                                    // Render the stock image (.svg) if data is empty
                                    <Image
                                      className="max-h-[45px] min-h-[45px] min-w-[45px] max-w-[45px] rounded-full"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                                      src="/imgs/user.png"
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
<<<<<<< HEAD
                      ) : // Render a placeholder image if no matching image found
                 ( // Only render stock image when images are loaded
                        <div>
                          <Image
                            className="rounded-full min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px]"
=======
                      ) : (
                        // Render a placeholder image if no matching image found
                        // Only render stock image when images are loaded
                        <div>
                          <Image
                            className="max-h-[45px] min-h-[45px] min-w-[45px] max-w-[45px] rounded-full"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                            src="/imgs/loading.gif" // Show loading gif while fetching images
                            alt="Loading"
                            width={45}
                            height={45}
                          />
                        </div>
<<<<<<< HEAD

                      )}
                      <span className="overflow-hidden">
=======
                      )}
                      <span className="w-[300px] truncate">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                        <ResuableTooltip
                          text={`${dueMedication.patient_firstName} ${""}
                        ${dueMedication.patient_lastName}`}
                        />
                      </span>
                    </td>
<<<<<<< HEAD
                    <td className="px-6 py-5 ">
=======
                    <td className="w-[300px] truncate px-6 py-5">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      <ResuableTooltip
                        text={dueMedication.medicationlogs_uuid}
                      />
                    </td>
<<<<<<< HEAD
                    <td className="px-6 py-5 ">
                      {dueMedication.medicationlogs_medicationLogsDate}
                    </td>
                    <td className="px-6 py-5 ">
                      {dueMedication.medicationlogs_medicationLogsTime}
                    </td>
                    <td className="px-6 py-5">
=======
                    <td className="truncate px-6 py-5">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      <ResuableTooltip
                        text={dueMedication.medicationlogs_medicationLogsName}
                      />
                    </td>
<<<<<<< HEAD
=======
                    <td className="w-[200px] px-6 py-5">
                      {dueMedication.medicationlogs_medicationLogsDate}
                    </td>
                    <td className="w-[200px] px-6 py-5">
                      {dueMedication.medicationlogs_medicationLogsTime}
                    </td>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* END OF TABLE */}
        </div>
      </div>
      {/* pagination */}
      <div className="">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default DueMedication;
