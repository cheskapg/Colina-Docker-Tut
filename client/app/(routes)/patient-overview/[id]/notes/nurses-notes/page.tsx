"use client";
import Image from "next/image";

import React, { useEffect } from "react";
import DropdownMenu from "@/components/dropdown-menu";
<<<<<<< HEAD
import Add from "@/components/shared/buttons/add";
import DownloadPDF from "@/components/shared/buttons/downloadpdf";
import Edit from "@/components/shared/buttons/edit";
import { useState } from "react";
import { onNavigate } from "@/actions/navigation";
=======
import { useState } from "react";
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
import { fetchNotesByPatient } from "@/app/api/notes-api/notes-api";
import { SuccessModal } from "@/components/shared/success";
import { NursenotesModalContent } from "@/components/modal-content/nursenotes-modal-content";
import Modal from "@/components/reusable/modal";
import View from "@/components/shared/buttons/view";
import { useParams, useRouter } from "next/navigation";
import Pagination from "@/components/shared/pagination";
import ResuableTooltip from "@/components/reusable/tooltip";
<<<<<<< HEAD
=======
import { formatCreatedTime, formatTableDate } from "@/lib/utils"; // Adjust the path as needed
import PdfDownloader from "@/components/pdfDownloader";
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de

const Notes = () => {
  const router = useRouter();
  if (typeof window === "undefined") {
  }
  const [isOpenOrderedBy, setIsOpenOrderedBy] = useState(false);
  const [isOpenSortedBy, setIsOpenSortedBy] = useState(false);
  const [sortOrder, setSortOrder] = useState<string>("ASC");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [patientNotes, setPatientNotes] = useState<any[]>([]);
  const [PatientNotesData, setPatientNotesData] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalNotes, setTotalNotes] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState("");
<<<<<<< HEAD
  const [gotoError, setGotoError] = useState(false);
=======
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState("");
  const [isView, setIsView] = useState(false);
  const [term, setTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [isEdit, setIsEdit] = useState(false);
  const [notesToEdit, setNotesToEdit] = useState<any[]>([]);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
<<<<<<< HEAD
  const [isErrorOpen, setIsErrorOpen] = useState(false);
=======
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  const [isUpdated, setIsUpdated] = useState(false);
  const type = "nn";

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
    setIsOpenSortedBy(false);
    if (option === "Subject") {
      setSortBy("subject");
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
    { label: "Subject", onClick: handleSortOptionClick },
    { label: "Notes", onClick: handleSortOptionClick },
  ]; // end of orderby & sortby function

  const [isOpen, setIsOpen] = useState(false);

  const isModalOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "visible";
      setNotesToEdit([]);
      setIsEdit(false);
<<<<<<< HEAD
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
      setPatientNotesData([]);
    }
  };
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchNotesByPatient(
          patientId,
          term,
          type,
          currentPage,
          sortBy,
          sortOrder as "ASC" | "DESC",
<<<<<<< HEAD
          router
=======
          4,
          router,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        );
        setPatientNotes(response.data);
        setTotalPages(response.totalPages);
        setTotalNotes(response.totalCount);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage, sortOrder, sortBy, term, isSuccessOpen]);

  console.log(patientNotes, "patientNotes");

  const onSuccess = () => {
    setIsSuccessOpen(true);
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

  return (
<<<<<<< HEAD
    <div className="  w-full h-full flex flex-col justify-between">
      <div className="h-full w-full">
        <div className="w-full justify-between flex mb-2">
          <div className="flex-row">
            <div className="flex gap-2">
              <p className="p-title">Notes</p>
=======
    <div className="flex h-full w-full flex-col justify-between">
      <div className="h-full w-full">
        <div className="mb-2 flex w-full justify-between">
          <div className="flex-row">
            <div className="flex gap-2">
              <p className="p-table-title">Notes</p>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              <span className="slash">{">"}</span>
              <span className="active">Nurse&apos;s Notes</span>
              <span className="slash">{"/"}</span>
              <span
                onClick={() => {
                  setIsLoading(true);
                  router.replace(
<<<<<<< HEAD
                    `/patient-overview/${patientId.toLowerCase()}/notes/incident-report`
=======
                    `/patient-overview/${patientId.toLowerCase()}/notes/incident-report`,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  );
                }}
                className="bread"
              >
                Incident Report
              </span>
            </div>
            <div>
<<<<<<< HEAD
              <p className="text-[#64748B] font-normal w-[1157px] h-[22px] text-[14px]">
=======
              <p className="my-1 h-[23px] text-[15px] font-normal text-[#64748B]">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                Total of {totalNotes} Notes
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
            <button
              onClick={() => {
                isModalOpen(true);
                setIsView(false);
              }}
              className="btn-add gap-2"
            >
              <Image src="/imgs/add.svg" alt="" width={18} height={18} />
              <p className="">Add</p>
            </button>
            <PdfDownloader
              props={[ "Uuid", "Date", "Time", "Subject", "Notes"]}
              variant={"Nurse's Note Table"}
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
<<<<<<< HEAD
                  width={20}
                  height={20}
                  className="absolute left-8 top-9 pointer-events-none"
=======
                  width="20"
                  height="20"
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
=======
              <tr className="h-[70px] border-b text-[15px] font-semibold uppercase text-[#64748B]">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                <td className="px-6 py-3">NOTES UID</td>
                <td className="px-6 py-3">DATE</td>
                <td className="px-6 py-3">TIME</td>
                <td className="px-6 py-3">SUBJECT</td>
<<<<<<< HEAD
                <td className="px-6 py-3 ">NOTES</td>
                <td className="px-6 py-3 text-center">ACTION</td>
                <td className="w-[14px]"></td>
              </tr>
            </thead>
            <tbody className="h-[220px] overflow-y-scroll">
              {patientNotes.length === 0 && (
                <h1 className="border-1 w-[180vh] py-5 absolute flex justify-center items-center">
                  <p className="text-[15px] font-normal text-gray-700 text-center">
=======
                <td className="px-6 py-3">NOTES</td>
                <td className="relative px-6 py-3">
                  <p className="absolute right-[80px] top-[24px]">Action</p>
                </td>
              </tr>
            </thead>
            <tbody className="h-[254px]">
              {patientNotes.length === 0 && (
                <h1 className="border-1 absolute flex items-center justify-center py-5">
                  <p className="text-center text-[15px] font-normal text-gray-700">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    No Note/s <br />
                  </p>
                </h1>
              )}
              {patientNotes.map((note, index) => (
                <tr
                  key={index}
<<<<<<< HEAD
                  className="odd:bg-white  even:bg-gray-50  border-b hover:bg-[#f4f4f4] group"
=======
                  className="group h-[63px] border-b text-[15px] hover:bg-[#f4f4f4]"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                >
                  <td className="px-6 py-3">
                    <ResuableTooltip text={note.notes_uuid} />
                  </td>
                  <td className="px-6 py-3">
<<<<<<< HEAD
                    {new Date(note.notes_createdAt).toLocaleDateString()}
                  </td>
                  <td className="max-w-[552px] px-6 py-3">
                    {new Date(
                      new Date(note.notes_createdAt).getTime() -
                        new Date().getTimezoneOffset() * 60000
                    ).toLocaleTimeString(navigator.language, {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
=======
                    {formatTableDate(note.notes_createdAt)}
                  </td>
                  <td className="px-6 py-3">
                    {formatCreatedTime(note.notes_createdAt)}
                    {/* time not formattd left as is for now  and check with local time of machine */}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  </td>
                  <td className="px-6 py-3">
                    <ResuableTooltip text={note.notes_subject} />
                  </td>
<<<<<<< HEAD
                  <td className="px-6 py-3 ">
                    <ResuableTooltip text={note.notes_notes} />
                  </td>
                  <td className="flex justify-center px-6 py-3">
=======
                  <td className="px-6 py-3">
                    <ResuableTooltip text={note.notes_notes} />
                  </td>
                  <td className="relative py-3 pl-6">
                    {" "}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    <p
                      onClick={() => {
                        isModalOpen(true);
                        setIsView(true);
<<<<<<< HEAD

                        setPatientNotesData(note);
                      }}
=======
                        setPatientNotesData(note);
                      }}
                      className="absolute right-[40px] top-[11px]"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    >
                      <View></View>
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
            <NursenotesModalContent
              isModalOpen={isModalOpen}
<<<<<<< HEAD
              isOpen={isOpen}
              label="sample label"
=======
  
              uuid=""
              name=""
              isOpen={isOpen}
              isView={isView}
              label={isView ? "View" : "Add"}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              PatientNotesData={PatientNotesData}
              onSuccess={onSuccess}
            />
          }
          isModalOpen={isModalOpen}
        />
      )}
      {/* {isView && (
        <Modal
          content={
            <NursenotesModalContent
              isModalOpen={isModalOpen}
              isView={isView}
            />
          }
          isModalOpen={isModalOpen}
        />
      )} */}

      {isSuccessOpen && (
        <SuccessModal
<<<<<<< HEAD
          label={isEdit ? "Edit Note" : "Add Note"}
=======
          label={isView ? "View" : "Add"}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
          isAlertOpen={isSuccessOpen}
          toggleModal={setIsSuccessOpen}
          isUpdated={isUpdated}
          setIsUpdated={setIsUpdated}
        />
      )}
    </div>
  );
};

export default Notes;
