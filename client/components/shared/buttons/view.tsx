import React from "react";
import { cn } from "@/lib/utils";

interface ViewProps {
  className?: string; // Make className optional
}

const View = ({ className = '' }: ViewProps) => {
  // Determine the hover class based on the passed className
  const hoverClasses = className.includes('bg-[#FDF5F7]') || className.includes('bg-[#FFFDF7]')
    ? 'hover:!text-black hover:!bg-[#FFFFFF]'
    : 'hover:!text-white hover:!bg-[#007C85]';

  const buttonClasses = cn(
    "w-[95px] h-[40px] rounded",
    "!bg-[#E7EAEE]",
    "text-[15px]",
    hoverClasses, // Apply the hover classes conditionally
    className // Apply any additional classes passed via props
  );
  return (
<<<<<<< HEAD
    <button className="w-[90px] h-[35px] rounded bg-[#E7EAEE] text-[15px] hover:!text-white hover:!bg-[#007C85] group-hover:bg-white group-hover:text-black ">
      View
=======
    <button className={buttonClasses}>
      <span className="mt-1 flex items-center justify-center">View</span>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    </button>
  );
};

export default View;
