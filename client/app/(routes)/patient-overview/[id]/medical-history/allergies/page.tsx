"use client";
import Image from "next/image";
import printJS from "print-js";
import React, { useEffect } from "react";
import DropdownMenu from "@/components/dropdown-menu";
import Edit from "@/components/shared/buttons/edit";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  fetchAllergiesByPatient,
<<<<<<< HEAD
  fetchAllergiesForPDF,
=======
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
} from "@/app/api/medical-history-api/allergies.api";
import { SuccessModal } from "@/components/shared/success";
import { ErrorModal } from "@/components/shared/error";
import Modal from "@/components/reusable/modal";
import { AllergiesModalContent } from "@/components/modal-content/allergies-modal-content";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import Pagination from "@/components/shared/pagination";
<<<<<<< HEAD
import PdfDownloader from "@/components/pdfDownloader";
import ResuableTooltip from "@/components/reusable/tooltip";
=======

import ResuableTooltip from "@/components/reusable/tooltip";
import { formatTableDate } from "@/lib/utils";
import PdfDownloader from "@/components/pdfDownloader";
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de

const Allergies = () => {
  const router = useRouter();
  if (typeof window === "undefined") {
  }
  const { toast } = useToast();
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [isOpenSortedBy, setIsOpenSortedBy] = useState(false);
  const [sortOrder, setSortOrder] = useState<string>("DESC");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [patientAllergies, setPatientAllergies] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalAllergies, setTotalAllergies] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState("");
  const [gotoError, setGotoError] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState("");
  const [term, setTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState("Severity");
  const [isEdit, setIsEdit] = useState(false);
  const [allergyToEdit, setAllergyToEdit] = useState<any[]>([]);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
<<<<<<< HEAD
  const [isDownloadPDF, setIsDownloadPDF] = useState<boolean>(false);
=======
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de

  const params = useParams<{
    id: any;
    tag: string;
    item: string;
  }>();

  console.log(params, "for surgery patientId");
  const patientId = params.id.toUpperCase();
  // const patientId = params.id;

  const handleOrderOptionClick = (option: string) => {
    if (option === "Ascending") {
      setSortOrder("ASC");
    } else {
      setSortOrder("DESC");
    }
  };

  const handleSortOptionClick = (option: string) => {
    setSortBy(option);
    console.log("option", option);
  };

  const optionsOrderedBy = [
    { label: "Ascending", onClick: handleOrderOptionClick },
    { label: "Descending", onClick: handleOrderOptionClick },
  ];
  const optionsSortBy = [
    { label: "Type", onClick: handleSortOptionClick },
    { label: "Severity", onClick: handleSortOptionClick },
    { label: "Reaction", onClick: handleSortOptionClick },
    { label: "Notes", onClick: handleSortOptionClick },
  ]; // end of orderby & sortby function
  const [isOpen, setIsOpen] = useState(false);
  const [filterSeverityFromCheck, setFilterSeverityFromCheck] = useState<string[]>([],);
  const handleSeverityUpdate = (checkedFilters: string[]) => {
    setFilterSeverityFromCheck(checkedFilters);

  };
  const isModalOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "visible";
      setIsEdit(false);
      setAllergyToEdit([]);
    }
  };
  const [isOpenFilterStatus, setIsOpenFilterStatus] = useState(false);

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
  const optionsFilterSeverity = [
    { label: "Severe", onClick: setFilterSeverityFromCheck },
    { label: "Moderate", onClick: setFilterSeverityFromCheck },
    { label: "Mild", onClick: setFilterSeverityFromCheck },
  ];
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAllergiesByPatient(
          patientId,
          term,
          currentPage,
          sortBy,
          sortOrder as "ASC" | "DESC",
          filterSeverityFromCheck,
          4,
          router,
        );
        setPatientAllergies(response.data);
        setTotalPages(response.totalPages);
        setTotalAllergies(response.totalCount);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage, sortOrder, sortBy, term, isSuccessOpen, filterSeverityFromCheck]);

  console.log(allergyToEdit, "allergy uuid");
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

  return (
<<<<<<< HEAD
    <div className="w-full h-full flex flex-col justify-between">
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
              <span className="slash">{">"}</span>
              <span className="active">Allergies</span>
              <span className="slash">{"/"}</span>
              <span
                onClick={() => {
                  setIsLoading(true);
                  router.replace(
<<<<<<< HEAD
                    `/patient-overview/${patientId.toLowerCase()}/medical-history/surgeries`
=======
                    `/patient-overview/${patientId.toLowerCase()}/medical-history/surgeries`,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  );
                }}
                className="bread"
              >
                Surgeries
              </span>
            </div>
            <div>
<<<<<<< HEAD
              <p className="text-[#64748B] font-normal w-[1157px] h-[22px] text-[15px]">
                Total of {totalAllergies} Allergies
=======
            <p className="my-1 h-[23px] text-[15px] font-normal text-[#64748B]">
            Total of {totalAllergies} Allergies
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => isModalOpen(true)} className="btn-add gap-2">
<<<<<<< HEAD
              <Image src="/imgs/add.svg" alt="" width={22} height={22} />
              <p className="text-[18px]">Add</p>
            </button>

            <PdfDownloader
              data={patientAllergies}
=======
              <Image src="/imgs/add.svg" alt="" width={18} height={18} />
              <p className="">Add</p>
            </button>
            <PdfDownloader
              patientId={patientId}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              props={[
                "Uuid",
                "Date",
                "Type",
                "Allergen",
                "Severity",
                "Reaction",
                "Notes",
              ]}
              variant={"Allergy Table"}
            />
          </div>
        </div>
<<<<<<< HEAD
        <div className="w-full m:rounded-lg items-center">
          <div className="w-full justify-between flex items-center bg-[#F4F4F4] h-[75px]">
            <form className="mr-5 relative">
=======
        <div className="m:rounded-lg w-full items-center">
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
                <td className="px-6 py-3">Allergy ID</td>
                <td className="px-6 py-3">Date</td>
                <td className="px-6 py-3">Type</td>
                <td className="px-6 py-3">Allergen</td>
                <td className="px-6 py-3">Severity</td>
                <td className="px-6 py-3">Reaction</td>
                <td className="px-6 py-3">Notes</td>
                <td className="py-3 px-6 text-center">Action</td>
                <td className="w-[14px]"></td>
              </tr>
            </thead>
            <tbody className="h-[220px] overflow-y-scroll">
              {patientAllergies.length === 0 && (
                <h1 className="border-1 w-[180vh] py-5 absolute flex justify-center items-center">
                  <p className="text-[15px] font-normal text-gray-700 text-center">
                    No Allergies Found <br />
                  </p>
                </h1>
              )}
              {patientAllergies.map((allergy, index) => (
                <tr
                  key={index}
                  className=" group hover:bg-[#f4f4f4]  border-b text-[15px] "
                >
                  <td className="px-6 py-3 ">
                    <ResuableTooltip text={allergy.allergies_uuid} />
                  </td>
                  <td className="px-6 py-3">
                    {" "}
                    {new Date(allergy.allergies_createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6  py-3">
                    <ResuableTooltip text={allergy.allergies_type} />
                  </td>
                  <td className="px-6  py-3">
                    <ResuableTooltip text={allergy.allergies_allergen} />
                  </td>

                  <td className="text-15px me-1 px-6 py-3 rounded-full flex items-center">
                    <div
                      className={`px-2 font-semibold rounded-[20px] relative flex items-center ${
                        allergy.allergies_severity === "Mild"
                          ? "bg-[#FFF8DD] text-[#F6C000] text-[15px]" // Green color for Mild
                          : allergy.allergies_severity === "Moderate"
                          ? "bg-[#fff5ef] text-[#ff6f1e] text-[15px]" // Dark color for Moderate
                          : allergy.allergies_severity === "Severe"
                          ? "bg-[#FFE8EC] text-[#EF4C6A] text-[15px]" // Red color for Severe
                          : ""
                      }`}
                    >
                      {allergy.allergies_severity}
                    </div>
                  </td>
                  <td className="px-6  py-3">
                    <ResuableTooltip text={allergy.allergies_reaction} />
                  </td>
                  <td className="px-6  py-3">
                    <ResuableTooltip
                      text={
                        allergy.allergies_notes
                          ? allergy.allergies_notes
                          : "None"
                      }
                    />
                  </td>

                  <td className="py-3 px-6 flex justify-center ">
                    <p
=======
            <tr className="h-[70px] border-b text-[15px] font-semibold uppercase text-[#64748B]">
            <td className="px-6 py-3">Allergy UID</td>
                <td className="px-6 py-3">Date</td>
                <td className="px-6 py-3">Type</td>
                <td className="px-6 py-3">Allergen</td>
                <td className="relative">
                    <div
                      className={`absolute ${filterSeverityFromCheck?.length > 0 ? "top-[24px] left-[24px]" : "top-[24px] left-[24px]"}`}
                    >
                      <DropdownMenu
                        options={optionsFilterSeverity.map(
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
                        statusUpdate={handleSeverityUpdate} // Pass the handler function
                        checkBox={true}
                        title={"Severity"}
                        label={"Severity"}
                      />
                    </div>
                  </td>                <td className="px-6 py-3">Reaction</td>
                <td className="px-6 py-3">Notes</td>
                <td className="relative px-6 py-3">
                    <p className="absolute right-[80px] top-[24px]">Action</p>
                  </td>             
                   </tr>
            </thead>
            <tbody className="h-[254px]">
            {patientAllergies.length === 0 && (
                <h1 className="border-1 absolute flex items-center justify-center py-5">
                  <p className="text-center text-[15px] font-normal text-gray-700">
                    No Allergies Found <br />
                  </p>
                </h1>
              )}
              {patientAllergies.map((allergy, index) => (
                <tr
                  key={index}
                  className="group h-[63px] border-b text-[15px] hover:bg-[#f4f4f4]"
                >
                  <td className="px-6 py-3">
                    <ResuableTooltip text={allergy.allergies_uuid} />
                  </td>
                  <td className="px-6 py-3">
                   
                    {formatTableDate(allergy.allergies_createdAt)}
                  </td>
                  <td className="px-6 py-3">
                    <ResuableTooltip text={allergy.allergies_type} />
                  </td>
                  <td className="px-6 py-3">
                    <ResuableTooltip text={allergy.allergies_allergen} />
                  </td>

                  <td className="text-15px me-1 flex items-center rounded-full px-6 py-3">
                    <div
                      className={`relative flex h-[25px] w-[92px] items-center justify-center rounded-[30px] font-semibold ${
                        allergy.allergies_severity === "Mild"
                          ? "bg-[#FFF8DD] text-[#F6C000]" // Green color for Mild
                          : allergy.allergies_severity === "Moderate"
                            ? "bg-[#fff5ef] text-[#ff6f1e]" // Dark color for Moderate
                            : allergy.allergies_severity === "Severe"
                              ? "bg-[#FFE8EC] text-[#EF4C6A]" // Red color for Severe
                              : ""
                      }`}
                    >
                      {allergy.allergies_severity}
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <ResuableTooltip text={allergy.allergies_reaction} />
                  </td>
                  <td className="px-6 py-3">
                    <ResuableTooltip
                      text={
                        allergy.allergies_notes
                          ? allergy.allergies_notes
                          : "None"
                      }
                    />
                  </td>

                  <td className="relative py-3 pl-6">
                  <p
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      onClick={() => {
                        isModalOpen(true);
                        setIsEdit(true);
                        setAllergyToEdit(allergy);
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
            </tbody>
          </table>
        </div>
        {/* END OF TABLE */}
      </div>

      {/* pagination */}
      <div className="bottom-0">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          setCurrentPage={setCurrentPage}
        />
      </div>
      {isOpen && (
        <Modal
          content={
            <AllergiesModalContent
              isModalOpen={isModalOpen}
              isOpen={isOpen}
              isEdit={isEdit}
              allergy={allergyToEdit}
              setIsUpdated={setIsUpdated}
              label="sample label"
              onSuccess={onSuccess}
              onFailed={onFailed}
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
          label="Allergy already exist"
          isAlertOpen={isErrorOpen}
          toggleModal={setIsErrorOpen}
          isEdit={isEdit}
          errorMessage={error}
        />
      )}
    </div>
  );
};

export default Allergies;
