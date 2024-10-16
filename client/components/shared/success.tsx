import { useState } from "react";
import Image from "next/image";
interface AlertProps {
  label: string;
  isAlertOpen: boolean;
  toggleModal: (isOpen: boolean) => void;
  isUpdated: any;
  setIsUpdated: any;
}

export const SuccessModal = ({
  label,
  isAlertOpen,
  toggleModal,
  isUpdated,
  setIsUpdated,
}: AlertProps) => {
  console.log(label, "label");
  console.log(isUpdated, "success is edit");
  return (
    <div>
      {isAlertOpen && (
<<<<<<< HEAD
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          <div className="fixed z-50 bg-white rounded-[10px] shadow-xl w-[600px] h-[326px] mx-auto ">
            <div className="text-center pt-[30px]">
              <div className="mx-auto mb-5 text-gray-400 w-[110px] h-[110px]">
=======
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          <div className="fixed z-50 mx-auto h-[326px] w-[600px] rounded-[10px] bg-white shadow-xl">
            <div className="pt-[30px] text-center">
              <div className="mx-auto mb-5 h-[110px] w-[110px] text-gray-400">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                <Image
                  src="/svgs/successful.svg"
                  alt=""
                  width={110}
                  height={110}
                />
              </div>
<<<<<<< HEAD
              <h1 className="text-[20px] font-bold text-md text-[#101828] mb-2">
                {isUpdated
                  ? "Updated"
                  : label === "deleted"
                  ? "Deleted"
                  : "Submitted"}{" "}
                Successfully!
              </h1>
              <p className="text-[15px] text-sm text-[#667085] mb-[40px]">
=======
              <h1 className="text-md mb-2 text-[20px] font-bold text-[#101828]">
                {isUpdated
                  ? "Updated"
                  : label === "Updated"
                    ? "Updated"
                    : label === "deleted"
                      ? "Deleted"
                      : "Submitted"}{" "}
                Successfully!
              </h1>
              <p className="mb-[40px] text-[15px] text-sm text-[#667085]">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                Your data has been successfully{" "}
                {isUpdated
                  ? "updated"
                  : label === "deleted"
<<<<<<< HEAD
                  ? "Deleted"
                  : "added"}
=======
                    ? "Deleted"
                    : "added"}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                .
              </p>
              <button
                onClick={() => {
                  toggleModal(false);
                  if (setIsUpdated !== "") {
                    setIsUpdated(false);
                  }
                }}
<<<<<<< HEAD
                className="w-[150px] h-[45px]px-3 py-2 bg-[#007C85] hover:bg-[#03595B]  text-[#ffff] font-medium  rounded-sm"
=======
                className="h-[45px]px-3 w-[150px] rounded-sm bg-[#007C85] py-2 font-medium text-[#ffff] hover:bg-[#03595B]"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              >
                Okay, Thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
