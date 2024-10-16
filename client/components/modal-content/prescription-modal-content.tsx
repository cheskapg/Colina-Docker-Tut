"use client";
import {
  updatePrescriptionOfPatient,
  createPrescriptionOfPatient,
  addPrescriptionFile,
  fetchPrescriptionFiles,
} from "@/app/api/prescription-api/prescription.api";
import { X } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastAction } from "../ui/toast";
import { useToast } from "../ui/use-toast";

interface Modalprops {
  isEdit: boolean;
  prescriptionData: any;
  setIsUpdated: any;
  label: string;
  isOpen: boolean;
  setErrorMessage: any;
  isModalOpen: (isOpen: boolean) => void;
  onSuccess: () => void;
  onFailed: () => void;
}

export const PrescriptionModalContent = ({
  isEdit,
  prescriptionData,
  label,
  setIsUpdated,
  isOpen,
  setErrorMessage,
  isModalOpen,
  onSuccess,
  onFailed,
}: Modalprops) => {
  const params = useParams<{
    id: any;
    tag: string;
    item: string;
  }>();
  const { toast } = useToast();
  const patientId = params.id.toUpperCase();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
<<<<<<< HEAD
=======
    prescriptionType: prescriptionData.prescriptions_prescriptionType || "",
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    name: prescriptionData.prescriptions_name || "",
    frequency: prescriptionData.prescriptions_frequency || "",
    interval: prescriptionData.prescriptions_interval || "",
    dosage: prescriptionData.prescriptions_dosage || "",
<<<<<<< HEAD
=======
    startDate: prescriptionData.prescriptions_startDate || "",
    endDate: prescriptionData.prescriptions_endDate || "",
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    status: prescriptionData.prescriptions_status || "",
  });
  const [prescriptionFiles, setPrescriptionFiles] = useState<any[]>([]); //
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [fileTypes, setFileTypes] = useState<string[]>([]);
  const [numFilesCanAdd, setNumFilesCanAdd] = useState<number>(5);
  const [selectedFileNames, setSelectedFileNames] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "interval" && (!/^\d*$/.test(value) || parseInt(value) > 12)) {
      return; // Don't update state
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const toggleMaxSizeToast = (): void => {
    toast({
      variant: "destructive",
      title: "File Size Too Big!",
      description: `Total size of selected files exceeds the limit of 15MB!`,
    });
  };
  const toggleMaxFilesToast = (maxFiles: number): void => {
    toast({
      variant: "destructive",
      title: "Maximum Number of Files Exceeded!",
      description: `You can only add ${maxFiles} more file(s). Please try again.`,
    });
  };
  useEffect(() => {
    // Initialize selected file names array
    setSelectedFileNames([]);

    if (prescriptionFiles && prescriptionFiles.length > 0) {
      // Push file names to selectedFileNames array
      for (let file of prescriptionFiles) {
        // Only push the filename if it's defined
        if (file && file.filename) {
          selectedFileNames.push(file.filename);
        }
      }

      console.log(selectedFileNames, "selected file names");
      console.log(prescriptionFiles, "prescriptionFiles");
      const maxAllowedFiles = 5 - selectedFileNames.length;
      setNumFilesCanAdd(maxAllowedFiles);
      // Set selected file names
      setSelectedFileNames(selectedFileNames);
    } else {
      console.log("No files in prescriptionfiles");
      // Optionally, you can clear the selectedFileNames state here
      setSelectedFileNames([]);
    }
  }, [prescriptionFiles, setSelectedFileNames]);
  // for fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPrescriptionFiles(
          prescriptionData.prescriptions_uuid,
<<<<<<< HEAD
          router
=======
          router,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        );

        // Only proceed if response.data is not null or empty
        if (response.data && response.data.length > 0) {
          setPrescriptionFiles(response.data);
          console.log(response.data, "prescription.data");
          const maxAllowedFiles = 5 - prescriptionFiles.length;
          setNumFilesCanAdd(maxAllowedFiles);
          setIsLoading(false);
        }
      } catch (error: any) {
        setError(error.message);
      }
    };

    if (prescriptionData.prescriptions_uuid) {
      fetchData();
    }
  }, [prescriptionData.prescriptions_uuid]);

<<<<<<< HEAD
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
=======

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const MAX_FILE_SIZE_MB = 15;
    if (files) {
      const totalSize = Array.from(files).reduce(
        (acc, file) => acc + file.size,
<<<<<<< HEAD
        0
=======
        0,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
      );
      const totalSizeMB = totalSize / (1024 * 1024); // Convert bytes to MB

      if (totalSizeMB > MAX_FILE_SIZE_MB) {
        toggleMaxSizeToast();
        e.target.value = ""; // Clear the input field
      }
      if (files.length > numFilesCanAdd) {
        toggleMaxFilesToast(numFilesCanAdd);
        e.target.value = ""; // Clear the input field
      }
    }
    if (files && files.length > 0) {
      const newFiles: File[] = [];
      const newFileNames: string[] = [];
      const newFileTypes: string[] = [];

      Array.from(files).forEach((file) => {
        if (file) {
          // Add file, name, and type to arrays
          newFiles.push(file);
          newFileNames.push(file.name);
          newFileTypes.push(file.type.split("/")[1]);
          setSelectedFileNames(newFileNames);
          console.log(selectedFileNames, "selected file names");
          console.log(prescriptionFiles, "prescriptionfiles");
        }
      });

      // Update state variables with arrays

      setSelectedFiles(newFiles);
      setFileNames(newFileNames);
      setFileTypes(newFileTypes);
    } else {
      console.warn("No files selected");
    }
  };
<<<<<<< HEAD
  const handleFrequencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
=======
  const handleDropDownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
<<<<<<< HEAD
=======

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      if (isEdit) {
        await updatePrescriptionOfPatient(
          prescriptionData.prescriptions_uuid,
          formData,
<<<<<<< HEAD
          router
=======
          router,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        );

        // Iterate through each selected file
        if (selectedFiles && selectedFiles.length > 0) {
          // Iterate through each selected file
          for (let i = 0; i < selectedFiles.length; i++) {
            const prescriptionFileFormData = new FormData();
            prescriptionFileFormData.append(
              "prescriptionfile",
              selectedFiles[i],
<<<<<<< HEAD
              fileNames[i]
=======
              fileNames[i],
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
            );

            // Add prescription file
            const addPrescriptionFiles = await addPrescriptionFile(
              prescriptionData.prescriptions_uuid,
<<<<<<< HEAD
              prescriptionFileFormData
=======
              prescriptionFileFormData,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
            );

            console.log(
              `Prescription FILE ${fileNames[i]} added successfully:`,
<<<<<<< HEAD
              addPrescriptionFiles
=======
              addPrescriptionFiles,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
            );
          }
        } else {
          console.warn("No files selected to upload");
        }
        setIsUpdated(true);
        setIsSubmitted(false);
        onSuccess();
        isModalOpen(false);
      } else {
        const prescription = await createPrescriptionOfPatient(
          patientId,
          formData,
<<<<<<< HEAD
          router
=======
          router,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        );
        console.log("Prescription added successfully:", prescription);

        // Iterate through each selected file
        if (selectedFiles.length > 0) {
          for (let i = 0; i < selectedFiles.length; i++) {
            const prescriptionFileFormData = new FormData();
            prescriptionFileFormData.append(
              "prescriptionfile",
              selectedFiles[i],
<<<<<<< HEAD
              fileNames[i]
=======
              fileNames[i],
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
            );

            // Add prescription file
            const addPrescriptionFiles = await addPrescriptionFile(
              prescription.uuid,
<<<<<<< HEAD
              prescriptionFileFormData
=======
              prescriptionFileFormData,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
            );

            console.log(
              `Prescription FILE ${fileNames[i]} added successfully:`,
<<<<<<< HEAD
              addPrescriptionFiles
=======
              addPrescriptionFiles,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
            );
          }
        } else {
          console.warn("No files selected to upload");
        }
        // Reset form data
        setFormData({
<<<<<<< HEAD
=======
          prescriptionType: "",
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
          name: "",
          frequency: "",
          interval: "",
          dosage: "",
<<<<<<< HEAD
=======
          startDate: "",
          endDate: "",
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
          status: "",
        });
        setSelectedFiles([]); // Reset selected files
        onSuccess();
      }
    } catch (error: any) {
      console.error("Error adding Prescription:", error);
      setError("Failed to add Prescription");

      // Handle specific error cases
      if (error.message === "Request failed with status code 409") {
        setErrorMessage("Prescription already exists");
        onFailed();
        setIsSubmitted(false);
        isModalOpen(false);
      } else if (error.message === "Network Error") {
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
    }
  };

  console.log(prescriptionData, "prescriptionData");
  console.log(formData, "formData");
  const [isHovering, setIsHovering] = useState(false);
  const FileUploadWithHover = () => {
    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    return (
      <div
<<<<<<< HEAD
        className="relative"
=======
        className="relative "
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {prescriptionFiles.length === 5 && isEdit ? (
          <div className="">
<<<<<<< HEAD
            <label className="relative h-12 w-full flex justify-center items-center rounded-md cursor-pointer text-center text-[#101828] font-bold mt-[33px] bg-[#daf3f5] border-[#007C85] border-dashed border-2">
              <>
                <Image
                  className="w-7 h-7 mr-1"
=======
            <label className="relative mt-[33px] flex h-12 w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-[#007C85] bg-[#daf3f5] text-center font-bold text-[#101828]">
              <>
                <Image
                  className="mr-1 h-7 w-7"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  width={50}
                  height={50}
                  src={"/svgs/filein.svg"}
                  alt=""
                />
<<<<<<< HEAD
                <div className="flex pb-5 text-nowrap text-[12px]">
=======
                <div className="flex text-nowrap pb-5 text-[12px]">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  <p className="mt-2">Maximum Files Uploaded</p>
                </div>
              </>
            </label>
          </div>
        ) : (
          <div className="">
            <label
              htmlFor="imageUpload"
<<<<<<< HEAD
              className="relative h-12 w-full bg-[#daf3f5] border-[#007C85] border-dashed border-2 flex justify-center items-center rounded-md cursor-pointer text-center text-[#101828] font-bold mt-[31px]"
=======
              className="relative mt-[31px] flex h-12 w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-[#007C85] bg-[#daf3f5] text-center font-bold text-[#101828]"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
            >
              <>
                {selectedFileNames.length > 0 ? (
                  // If files are selected, display filein.svg
                  <Image
<<<<<<< HEAD
                    className="w-7 h-7 mr-1"
=======
                    className="mr-1 h-7 w-7"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    width={50}
                    height={50}
                    src={"/svgs/filein.svg"}
                    alt=""
                  />
                ) : (
                  // If no files are selected, display folder-add.svg
                  <Image
<<<<<<< HEAD
                    className="w-7 h-7 mr-1"
=======
                    className="mr-1 h-7 w-7"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    width={50}
                    height={50}
                    src={"/svgs/folder-add.svg"}
                    alt=""
                  />
                )}
<<<<<<< HEAD
                <div className="flex pb-5 text-nowrap text-[12px]">
                  <p className="mt-2">Upload or Attach Files or</p>
                  <p className="underline decoration-solid text-blue-500 ml-1 mt-2">
                    Browse
                  </p>
                </div>
                <span className="text-[10px] font-normal absolute bottom-2 text-[#667085] ml-10">
=======
                <div className="flex text-nowrap pb-5 text-[12px]">
                  <p className="mt-2">Upload or Attach Files or</p>
                  <p className="ml-1 mt-2 text-blue-500 underline decoration-solid">
                    Browse
                  </p>
                </div>
                <span className="absolute bottom-2 ml-10 text-[10px] font-normal text-[#667085]">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  {selectedFileNames.length === 0 ? (
                    // Display "Maximum File Size: 10MB" if no files are attached
                    <span>Maximum File Size: 15MB</span>
                  ) : (
                    // Display the file name if one file is attached, or the number of files if more than one are attached
                    <span>
                      {selectedFiles.length < 5
                        ? // Display the file name if the number of files is less than or equal to 5
                          selectedFiles.length === 1
                          ? selectedFileNames[0]
                          : `${selectedFiles.length}/${numFilesCanAdd} files attached`
                        : // Display a message indicating that the maximum limit has been reached
                          `Maximum of 5 files added`}
                    </span>
                  )}
                </span>
              </>
            </label>
            <input
              type="file"
              id="imageUpload"
              multiple={true}
              accept=".jpeg,.jpg,.png,.pdf"
              className="hidden"
              name="file"
              onChange={(e) => handleFile(e)}
            />
            {isHovering && selectedFiles.length > 0 && (
<<<<<<< HEAD
              <div className="absolute bg-[#4E4E4E] p-2 w-[290px] text-white rounded-md shadow-md left-0 text-[13px]  ">
=======
              <div className="absolute left-0 w-[290px] rounded-md bg-[#4E4E4E] p-2 text-[13px] text-white shadow-md">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                <ul>
                  {selectedFiles.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };
  return (
    <>
<<<<<<< HEAD
      <div className="w-[676px] h-[484px]">
        {isLoading && isEdit ? (
          // Loading state
          <>
            <div className="bg-[#ffffff] w-full h-[70px] flex flex-col justify-start rounded-md">
              <div className="items-center flex justify-between">
                <h2 className="p-title text-left text-[#071437] pl-10 mt-7"></h2>
=======
      <div className="h-auto flex-col flex relative flex-grow w-[676px]">
        {isLoading && isEdit ? (
          // Loading state
          <>
            <div className="flex h-[70px] w-full flex-col justify-start rounded-md bg-[#ffffff]">
              <div className="flex items-center justify-between">
                <h2 className="p-title mt-7 pl-10 text-left text-[#071437]"></h2>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                <X
                  onClick={() => {
                    isSubmitted ? null : isModalOpen(false);
                  }}
<<<<<<< HEAD
                  className={`
                 ${isSubmitted && " cursor-not-allowed"}
                 w-6 h-6 text-black flex items-center mt-6 mr-9 cursor-pointer`}
                />
              </div>
              <p className="text-sm pl-10 text-gray-600 pb-10 pt-2"></p>
            </div>
            <div className="mb-9 pt-4">
              <div className="h-[380px] md:px-8 mt-5">
                <div className="w-full h-full flex justify-center items-center ">
=======
                  className={` ${isSubmitted && "cursor-not-allowed"} mr-9 mt-6 flex h-6 w-6 cursor-pointer items-center text-black`}
                />
              </div>
              <p className="pb-10 pl-10 pt-2 text-sm text-gray-600"></p>
            </div>
            <div className="mb-9 pt-4">
              <div className="mt-5 h-[380px] md:px-8">
                <div className="flex h-full w-full items-center justify-center">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  <Image
                    src="/imgs/colina-logo-animation.gif"
                    alt="logo"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <form className="" onSubmit={handleSubmit}>
<<<<<<< HEAD
              <div className="bg-[#ffffff] w-full h-[70px] flex flex-col justify-start rounded-md">
                <div className="items-center flex justify-between">
                  <h2 className="p-title text-left text-[#071437] pl-10 mt-7">
=======
              <div className="flex h-[70px] w-full flex-col justify-start rounded-md bg-[#ffffff]">
                <div className="flex items-center justify-between">
                  <h2 className="p-title mt-7 pl-10 text-left text-[#071437]">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    {isEdit ? "Update" : "Add"} Prescription Schedule
                  </h2>
                  <X
                    onClick={() => isModalOpen(false)}
<<<<<<< HEAD
                    className="w-6 h-6 text-black flex items-center mt-6 mr-9 cursor-pointer"
                  />
                </div>
                <p className="text-sm pl-10 text-gray-600 pb-10 pt-2">
                  Submit your log details.
                </p>
              </div>
              <div className=" mb-9 pt-4">
                <div className="w-full max-h-[300px] md:px-10 mt-5">
                  <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-md font-bold leading-6 text-gray-900 required-field"
                      >
                        MEDICINE NAME
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          required
                          className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          placeholder="input medicine name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-md font-bold leading-6 text-gray-900 required-field"
                      >
                        FREQUENCY
=======
                    className="mr-9 mt-6 flex h-6 w-6 cursor-pointer items-center text-black"
                  />
                </div>
                <p className="pb-10 pl-10 pt-2 text-sm text-gray-600">
                  Submit your log details.
                </p>
              </div>
              <div className="mb-9 pt-4">
                <div className="mt-5 max-h-[300px] w-full md:px-10">
                  <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="last-name"
                        className="text-md required-field block font-bold leading-6 text-gray-900"
                      >
                        Type
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      </label>
                      <div className="mt-2.5 flex">
                        <select
                          required
<<<<<<< HEAD
                          className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 cursor-pointer"
                          name="frequency"
                          value={formData.frequency}
                          onChange={handleFrequencyChange}
                        >
                          <option value="">Select Frequency</option>
                          <option value="Once Daily">Once Daily</option>
                          <option value="Twice Daily">Twice Daily</option>
                          <option value="Thrice Daily">Thrice Daily</option>
                        </select>
                        <Image
                          className="absolute mt-4   ml-[255px] pointer-events-none"
=======
                          className="block h-12 w-full cursor-pointer rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          name="prescriptionType"
                          value={formData.prescriptionType}
                          onChange={handleDropDownChange}
                        >
                          <option value="" disabled>
                            Select Type
                          </option>
                          <option value="ASCH">Scheduled</option>
                          <option value="PRN">PRN</option>
                        </select>
                        <Image
                          className="pointer-events-none absolute ml-[255px] mt-4"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                          width={20}
                          height={20}
                          src={"/svgs/chevron-up.svg"}
                          alt={""}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="first-name"
<<<<<<< HEAD
                        className="block text-md font-bold leading-6 text-gray-900 required-field"
=======
                        className="text-md required-field block font-bold leading-6 text-gray-900"
                      >
                        MEDICINE NAME
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          required
                          className="block h-12 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          placeholder="input medicine name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div
                      className={`${formData.prescriptionType === "PRN" ? "" : "hidden"}`}
                    >
                      <label
                        htmlFor="first-name"
                        className="text-md required-field block font-bold leading-6 text-gray-900"
                      >
                        START DATE
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="date"
                          required={formData.prescriptionType === "PRN"}
                          className="block h-12 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          placeholder="input medicine name"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div
                      className={`${formData.prescriptionType === "PRN" ? "" : "hidden"}`}
                    >
                      <label
                        htmlFor="first-name"
                        className="text-md required-field block font-bold leading-6 text-gray-900"
                      >
                        END DATE
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="date"
                          required={formData.prescriptionType === "PRN"}
                          className="block h-12 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          placeholder="input medicine name"
                          name="endDate"
                          value={formData.endDate}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="last-name"
                        className="text-md required-field block font-bold leading-6 text-gray-900"
                      >
                        FREQUENCY
                      </label>
                      <div className="mt-2.5 flex">
                        <select
                          required
                          className="block h-12 w-full cursor-pointer rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          name="frequency"
                          value={formData.frequency}
                          onChange={handleDropDownChange}
                        >
                          <option value="">Select Frequency</option>
                          <option value="Once Daily">Once Daily</option>
                          <option value="Twice Daily">Twice Daily</option>
                          <option value="Thrice Daily">Thrice Daily</option>
                        </select>
                        <Image
                          className="pointer-events-none absolute ml-[255px] mt-4"
                          width={20}
                          height={20}
                          src={"/svgs/chevron-up.svg"}
                          alt={""}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="first-name"
                        className="text-md required-field block font-bold leading-6 text-gray-900"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      >
                        INTERVAL
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          required
<<<<<<< HEAD
                          className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
=======
                          className="block h-12 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                          placeholder="input interval"
                          name="interval"
                          value={formData.interval}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
<<<<<<< HEAD
                        className="block text-md font-bold leading-6 text-gray-900 required-field"
=======
                        className="text-md required-field block font-bold leading-6 text-gray-900"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      >
                        DOSAGE
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          required
<<<<<<< HEAD
                          className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400t sm:text-sm sm:leading-6"
=======
                          className="placeholder:text-gray-400t block h-12 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                          placeholder="input dosage"
                          name="dosage"
                          value={formData.dosage}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="status"
<<<<<<< HEAD
                        className="block text-md font-bold leading-6 text-gray-900 required-field pb-2"
=======
                        className="text-md required-field block pb-2 font-bold leading-6 text-gray-900"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      >
                        STATUS
                      </label>
                      <div className="relative">
                        <select
                          id="status"
<<<<<<< HEAD
                          className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          name="status"
                          value={formData.status}
                          onChange={handleStatusChange}
=======
                          className="block h-12 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          name="status"
                          value={formData.status}
                          onChange={handleDropDownChange}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                          required
                        >
                          <option value="">Select Status</option>
                          <option value="active">ACTIVE</option>
                          <option value="inactive">INACTIVE</option>
                        </select>
                        {/* <
                    className="absolute top-0 right-0 mt-3 mr-3 pointer-events-none"
                    src="svgs/chevron-up.svg"
                    alt="Dropdown Arrow"
                    style={{ width: '1rem', height: '1rem' }}
                      /> */}
                        <Image
<<<<<<< HEAD
                          className="absolute top-0 right-0 mt-3 mr-3 pointer-events-none"
=======
                          className="pointer-events-none absolute right-0 top-0 mr-3 mt-3"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                          width={20}
                          height={20}
                          src={"/svgs/chevron-up.svg"}
                          alt={""}
                        />
                      </div>
                    </div>
                    <div className="filehover">
                      <FileUploadWithHover />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
<<<<<<< HEAD
                <div className="justify-end flex mr-10">
=======
                <div className="mr-10 flex justify-end">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  <button
                    onClick={() => isModalOpen(false)}
                    disabled={isSubmitted}
                    type="button"
<<<<<<< HEAD
                    className={`
                ${isSubmitted && " cursor-not-allowed"}
                w-[150px] h-[45px]  bg-[#F3F3F3] hover:bg-[#D9D9D9] font-medium text-black  mr-4 rounded-sm `}
=======
                    className={` ${isSubmitted && "cursor-not-allowed"} mr-4 h-[45px] w-[150px] rounded-sm bg-[#F3F3F3] font-medium text-black hover:bg-[#D9D9D9]`}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  >
                    Cancel
                  </button>
                  <button
                    disabled={isSubmitted}
                    type="submit"
<<<<<<< HEAD
                    className={`
                      ${isSubmitted && " cursor-not-allowed"}
                      w-[150px] h-[45px] px-3 py-2 bg-[#007C85] hover:bg-[#03595B]  text-[#ffff] font-medium  rounded-sm`}
=======
                    className={` ${isSubmitted && "cursor-not-allowed"} h-[45px] w-[150px] rounded-sm bg-[#007C85] px-3 py-2 font-medium text-[#ffff] hover:bg-[#03595B]`}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  >
                    {isEdit ? "Update" : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
};
