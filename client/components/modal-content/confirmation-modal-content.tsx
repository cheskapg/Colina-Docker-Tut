import React, { useEffect, useState } from "react";

interface Modalprops {
  uuid: string;
  setConfirm: (isConfirm: boolean) => void;
  label: string;
  handleFunction: (uuid: string) => void;
  isSubmitted?: boolean;
}
export const ConfirmationModal = ({
  uuid,
  setConfirm,
  label,
  handleFunction,
  isSubmitted,
}: Modalprops) => {
  return (
    <div>
<<<<<<< HEAD
      <div className="bg-white max-w-lg rounded-md w-[600px] h-[146px]">
        <div className="flex justify-center items-center pt-6 pb-6">
          <h2 className="font-semibold text-[20px] text-[#667085]">
            Are you sure to {label==="Archived"?"archive": label==="Delete"?"delete":""} this?
          </h2>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button
            disabled={isSubmitted}
            onClick={() => {setConfirm(false)}}
            type="button"
            className={`
              ${isSubmitted && " cursor-not-allowed"}
              w-[160px] h-[45px]  bg-[#F3F3F3] hover:bg-[#D9D9D9] font-medium text-black rounded-sm`}
=======
      <div className="h-[146px] w-[600px] max-w-lg rounded-md bg-white">
        <div className="flex items-center justify-center pb-6 pt-6">
          <h2 className="text-[20px] font-semibold text-[#667085]">
            {`Are you sure to ${
              label === "Archived"
                ? "archive"
                : label === "Delete"
                  ? "delete"
                  : label === "Restore"
                    ? "restore"
                    : ""
            } this?`}{" "}
          </h2>
        </div>
        <div className="flex items-center justify-center gap-2">
          <button
            disabled={isSubmitted}
            onClick={() => {
              setConfirm(false);
            }}
            type="button"
            className={` ${isSubmitted && "cursor-not-allowed"} h-[45px] w-[160px] rounded-sm bg-[#F3F3F3] font-medium text-black hover:bg-[#D9D9D9]`}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
          >
            No
          </button>
          <button
            disabled={isSubmitted}
<<<<<<< HEAD
            onClick={() => {label==="Archived"?handleFunction(uuid):label==="Delete"?handleFunction(uuid):null}}
            type="button"
            className={`
              ${isSubmitted && " cursor-not-allowed"}
              w-[160px] h-[45px] px-3 py-2 bg-[#007C85] hover:bg-[#03595B]  text-[#ffff] font-medium rounded-sm`}
=======
            onClick={() => {
              label === "Archived"
                ? handleFunction(uuid)
                : label === "Delete"
                  ? handleFunction(uuid)
                  : label === "Restore"
                    ? handleFunction(uuid)
                    : null;
            }}
            type="button"
            className={` ${isSubmitted && "cursor-not-allowed"} h-[45px] w-[160px] rounded-sm bg-[#007C85] px-3 py-2 font-medium text-[#ffff] hover:bg-[#03595B]`}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
