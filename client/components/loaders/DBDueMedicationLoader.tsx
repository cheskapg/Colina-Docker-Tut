<<<<<<< HEAD
import React from "react";

const DBDueMedicationLoader = () => {
  return (
    <div className="flex flex-col items-start border-[1px] border-[#E4E4E7] py-3 px-5 gap-5 w-full">
    <div className="h-[30px] w-[250px] rounded-full mr-2 p-title">
      Due Medications
    </div>
    <div className=" w-full font-normal text-[15px] text-[#71717A] -mt-2 ">
      Total of 0 due medication
    </div>
    <div className="animate-pulse w-full h-full gap-[23px] flex flex-col">
      <div className="flex items-center w-full ">
        <div className="min-h-[50px] min-w-[50px] bg-gray-300 rounded-full"></div>
        <div className="flex flex-row gap-2 justify-between w-full">
          <div className="flex flex-col w-full gap-2">
            <div className="h-[22px] w-[200px] bg-gray-200 rounded-full mr-2"></div>
            <div className="h-[22px] w-36 bg-gray-200 rounded-full mr-2"></div>
          </div>
          <div className="gap-2 flex flex-col justify-end items-end">
            <div className="h-[22px] w-36 bg-gray-200 rounded-full mr-2"></div>
            <div className="h-[22px] w-20 bg-gray-200 rounded-full mr-2"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full">
        <div className="min-h-[50px] min-w-[50px] bg-gray-300 rounded-full "></div>
        <div className="flex flex-row gap-2 justify-between w-full ">
          <div className="flex flex-col w-full gap-2">
            <div className="h-[22px] w-[200px] bg-gray-200 rounded-full mr-2"></div>
            <div className="h-[22px] w-36 bg-gray-200 rounded-full mr-2"></div>
          </div>
          <div className="gap-2 flex flex-col justify-end items-end">
            <div className="h-[22px] w-36 bg-gray-200 rounded-full mr-2"></div>
            <div className="h-[22px] w-20 bg-gray-200 rounded-full mr-2"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full">
        <div className="min-h-[50px] min-w-[50px] bg-gray-300 rounded-full "></div>
        <div className="flex flex-row gap-2 justify-between w-full">
          <div className="flex flex-col w-full gap-2">
            <div className="h-[22px] w-[200px] bg-gray-200 rounded-full mr-2"></div>
            <div className="h-[22px] w-36 bg-gray-200 rounded-full mr-2"></div>
          </div>
          <div className="gap-2 flex flex-col justify-end items-end">
            <div className="h-[22px] w-36 bg-gray-200 rounded-full mr-2"></div>
            <div className="h-[22px] w-20 bg-gray-200 rounded-full mr-2"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex w-fit cursor-pointer items-center hover:text-[#007C85] font-semibold text-[15px] text-[#71717A] ">
      SEE ALL DUE
      <svg
        className="text-[#71717A] ml-2 group-hover:text-[#007C85]"
        width="17"
        height="14"
        viewBox="0 0 10 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.14795 2.15826L8.7739 8.78421L2.14795 15.4102"
          stroke="currentColor"
          strokeWidth="2.43402"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
=======
const DBDueMedicationLoader = () => {
  return (
    <div className="flex flex-col items-start bg-[#D9D9D91A] py-3 px-5 gap-5 w-full h-[360px] rounded-[5px]">
      <div className="h-[30px] w-[250px] rounded-full mr-2 font-medium text-[20px]">
        Due Medications
      </div>
      <div className="sub-title -mt-2 w-full text-[15px] font-normal">
        Total of 0 due medication
      </div>
      <div className="flex h-full w-full animate-pulse flex-col gap-[23px]">
        <div className="flex w-full items-center">
          <div className="min-h-[50px] min-w-[50px] rounded-full bg-gray-300"></div>
          <div className="flex w-full flex-row justify-between gap-2">
            <div className="flex w-full flex-col gap-2">
              <div className="mr-2 h-[22px] max-w-[200px] rounded-full bg-gray-200"></div>
              <div className="mr-2 h-[22px] w-36 rounded-full bg-gray-200"></div>
            </div>
            <div className="flex flex-col items-end justify-end gap-2">
              <div className="mr-2 h-[22px] w-36 rounded-full bg-gray-200"></div>
              <div className="mr-2 h-[22px] w-20 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="min-h-[50px] min-w-[50px] rounded-full bg-gray-300"></div>
          <div className="flex w-full flex-row justify-between gap-2">
            <div className="flex w-full flex-col gap-2">
              <div className="mr-2 h-[22px] max-w-[200px] rounded-full bg-gray-200"></div>
              <div className="mr-2 h-[22px] w-36 rounded-full bg-gray-200"></div>
            </div>
            <div className="flex flex-col items-end justify-end gap-2">
              <div className="mr-2 h-[22px] w-36 rounded-full bg-gray-200"></div>
              <div className="mr-2 h-[22px] w-20 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="min-h-[50px] min-w-[50px] rounded-full bg-gray-300"></div>
          <div className="flex w-full flex-row justify-between gap-2">
            <div className="flex w-full flex-col gap-2">
              <div className="mr-2 h-[22px] max-w-[200px] rounded-full bg-gray-200"></div>
              <div className="mr-2 h-[22px] w-36 rounded-full bg-gray-200"></div>
            </div>
            <div className="flex flex-col items-end justify-end gap-2">
              <div className="mr-2 h-[22px] w-36 rounded-full bg-gray-200"></div>
              <div className="mr-2 h-[22px] w-20 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-fit cursor-pointer items-center text-[15px] font-semibold text-[#151518] opacity-50 hover:text-[#007C85] hover:opacity-100">
        SEE ALL DUE
        <svg
          className="ml-2 text-[#71717A] group-hover:text-[#007C85]"
          width="17"
          height="14"
          viewBox="0 0 10 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.14795 2.15826L8.7739 8.78421L2.14795 15.4102"
            stroke="currentColor"
            strokeWidth="2.43402"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  );
};

export default DBDueMedicationLoader;
