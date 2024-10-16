import React from "react";
import Image from "next/image";
import DropdownMenu from "../dropdown-menu";
import DownloadPDF from "../shared/buttons/downloadpdf";
import Pagination from "../shared/pagination";
import PaginationLoader from "./PaginationLoader";
const DueMedicationLoader = () => {
  return (
<<<<<<< HEAD
    <div className="w-full  pt-[90px] px-[150px] h-full flex flex-col justify-between">
      <div className="w-full">
        <div className="flex w-full justify-between items-center ">
          <div className="flex flex-col">
            <div className="w-full p-title rounded-full mr-2">
              Due Medication
            </div>
            <div className="text-[#64748B] font-normal w-[1157px] h-[22px] text-[15px] mr-2">
              Total of 0 Due Medication
            </div>
          </div>
          <div className="flex flex-row justify-end h-full -mb-[13px]">
            <DownloadPDF></DownloadPDF>
          </div>
        </div>
        <div className="w-full sm:rounded-lg items-center">
          <div className="w-full mt-3 justify-between flex items-center bg-[#F4F4F4] h-[75px]">
            <form className="mr-5 relative">
              <label className=""></label>
              <div className="flex">
                <input
                  className="py-3 px-5 m-5 w-[573px] outline-none h-[47px] pt-[14px] ring-[1px] ring-[#E7EAEE] text-[15px] rounded pl-10 relative bg-[#fff] bg-no-repeat "
=======
    <div className="flex h-full w-full flex-col justify-between px-[150px] pt-[90px]">
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <div className="p-title mr-2 w-full rounded-full">
              Due Medication
            </div>
            <div className="sub-title">Total of 0 Due Medication</div>
          </div>
          <div className="flex h-full flex-row justify-end">
            <DownloadPDF></DownloadPDF>
          </div>
        </div>
        <div className="w-full items-center sm:rounded-lg">
          <div className="mt-3 flex h-[75px] w-full items-center justify-between bg-[#F4F4F4]">
            <form className="relative mr-5">
              <label className=""></label>
              <div className="flex">
                <input
                  className="relative m-5 h-[47px] w-[573px] rounded-[4.69px] bg-[#fff] bg-no-repeat px-5 py-3 pl-10 pt-[14px] text-[15px] outline-none ring-[1px] ring-[#E7EAEE]"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  type="text"
                  placeholder="Search by reference no. or name..."
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
                  className="pointer-events-none absolute left-8 top-9"
                />
              </div>
            </form>
            <div className="mr-3 flex w-full items-center justify-end gap-[12px]">
              <p className="text-[15px] font-semibold text-[#191D23] opacity-[60%]">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                Order by
              </p>
              <DropdownMenu
                options={[]}
                open={false}
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
                options={[]}
                open={false}
                width={"165px"}
<<<<<<< HEAD
                label={"Select"}
=======
                label={"Choose"}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              />
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <table className="w-full h-full justify-center items-start text-[15px]">
          <thead className=" text-left rtl:text-right">
            <tr className="uppercase font-semibold text-[#64748B] border-b border-[#E7EAEE] h-[70px]">
              <td className="px-6 py-5 ">Name</td>
              <td className="px-6 py-5 ">DUE MED UID</td>
              <td className="px-6 py-5 ">Date</td>
              <td className="px-6 py-5 ">Time</td>
              <td className="px-6 py-5">Medication</td>
            </tr>
          </thead>
          <tbody className="animate-pulse">
            <tr className=" group  bg-white hover:bg-gray-100  border-b">
              <td className="px-6 py-5 flex items-center gap-2">
                <div className="min-h-[45px] min-w-[45px] bg-gray-400 rounded-full mr-2 "></div>
                <div className="h-[22px] w-[250px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
              <td className="px-6 py-5 ">
                <div className="h-[22px] w-[120px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
              <td className="px-6 py-5 ">
                <div className="h-[22px] w-[100px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
              <td className="px-6 py-5 ">
                <div className="h-[22px] w-[120px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
              <td className="px-6 py-5">
                <div className="h-[22px] w-[150px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
            </tr>
            <tr className=" group  bg-white hover:bg-gray-100  border-b">
              <td className="px-6 py-5 flex items-center gap-2">
                <div className="min-h-[45px] min-w-[45px] bg-gray-400 rounded-full mr-2 "></div>
                <div className="h-[22px] w-[150px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
              <td className="px-6 py-5 ">
                <div className="h-[22px] w-[150px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
              <td className="px-6 py-5 ">
                <div className="h-[22px] w-[120px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
              <td className="px-6 py-5 ">
                <div className="h-[22px] w-[100px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
              <td className="px-6 py-5">
                <div className="h-[22px] w-[120px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
            </tr>
            <tr className=" group  bg-white hover:bg-gray-100  border-b">
              <td className="px-6 py-5 flex items-center gap-2">
                <div className="min-h-[45px] min-w-[45px] bg-gray-400 rounded-full mr-2 "></div>
                <div className="h-[22px] w-[250px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
              <td className="px-6 py-5 ">
                <div className="h-[22px] w-[120px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
              <td className="px-6 py-5 ">
                <div className="h-[22px] w-[100px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
              <td className="px-6 py-5 ">
                <div className="h-[22px] w-[120px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
              <td className="px-6 py-5">
                <div className="h-[22px] w-[150px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
            </tr>
            <tr className=" group  bg-white hover:bg-gray-100  border-b">
              <td className="px-6 py-5 flex items-center gap-2">
                <div className="min-h-[45px] min-w-[45px] bg-gray-400 rounded-full mr-2 "></div>
                <div className="h-[22px] w-[150px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
              <td className="px-6 py-5 ">
                <div className="h-[22px] w-[150px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
              <td className="px-6 py-5 ">
                <div className="h-[22px] w-[120px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
              <td className="px-6 py-5 ">
                <div className="h-[22px] w-[100px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
              <td className="px-6 py-5">
                <div className="h-[22px] w-[120px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
            </tr>
            <tr className=" group  bg-white hover:bg-gray-100  border-b">
              <td className="px-6 py-5 flex items-center gap-2">
                <div className="min-h-[45px] min-w-[45px] bg-gray-400 rounded-full mr-2 "></div>
                <div className="h-[22px] w-[250px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
              <td className="px-6 py-5 ">
                <div className="h-[22px] w-[120px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
              <td className="px-6 py-5 ">
                <div className="h-[22px] w-[100px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
              <td className="px-6 py-5 ">
                <div className="h-[22px] w-[120px] bg-gray-400 rounded-full mr-2 "></div>
              </td>
              <td className="px-6 py-5">
                <div className="h-[22px] w-[150px] bg-gray-400 rounded-full mr-2 "></div>
=======
        <table className="h-full w-full items-start justify-center text-[15px]">
          <thead className="text-left rtl:text-right">
            <tr className="sub-title h-[70px] border-b border-[#E7EAEE] !font-semibold uppercase">
              <td className="px-6 py-5">Name</td>
              <td className="w-[300px] px-6 py-5">DUE MED UID</td>
              <td className="px-6 py-5">Medication</td>
              <td className="w-[200px] px-6 py-5">Date</td>
              <td className="w-[200px] px-6 py-5">Time</td>
            </tr>
          </thead>
          <tbody className="animate-pulse">
            <tr className="group border-b bg-white hover:bg-gray-100">
              <td className="flex items-center gap-2 px-6 py-5">
                <div className="mr-2 min-h-[45px] min-w-[45px] rounded-full bg-gray-400"></div>
                <div className="h-[22px] w-[250px] rounded-full bg-gray-400"></div>
              </td>
              <td className="w-[300px] px-6 py-5">
                <div className="h-[22px] w-[180px] rounded-full bg-gray-400"></div>
              </td>
              <td className="px-6 py-5">
                <div className="h-[22px] w-[300px] rounded-full bg-gray-400"></div>
              </td>
              <td className="w-[200px] px-6 py-5">
                <div className="h-[22px] w-[100px] rounded-full bg-gray-400"></div>
              </td>
              <td className="w-[200px] px-6 py-5">
                <div className="h-[22px] w-[130px] rounded-full bg-gray-400"></div>
              </td>
            </tr>
            <tr className="group border-b bg-white hover:bg-gray-100">
              <td className="flex items-center gap-2 px-6 py-5">
                <div className="mr-2 min-h-[45px] min-w-[45px] rounded-full bg-gray-400"></div>
                <div className="h-[22px] w-[230px] rounded-full bg-gray-400"></div>
              </td>
              <td className="w-[300px] px-6 py-5">
                <div className="h-[22px] w-[230px] rounded-full bg-gray-400"></div>
              </td>
              <td className="px-6 py-5">
                <div className="h-[22px] w-[250px] rounded-full bg-gray-400"></div>
              </td>
              <td className="w-[200px] px-6 py-5">
                <div className="h-[22px] w-[120px] rounded-full bg-gray-400"></div>
              </td>
              <td className="w-[200px] px-6 py-5">
                <div className="h-[22px] w-[90px] rounded-full bg-gray-400"></div>
              </td>
            </tr>
            <tr className="group border-b bg-white hover:bg-gray-100">
              <td className="flex items-center gap-2 px-6 py-5">
                <div className="mr-2 min-h-[45px] min-w-[45px] rounded-full bg-gray-400"></div>
                <div className="h-[22px] w-[270px] rounded-full bg-gray-400"></div>
              </td>
              <td className="w-[300px] px-6 py-5">
                <div className="h-[22px] w-[200px] rounded-full bg-gray-400"></div>
              </td>
              <td className="px-6 py-5">
                <div className="h-[22px] w-[100px] rounded-full bg-gray-400"></div>
              </td>
              <td className="w-[200px] px-6 py-5">
                <div className="h-[22px] w-[110px] rounded-full bg-gray-400"></div>
              </td>
              <td className="w-[200px] px-6 py-5">
                <div className="h-[22px] w-[120px] rounded-full bg-gray-400"></div>
              </td>
            </tr>
            <tr className="group border-b bg-white hover:bg-gray-100">
              <td className="flex items-center gap-2 px-6 py-5">
                <div className="mr-2 min-h-[45px] min-w-[45px] rounded-full bg-gray-400"></div>
                <div className="h-[22px] w-[215px] rounded-full bg-gray-400"></div>
              </td>
              <td className="w-[300px] px-6 py-5">
                <div className="h-[22px] w-[220px] rounded-full bg-gray-400"></div>
              </td>
              <td className="px-6 py-5">
                <div className="h-[22px] w-[90px] rounded-full bg-gray-400"></div>
              </td>
              <td className="w-[200px] px-6 py-5">
                <div className="h-[22px] w-[80px] rounded-full bg-gray-400"></div>
              </td>
              <td className="w-[200px] px-6 py-5">
                <div className="h-[22px] w-[80px] rounded-full bg-gray-400"></div>
              </td>
            </tr>
            <tr className="group border-b bg-white hover:bg-gray-100">
              <td className="flex items-center gap-2 px-6 py-5">
                <div className="mr-2 min-h-[45px] min-w-[45px] rounded-full bg-gray-400"></div>
                <div className="h-[22px] w-[250px] rounded-full bg-gray-400"></div>
              </td>
              <td className="w-[300px] px-6 py-5">
                <div className="h-[22px] w-[180px] rounded-full bg-gray-400"></div>
              </td>
              <td className="px-6 py-5">
                <div className="h-[22px] w-[300px] rounded-full bg-gray-400"></div>
              </td>
              <td className="w-[200px] px-6 py-5">
                <div className="h-[22px] w-[100px] rounded-full bg-gray-400"></div>
              </td>
              <td className="w-[200px] px-6 py-5">
                <div className="h-[22px] w-[130px] rounded-full bg-gray-400"></div>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between">
        <PaginationLoader />
      </div>
    </div>
  );
};

export default DueMedicationLoader;
