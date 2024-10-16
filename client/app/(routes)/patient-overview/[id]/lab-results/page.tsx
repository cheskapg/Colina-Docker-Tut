"use client";
import Image from "next/image";
import DropdownMenu from "@/components/dropdown-menu";
import Add from "@/components/shared/buttons/add";
import DownloadPDF from "@/components/shared/buttons/downloadpdf";
import Edit from "@/components/shared/buttons/edit";
import View from "@/components/shared/buttons/view";
import { useEffect, useState } from "react";
import { onNavigate } from "@/actions/navigation";
import { useParams, useRouter } from "next/navigation";
import { fetchLabResultsByPatient } from "@/app/api/lab-results-api/lab-results.api";
import Modal from "@/components/reusable/modal";
import { SuccessModal } from "@/components/shared/success";
import { LabresultsModalContent } from "@/components/modal-content/labresults-modal-content";
import { LabResultsViewModalContent } from "@/components/modal-content/labresultsview-modal-content";
import Pagination from "@/components/shared/pagination";
import ResuableTooltip from "@/components/reusable/tooltip";
<<<<<<< HEAD
=======
import { formatTableDate } from "@/lib/utils";
import PdfDownloader from "@/components/pdfDownloader";

import { getBloodGlucoseCategoryClass, getHdlCholesterolCategoryClass, getHemoglobinA1cCategoryClass, getLdlCholesterolCategoryClass, getRowClassName, getTotalCholesterolCategoryClass, getTriglyceridesCategoryClass } from "@/lib/valuesCategory/labResultsCategories";
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
export default function Laboratoryresults() {
  const router = useRouter();
  if (typeof window === "undefined") {
  }
  // start of orderby & sortby function
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [patientLabResults, setPatientLabResults] = useState<any[]>([]);
  const [totalLabResults, setTotalLabResults] = useState<number>(0);
  const [labResultData, setLabResultData] = useState<any[]>([]);

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pageNumber, setPageNumber] = useState("");
  const [gotoError, setGotoError] = useState(false);
  const [term, setTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSortedBy, setIsOpenSortedBy] = useState(false);
<<<<<<< HEAD
  const [sortOrder, setSortOrder] = useState<string>("ASC");
  const [sortBy, setSortBy] = useState("uuid");
=======
  const [sortOrder, setSortOrder] = useState<string>("DESC");
  const [sortBy, setSortBy] = useState("createdAt");
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  const [isEdit, setIsEdit] = useState(false);
  const [isView, setIsView] = useState(false);

  const [isUpdated, setIsUpdated] = useState(false);

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

  const isModalOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "visible";
      setIsEdit(false);
      setIsView(false);

      setLabResultData([]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchLabResultsByPatient(
          patientId,
          term,
          currentPage,
          sortBy,
          sortOrder as "ASC" | "DESC",  
          4,
          router,
        );

        //convert date to ISO string

        setPatientLabResults(response.data);
        console.log("Patient list after setting state:", response.data);
        setTotalPages(response.totalPages);
        setTotalLabResults(response.totalCount);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage, sortOrder, sortBy, term, isSuccessOpen]);

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
  const handleSortOptionClick = (option: string) => {
    setIsOpenSortedBy(false);
    if (option === "Date") {
      setSortBy("date");
    } else if (option === "Total Cholesterol") {
      setSortBy("totalCholesterol");
    } else if (option === "LDL-C") {
      setSortBy("ldlCholesterol");
    } else {
      setSortBy("hdlCholesterol");
    }
  };

  const optionsOrderedBy = [
    { label: "Ascending", onClick: handleOrderOptionClick },
    { label: "Descending", onClick: handleOrderOptionClick },
  ];
  const optionsSortBy = [
    { label: "Date", onClick: handleSortOptionClick },
    { label: "Total Cholesterol", onClick: handleSortOptionClick },
    { label: "LDL-C", onClick: handleSortOptionClick },
    { label: "HDL-C", onClick: handleSortOptionClick },
  ]; // end of orderby & sortby function

  const onSuccess = () => {
    setIsSuccessOpen(true);
    setIsEdit(false);
    setIsView(false);

    isModalOpen(false);
  };

  return (
<<<<<<< HEAD
    <div className="  w-full h-full flex flex-col justify-between">
      <div className="w-full h-full">
        <div className="justify-between flex mb-2">
          <div className="flex flex-col">
            <p className="p-title">Laboratory Results </p>
            {/* number of patients */}
            <div>
              <p className="text-[#64748B] font-normal w-[1157px] h-[22px] text-[15px]">
=======
    <div className="flex h-full w-full flex-col justify-between">
      <div className="h-full w-full">
        <div className="mb-2 flex justify-between">
          <div className="flex flex-col">
            <p className="p-table-title">Laboratory Results </p>
            {/* number of patients */}
            <div>
              <p className="my-1 h-[23px] text-[15px] font-normal text-[#64748B]">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                Total of {totalLabResults} Lab Results
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
        <div>
          <table className="text-left rtl:text-right">
            <thead>
<<<<<<< HEAD
              <tr className="text-[#64748B] border-y text-[15px] h-[70px] font-semibold">
                <td className="px-6 py-3 w-[170px]">LAB RESULT UID</td>
                <td className="px-6 py-3 w-[170px]">DATE</td>
                <td className="px-6 py-3 w-[170px]">HEMO A1c (%)</td>
                <td className="px-6 py-3 w-[170px]">
                  FBG (mg/dL)
                </td>
                <td className="px-6 py-3 w-[170px]">
                  TC (mg/dL)
                </td>
                <td className="px-6 py-3 w-[170px]">LDL-C (mg/dL)</td>
                <td className="px-6 py-3 w-[170px]">HDL-C (mg/dL)</td>
                <td className="px-6 py-3 w-[170px]">TG (mg/dL)</td>
                <td className="px-6 py-3 text-center">ACTION</td>
                <td className="w-[14px]"></td>
              </tr>
            </thead>

            <tbody className="h-[220px] overflow-y-scroll">
              {patientLabResults.length === 0 && (
                <div className="border-1 w-[180vh] py-5 absolute flex justify-center items-center">
                  <p className="text-[15px] font-normal text-gray-700 text-center">
=======
              <tr className="h-[70px] border-b text-[15px] font-semibold text-[#64748B]">
                <td className="w-[160px] py-3 pl-6">LAB RESULT UID</td>
                <td className="w-[120px] py-3">DATE</td>
                <td className="w-[120px] py-3">HEMO A1c (%)</td>
                <td className="w-[120px] py-3">FBG (mg/dL)</td>
                <td className="w-[120px] py-3">TC (mg/dL)</td>
                <td className="w-[120px] py-3">LDL-C (mg/dL)</td>
                <td className="w-[120px] py-3">HDL-C (mg/dL)</td>
                <td className="w-[120px] py-3">TG (mg/dL)</td>
                <td className="relative w-[220px] px-6 py-3">
                  <p className="absolute right-[114px] top-[24px]">ACTION</p>
                </td>
              </tr>
            </thead>

            <tbody className="h-[254px]">
              {patientLabResults.length === 0 && (
                <div className="border-1 absolute flex w-[180vh] items-center justify-center py-5">
                  <p className="text-center text-[15px] font-normal text-gray-700">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    No Lab Results found <br />
                  </p>
                </div>
              )}
              <>
                {patientLabResults.map((labResult, index) => (
                  <tr
                    key={index}
<<<<<<< HEAD
                    className="odd:bg-white border-b hover:bg-[#f4f4f4] group text-[15px]"
                  >
                    <td className="px-6 py-3 w-[170px]">
                      <ResuableTooltip text={`${labResult.labResults_uuid}`} />
                    </td>
                    <td className=" px-6 py-3 w-[170px]">
                      {labResult.labResults_date}
                    </td>
                    <td className="px-6 py-3 w-[170px]">
=======
                    className={`group h-[63px] text-[15px] ${getRowClassName(
                      labResult.labResults_hemoglobinA1c,
                      labResult.labResults_fastingBloodGlucose,
                      labResult.labResults_totalCholesterol,
                      labResult.labResults_ldlCholesterol,
                      labResult.labResults_ldlCholesterol,
                      labResult.labResults_triglycerides,
                    )} ${
                      getRowClassName(
                        labResult.labResults_hemoglobinA1c,
                        labResult.labResults_fastingBloodGlucose,
                        labResult.labResults_totalCholesterol,
                        labResult.labResults_ldlCholesterol,
                        labResult.labResults_ldlCholesterol,
                        labResult.labResults_triglycerides,
                      ) === ""
                        ? "border-b hover:bg-[#f4f4f4]"
                        : "hover:bg-opacity-60"
                    }`}
                  >
                    <td className="w-[160px] py-3 pl-6">
                      <ResuableTooltip text={`${labResult.labResults_uuid}`} />
                    </td>
                    <td className="w-[120px] py-3">
                      {" "}
                      {formatTableDate(labResult.labResults_date)}
                    </td>
                    <td
                      className={`w-[120px] py-3 ${getHemoglobinA1cCategoryClass(labResult.labResults_hemoglobinA1c)}`}
                    >
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      <ResuableTooltip
                        text={`${labResult.labResults_hemoglobinA1c}%`}
                      />
                    </td>
<<<<<<< HEAD
                    <td className="px-6 py-3 w-[170px]">
=======
                    <td
                      className={`w-[120px] py-3 ${getBloodGlucoseCategoryClass(labResult.labResults_fastingBloodGlucose)}`}
                    >
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      <ResuableTooltip
                        text={`${labResult.labResults_fastingBloodGlucose}mg/dL`}
                      />
                    </td>
<<<<<<< HEAD
                    <td className="px-6 py-3 w-[170px]">
=======
                    <td
                      className={`w-[120px] py-3 ${getTotalCholesterolCategoryClass(labResult.labResults_totalCholesterol)}`}
                    >
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      <ResuableTooltip
                        text={`${labResult.labResults_totalCholesterol}mg/dL`}
                      />
                    </td>
<<<<<<< HEAD
                    <td className="px-6 py-3 w-[170px]">
=======
                    <td
                      className={`w-[120px] py-3 ${getLdlCholesterolCategoryClass(labResult.labResults_ldlCholesterol)}`}
                    >
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      <ResuableTooltip
                        text={`${labResult.labResults_ldlCholesterol}mg/dL`}
                      />
                    </td>
<<<<<<< HEAD
                    <td className="px-6 py-3 w-[170px]">
=======
                    <td
                      className={`w-[120px] py-3 ${getHdlCholesterolCategoryClass(labResult.labResults_hdlCholesterol)}`}
                    >
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      <ResuableTooltip
                        text={`${labResult.labResults_hdlCholesterol}mg/dL`}
                      />
                    </td>
<<<<<<< HEAD
                    <td className="px-6 py-3 w-[170px]">
=======
                    <td
                      className={`w-[120px] py-3 ${getTriglyceridesCategoryClass(labResult.labResults_triglycerides)}`}
                    >
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      <ResuableTooltip
                        text={`${labResult.labResults_triglycerides}mg/dL`}
                      />
                    </td>
<<<<<<< HEAD
                    <td className="px-6 py-3 flex gap-2 justify-center">
=======
                    <td className="relative w-[220px] py-3">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      <p
                        onClick={() => {
                          isModalOpen(true);
                          setIsEdit(true);
                          setLabResultData(labResult);
                        }}
<<<<<<< HEAD
                      >
                        <Edit></Edit>
=======
                        className="absolute right-[146px] top-[11px]"
                      >
                    
                        <Edit  className={getRowClassName(
                      labResult.labResults_hemoglobinA1c,
                      labResult.labResults_fastingBloodGlucose,
                      labResult.labResults_totalCholesterol,
                      labResult.labResults_ldlCholesterol,
                      labResult.labResults_ldlCholesterol,
                      labResult.labResults_triglycerides,
                    )}/>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      </p>
                      <p
                        onClick={() => {
                          isModalOpen(true);
                          setIsView(true);

                          setLabResultData(labResult);
                        }}
<<<<<<< HEAD
                      >
                        <View></View>
=======
                        className="absolute right-[40px] top-[11px]"
                      >
                        <View className={getRowClassName(
                      labResult.labResults_hemoglobinA1c,
                      labResult.labResults_fastingBloodGlucose,
                      labResult.labResults_totalCholesterol,
                      labResult.labResults_ldlCholesterol,
                      labResult.labResults_ldlCholesterol,
                      labResult.labResults_triglycerides,
                    )}/> 
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      </p>
                    </td>
                  </tr>
                ))}
              </>
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
            <LabresultsModalContent
              isModalOpen={isModalOpen}
              isEdit={isEdit}
              labResultData={labResultData}
              onSuccess={onSuccess}
              setIsUpdated={setIsUpdated}
            />
          }
          isModalOpen={isModalOpen}
        />
      )}
      {isView && (
        <Modal
          content={
            <LabResultsViewModalContent
              isModalOpen={isModalOpen}
              isView={isView}
              labResultsData={labResultData}
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
