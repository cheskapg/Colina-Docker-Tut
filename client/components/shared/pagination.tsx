"use client";

<<<<<<< HEAD
=======
import { cn } from "@/lib/utils";
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
import React, { useState } from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  pageNumber: string;
  setPageNumber: (page: string) => void;
  setCurrentPage: (page: number) => void;
<<<<<<< HEAD
=======
  className?:any;
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
}

const Pagination = ({
  totalPages,
  currentPage,
  pageNumber,
  setPageNumber,
  setCurrentPage,
<<<<<<< HEAD
=======
  className,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
}: PaginationProps) => {
  const [gotoError, setGotoError] = useState(false);
  const renderPageNumbers = () => {
    const startPage = Math.max(currentPage - 1, 1);
    const endPage = Math.min(startPage + 2, totalPages);

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
<<<<<<< HEAD
          className={`flex border border-px items-center justify-center h-full w-[49px] ring-1 ring-gray-300  ${
=======
          className={`flex  border-px items-center justify-center h-full w-[49px] border-[0.9px] border-[#E7EAEE99] ${
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
            currentPage === i ? "btn-pagination " : ""
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
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

  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
<<<<<<< HEAD
    <div className=" w-full max-w-[1618px] my-5">
=======
    <div className={cn(" w-full  my-5",className)}>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
      <div className="flex justify-between">
        <p className="font-medium size-[18px] text-[15px] w-[138px] items-center">
          Page {currentPage} of {totalPages}
        </p>
        <div>
          <nav>
            <div className="flex text-[15px] ">
<<<<<<< HEAD
              <div className="flex">
=======
              <div className="flex h-[30px]">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                <button
                  onClick={goToPreviousPage}
                  className={`${
                    isPrevDisabled ? "cursor-not-allowed" : "cursor-pointer"
<<<<<<< HEAD
                  } flex ring-1 text-[15px] ring-gray-300 items-center justify-center  w-[77px] h-full`}
=======
                  } flex  text-[15px] border-[0.9px] border-[#E7EAEE99] items-center justify-center  w-[77px] h-full`}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  disabled={isPrevDisabled}
                >
                  Prev
                </button>
                {renderPageNumbers()}{" "}
                {/* Call the function and render the returned ReactNode */}
                <button
                  onClick={goToNextPage}
                  className={`${
                    isNextDisabled ? "cursor-not-allowed" : "cursor-pointer"
<<<<<<< HEAD
                  } flex ring-1 text-[15px] ring-gray-300 items-center justify-center  w-[77px] h-full`}
=======
                  } flex text-[15px] border-[0.9px] border-[#E7EAEE99] items-center justify-center  w-[77px] h-full`}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  disabled={isNextDisabled}
                >
                  Next
                </button>
              </div>
              <form onSubmit={handleGoToPage}>
<<<<<<< HEAD
                <div className="flex pl-4 ">
                  <input
                    className={`ipt-pagination appearance-none  text-center ring-1 ${
                      gotoError ? "ring-red-500" : "ring-gray-300"
                    } border-gray-100`}
                    type="text"
                    placeholder="-"
=======
                <div className="flex pl-4 h-[30px]">
                  <input
                    className={`ipt-pagination appearance-none text-center border-[0.9px]${
                      gotoError ? " border-red-500" : " border-[#E7EAEE99]"
                    }  border-[#E7EAEE99]`}
                    type="text"
                    placeholder=""
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    pattern="\d*"
                    value={pageNumber}
                    onChange={handlePageNumberChange}
                    onKeyPress={(e) => {
                      // Allow only numeric characters (0-9), backspace, and arrow keys
                      if (
                        !/[0-9\b]/.test(e.key) &&
                        e.key !== "ArrowLeft" &&
                        e.key !== "ArrowRight"
                      ) {
                        e.preventDefault();
                      }
                    }}
                  />
                  <div className="">
                    <button
                      type="submit"
<<<<<<< HEAD
                      className="btn-pagination ring-1 ring-[#007C85]"
=======
                      className="btn-pagination border-[0.9px] border-[#007C85]"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    >
                      Go{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
