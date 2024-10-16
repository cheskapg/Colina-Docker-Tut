"use client";
import React from "react";
import Image from "next/image";
<<<<<<< HEAD
=======
import { LucideLoader2 } from "lucide-react";
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de

const DownloadPDF = ({ isLoading }: any) => {
  return (
<<<<<<< HEAD
    <button className="btn-pdfs hover:bg-[#007C85] h-[42px] hover:border-[#007C85] hover:text-white flex items-center justify-center rounded-lg font-manrope text-black text-lg px-8 py-4 border-2 border-gray-300 text-center w-64 relative ">
      <Image
        src="/imgs/downloadpdf.svg"
        alt="Custom Icon"
        className="w-5 h-5 mr-2"
        width={22}
        height={22}
      />
      Download PDF
=======
    <button
      disabled={isLoading}
      className={`${isLoading ? "cursor-not-allowed" : ""} group flex h-[52px] w-[227.72px] items-center justify-center gap-[10px] rounded-[5px] border-[1.76px] border-[#D0D5DD] text-center text-[15px] font-bold hover:border-[#007C85] hover:bg-[#007C85] hover:text-white`}
    >
      <div className="group invert">
        {isLoading ? (
          <LucideLoader2 size={18} className="animate-spin invert" />
        ) : (
          <Image
            src="/imgs/downloadpdf-white.svg"
            alt="Custom Icon"
            className="h-[18px] w-[18px] group-hover:invert"
            width={18}
            height={18}
          />
        )}
      </div>
      {isLoading ? "Generating PDF..." : "Generate PDF"}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    </button>
  );
};

export default DownloadPDF;
