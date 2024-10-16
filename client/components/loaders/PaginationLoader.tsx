import React from "react";

const PaginationLoader = () => {
  return (
    <div className=" w-full max-w-[1618px] my-5">
      <div className="flex justify-between">
        <p className="font-medium size-[18px] text-[15px] w-[138px] items-center">
          Page 1 of 1
        </p>
        <div>
          <nav>
            <div className="flex text-[15px] ">
              <div className="flex">
                <button
<<<<<<< HEAD
                  className={`cursor-not-allowed flex ring-1 text-[15px] ring-gray-300 items-center justify-center  w-[77px] h-full`}
=======
                  className={`cursor-not-allowed flex text-[15px] border-[0.9px] border-[#E7EAEE99]  items-center justify-center  w-[77px] h-full`}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                >
                  Prev
                </button>
                <p
<<<<<<< HEAD
                  className={`flex border border-px items-center justify-center h-full w-[49px] ring-1 ring-gray-300
=======
                  className={`flex  border-px items-center justify-center h-full w-[49px] border-[0.9px] border-[#E7EAEE99] 
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                 btn-pagination 
                `}
                >
                  1
                </p>
                <button
<<<<<<< HEAD
                  className={`cursor-not-allowed flex ring-1 text-[15px] ring-gray-300 items-center justify-center  w-[77px] h-full`}
=======
                  className={`cursor-not-allowed flex text-[15px] border-[0.9px] border-[#E7EAEE99]  items-center justify-center  w-[77px] h-full`}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                >
                  Next
                </button>
              </div>
              <form>
                <div className="flex pl-4 ">
                  <input
<<<<<<< HEAD
                    className={`ipt-pagination appearance-none  text-center ring-1 ring-gray-300 border-gray-100`}
=======
                    className={`ipt-pagination appearance-none  text-center border-[0.9px] border-[#E7EAEE99]`}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    type="text"
                    placeholder="-"
                    pattern="\d*"
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

export default PaginationLoader;
