"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useRef, useState } from "react";
import { searchPatientList } from "@/app/api/patients-api/patientList.api";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { createNotesOfPatient } from "@/app/api/notes-api/notes-api";
import { toast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import { selectPatient } from "@/app/api/patients-api/patientSelect.api";
import { SuccessModal } from "./shared/success";

const NurseDrawer = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [patientId, setPatientId] = React.useState("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
<<<<<<< HEAD
  const [isError, setIsError] = useState(false);
=======
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  const [patientList, setPatientList] = useState([
    {
      uuid: "",
      lastName: "",
      firstName: "",
<<<<<<< HEAD
      values: "",
=======
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    },
  ]);

  const [formData, setFormData] = useState({
    subject: "",
    notes: "",
    type: "nn",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
<<<<<<< HEAD
=======

  const handleOnClose = () => {
    setFormData({
      subject: "",
      notes: "",
      type: "nn",
    });
    setPatientId("");
    setError("");
  };

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("sub");
    setIsSubmitted(true);
    try {
      const notes = await createNotesOfPatient(patientId, formData, router);
      if (notes) {
        setIsSuccess(true);
        console.log(isSuccess, "issuccess");
      }

      setFormData({
        subject: "",
        notes: "",
        type: "nn",
      });
<<<<<<< HEAD

      onSuccess();
=======
      onSuccess();
      setOpen(false);
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
      setPatientId("");
    } catch (error: any) {
      console.log(error, "errrorr1");
      if (error.message == "Network Error") {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.message,
          action: (
            <ToastAction
              altText="Try again"
              onClick={() => {
                window.location.reload();
              }}
            >
              Try again
            </ToastAction>
          ),
        });
      }
      console.error("Error adding note:", error);
      setError("Failed to add note");
    }

    setIsSubmitted(false);
  };

  console.log(error, "errrrorr");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await selectPatient(router);
        setPatientList(response.data);
      } catch (error: any) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const ref = useRef<HTMLTextAreaElement>(null);
  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = `${e.currentTarget.scrollHeight}px`;
    }
  };
  console.log(formData, "formData");
  console.log(isSuccess, "isSUccess");

  useEffect(() => {
    if (isSuccess) {
      const cancelButton = document.querySelector(
        ".cancel-button"
      ) as HTMLButtonElement;
      const clickEvent = new MouseEvent("click", { bubbles: true });
      cancelButton.dispatchEvent(clickEvent);
      setIsSuccess(false);
    }
  }, [isSuccess]);

  const onSuccess = () => {
    setIsSuccessOpen(true);
    setOpen(false);
  };

  return (
    <>
      {" "}
      <Drawer direction="right">
        <DrawerTrigger className="font-semibold">
<<<<<<< HEAD
          <div className="w-[180px] justify-center rounded-sm cursor-pointer  border-[1px] p-2 border-[#D0D5DD] flex">
            <Image
              src="/icons/plus-icon.svg"
              alt="add"
              width={15}
              height={15}
            />
=======
          <div className="w-[195px] h-[52px] justify-center rounded-[5px] cursor-pointer text-white border-[1.76px] p-2 hover:bg-[#0E646A] hover:border-[#D0D5DD]  bg-[#007C85] group border-[#007C85] flex items-center text-[15px] font-bold gap-[4px]">
            <div className="group">
            <Image
              src="/icons/plus-icon-white.svg"
              alt="add"
              width={18}
              height={18}
              className="h-[18px] w-[18px] "
            />
            </div>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
            Nurse's Note
          </div>
        </DrawerTrigger>
        <DrawerContent className="top-0 right-0 left-auto mt-0 w-[500px] rounded-none">
<<<<<<< HEAD
          <DrawerHeader className="bg-[#007C85]">
            <DrawerTitle className="text-white w-full flex justify-between items-center">
              <p className="ml-1">Nurse's Notes</p>
              <p>
                <DrawerClose>
                  <X />
=======
          <DrawerHeader className="bg-[#007C85] h-[71px]">
            <DrawerTitle className="text-white w-full flex justify-between items-center">
              <p className="ml-1 text-[20px] font-semibold">Nurse's Notes</p>
              <p>
                <DrawerClose>
                  <X onClick={handleOnClose} />
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                </DrawerClose>
              </p>
            </DrawerTitle>
          </DrawerHeader>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col h-full justify-between"
          >
            <div className="w-full h-full">
              <div className="w-full px-[20px] mt-3">
<<<<<<< HEAD
                <h1 className="text-md font-bold leading-6 text-gray-900 mb-2">
                  PATIENT
=======
                <h1 className="text-md font-medium text-[20px] leading-6   mb-2">
                  Patient
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                </h1>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
<<<<<<< HEAD
                      className="w-full justify-between mb-5 h-12 rounded-md shadow-sm"
=======
                      className={`${
                        error && "error"
                      } w-full justify-between mb-5 h-12 rounded-[3px] sub-title`}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    >
                      {patientId
                        ? patientList.find(
                            (patientList) => patientList.uuid === patientId
                          )?.lastName
                          ? `${
                              patientList.find(
                                (patientList) => patientList.uuid === patientId
<<<<<<< HEAD
                              )?.lastName
                            }, ${
                              patientList.find(
                                (patientList) => patientList.uuid === patientId
                              )?.firstName
=======
                              )?.firstName
                            } ${
                              patientList.find(
                                (patientList) => patientList.uuid === patientId
                              )?.lastName
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                            }`
                          : patientList.find(
                              (patientList) => patientList.uuid === patientId
                            )?.lastName
<<<<<<< HEAD
                        : "Select patient..."}
                      <Image
                        src="/icons/arrow-down-gray.svg"
=======
                        : "Select patient........."}
                      <Image
                        src={
                          error
                            ? "/icons/arrow-down-red.svg"
                            : "/icons/arrow-down-gray-nn.svg"
                        }
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                        width={15}
                        height={15}
                        alt="arrow-down"
                        className={`${
                          open ? "rotate-180" : ""
<<<<<<< HEAD
                        } ml-2 h-4 w-4 shrink-0 opacity-50 transition duration-300`}
=======
                        } ml-2 w-[8px] h-[5px] shrink-0 opacity-50 transition duration-300`}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[458px] p-0 overflow-y-auto">
                    <Command
                      className="w-full"
                      onClick={() => {
                        setError("");
                      }}
                    >
                      <CommandInput placeholder="Search patient..." />
                      <CommandEmpty>No patient found.</CommandEmpty>
                      <CommandGroup>
<<<<<<< HEAD
                        <CommandList className=" z-[9999] ">    
=======
                        <CommandList className=" z-[9999] ">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                          {patientList.map((patient) => (
                            <CommandItem
                              key={patient.uuid}
                              onSelect={(currentUuid) => {
                                setPatientId(
                                  patient.uuid === patientId ? "" : patient.uuid
                                );
                                setOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  patientId === patient.uuid
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
<<<<<<< HEAD
                              {patient.lastName}, {patient.firstName}
=======
                              {patient.firstName} {patient.lastName}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                            </CommandItem>
                          ))}
                        </CommandList>
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
<<<<<<< HEAD
                {error && (
                  <p className="-mt-3 text-red-500 text-sm  mb-1">
                    Select a patient!
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 px-[20px]">
                <div className="flex flex-col gap-1">
                  <h1 className="font-semibold text-lg">
                    Add Note and Compose
                  </h1>
                  <p className="text-sm text-[#667085]">
                    Submit your log details.
                  </p>
=======
              </div>
              <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 px-[20px]">
                <div className="flex flex-col gap-1">
                  <h1 className=" font-medium text-[20px]">
                    Add Note and Compose
                  </h1>
                  <p className="sub-title">Submit your log details.</p>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
<<<<<<< HEAD
                    className="block text-md font-bold leading-6 text-gray-900 required-field"
                  >
                    SUBJECT
=======
                    className="block text-md leading-6 font-medium text-[20px] required-field"
                  >
                    Subject
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
<<<<<<< HEAD
                      className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
=======
                      className="block w-full h-12 rounded-[3px] px-3.5 py-2 border-[1px] border-[#D0D5DD]  placeholder:text-[#64748B] placeholder:text-[15px] text-[15px] sm:text-sm sm:leading-6"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      placeholder="input subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
<<<<<<< HEAD
                    className="block text-md font-bold leading-6 text-gray-900 required-field"
                  >
                    NOTES
=======
                    className="block text-md leading-6 font-medium text-[20px] required-field"
                  >
                    Notes
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      ref={ref}
<<<<<<< HEAD
                      className="resize-y block w-full rounded-md max-h-[400px] h-[150px] min-h-[50px] border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
=======
                      className="resize-y block w-full rounded-[3px] max-h-[400px] h-[150px] min-h-[50px] border-[1px] border-[#D0D5DD] px-3.5 py-2 placeholder:text-[#64748B] placeholder:text-[15px] text-[15px]  sm:text-sm sm:leading-6"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      placeholder="input notes"
                      onInput={handleInput}
                      name="notes"
                      value={formData.notes}
                      onChange={handleTextChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

<<<<<<< HEAD
            <DrawerFooter className="flex flex-row justify-end gap-3 mb-2">
=======
            <DrawerFooter className="flex flex-row justify-end gap-1 mb-2">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              <DrawerClose>
                <button
                  type="button"
                  disabled={isSubmitted}
<<<<<<< HEAD
                  className={` cancel-button
                  ${isSubmitted ? " cursor-not-allowed" : "cursor-pointer"}
                  w-[150px] h-[45px]  bg-[#F3F3F3] hover:bg-[#D9D9D9] font-medium text-black  rounded-sm`}
=======
                  onClick={handleOnClose}
                  className={` cancel-button
                  ${isSubmitted && " cursor-not-allowed"}
                  w-[150px] h-[45px]  bg-[#F3F3F3] hover:bg-[#D9D9D9] font-medium  mr-4 rounded-sm`}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                >
                  Cancel
                </button>
              </DrawerClose>
              <button
                disabled={isSubmitted}
                type="submit"
                className={`
<<<<<<< HEAD
                ${isSubmitted ? " cursor-not-allowed" : "cursor-pointer"}
=======
                ${isSubmitted && " cursor-not-allowed"}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                       w-[150px] h-[45px] px-3 py-2 bg-[#007C85] hover:bg-[#03595B]  text-[#ffff] font-medium  rounded-sm`}
              >
                Submit
              </button>
            </DrawerFooter>
          </form>
        </DrawerContent>
        {isSuccessOpen && (
          <DrawerClose>
            <SuccessModal
              label="Success"
              isAlertOpen={isSuccessOpen}
              toggleModal={setIsSuccessOpen}
              isUpdated={""}
              setIsUpdated={""}
            />
          </DrawerClose>
        )}
      </Drawer>
    </>
  );
};

export default NurseDrawer;
