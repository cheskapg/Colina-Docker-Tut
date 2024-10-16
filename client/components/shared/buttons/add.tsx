import React from "react";
import Image from "next/image";

const Add = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className=" w-[109px] h-[52px] flex items-center justify-center bg-[#1B84FF] text-white font-semibold rounded-[5px] hover:bg-[#2267B9] gap-[5px]"
    >
      <Image
        src="/imgs/add.svg"
        alt="Custom Icon"
<<<<<<< HEAD
        className="w-5 h-5 mr-2 "
        width={22}
        height={22}
=======
        className="w-[18px] h-[18px]"
        width={18}
        height={18}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
      />
      Add
    </button>
  );
};

export default Add;
