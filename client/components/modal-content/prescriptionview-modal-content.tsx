import { X } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  fetchPrescriptionFiles,
  deletePrescriptionFile,
  addPrescriptionFile,
  getCurrentPrescriptionFileCountFromDatabase,
} from "@/app/api/prescription-api/prescription.api";
import Image from "next/image";
import { NofileviewPrescriptionsModalContent } from "./nofileview-prescriptions-modal-content";
import { SuccessModal } from "../shared/success";
import { useToast } from "@/components/ui/use-toast";
import Modal from "../reusable/modal";
import { ConfirmationModal } from "./confirmation-modal-content";

interface ModalProps {
  prescriptionData: any;
  isView: boolean;
  isModalOpen: (isOpen: boolean) => void;
}

interface PrescriptionFile {
  file: any; // Assuming file property exists for the key
  filename: string;
  data: Uint8Array;
  fileId: string;
}
export const PrescriptionViewModalContent = ({
  isView,
  prescriptionData,
  isModalOpen,
}: ModalProps) => {
  const onSuccess = () => {
    setIsSuccessOpen(true);
<<<<<<< HEAD

    // isModalOpen(false);
=======
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  };

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [prescriptionUuid, setPrescriptionUuid] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [PrescriptionFiles, setPrescriptionsFiles] = useState<
    PrescriptionFile[]
  >([]);
  const [fileName, setFileName] = useState("");
  const [fileData, setFileData] = useState<Uint8Array>(new Uint8Array());
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isNoFileModalOpen, setIsNoFileModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

  const handleNoFileModalClose = (isModalOpen: boolean) => {
    setIsNoFileModalOpen(isModalOpen);
    setIsLoading(true);
    console.log("isNoFileModalOpen HANDLE", isNoFileModalOpen);
  };

  const isConfirmModalOpen = (deleteModalOpen: boolean) => {
    setConfirmDelete(deleteModalOpen);
    if (deleteModalOpen) {
      document.body.style.overflow = "hidden";
    } else if (!deleteModalOpen) {
      document.body.style.overflow = "visible";
    }
  };
  const downloadImage = () => {
    // Create a Blob from the base64 string
    const byteCharacters = atob(base64String);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: `image/${fileType}` });

    // Create a temporary URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a link element and simulate a click on it
    const link = document.createElement("a");
    link.href = url;
    link.download = `image.${fileType}`;
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const toggleDeleteModal = () => {
    setDeleteModalOpen(!deleteModalOpen);
  };

  const handleDeleteClick = async () => {
    console.log("Delete button clicked");
    console.log("Selected File UUID:", selectedFileUUID);
    setIsSubmitted(true);
    try {
      // Check if there is a selected file UUID to delete
      if (selectedFileUUID) {
        // Call the delete function with the prescription and selectedFileUUID
        await deletePrescriptionFile(prescriptionUuid, selectedFileUUID);

        console.log("File deleted successfully");

        // Reset the selected file UUID
        setSelectedFileUUID("");

        // Close the delete modal
        setDeleteModalOpen(false);
        onSuccess();
      } else {
        console.warn("No files selected for deletion");
      }
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.error("Error deleting file:", error);
      // Optionally, set error state to display an error message to the user
      setError("Failed to delete file");
    }
    setIsSubmitted(false);
  };
  const [selectedFileUUID, setSelectedFileUUID] = useState("");
  const [fileIndex, setFileIndex] = useState(0);
  const [currentFile, setCurrentFile] = useState<PrescriptionFile>(
<<<<<<< HEAD
    {} as PrescriptionFile
=======
    {} as PrescriptionFile,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const prevFile = () => {
    if (fileIndex > 0) {
      setFileIndex(fileIndex - 1);
      setCurrentFile(PrescriptionFiles[fileIndex - 1]);
    }
  };
  const nextFile = () => {
    if (fileIndex < PrescriptionFiles.length - 1) {
      setFileIndex(fileIndex + 1);
      setCurrentFile(PrescriptionFiles[fileIndex + 1]);
    }
  };
  const defaultPrescriptionFiles = Array.isArray(PrescriptionFiles)
    ? PrescriptionFiles
    : [];
  const [base64String, setBase64String] = useState("");
  const [fileType, setFileType] = useState<string>("");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [blobUrl, setBlobUrl] = useState("");

  //switching to through previews
  useEffect(() => {
    if (PrescriptionFiles && PrescriptionFiles.length > 0) {
      const file = PrescriptionFiles[fileIndex];
      setCurrentFile(file);
      setFileName(file.filename);
      setFileData(file.data);

      if (file.data) {
        const newBase64String = Buffer.from(file.data).toString("base64");
        setBase64String(newBase64String);

        const newFileType = file.filename.split(".").pop();
        setFileType(newFileType as string);

<<<<<<< HEAD
         // Create a Blob URL for PDF and images
         const binaryString = window.atob(newBase64String);
         const len = binaryString.length;
         const bytes = new Uint8Array(len);
         for (let i = 0; i < len; i++) {
           bytes[i] = binaryString.charCodeAt(i);
         }
 
         let mimeType;
         if (newFileType === "pdf") {
           mimeType = "application/pdf";
         } else if (["png", "jpg", "jpeg", "gif"].includes(newFileType as string)) {
           mimeType = `image/${newFileType}`;
         }
 
         if (mimeType) {
           const blob = new Blob([bytes], { type: mimeType });
           const url = URL.createObjectURL(blob);
           setBlobUrl(url);
         }
=======
        // Create a Blob URL for PDF and images
        const binaryString = window.atob(newBase64String);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }

        let mimeType;
        if (newFileType === "pdf") {
          mimeType = "application/pdf";
        } else if (
          ["png", "jpg", "jpeg", "gif"].includes(newFileType as string)
        ) {
          mimeType = `image/${newFileType}`;
        }

        if (mimeType) {
          const blob = new Blob([bytes], { type: mimeType });
          const url = URL.createObjectURL(blob);
          setBlobUrl(url);
        }
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
      }
    }
  }, [fileIndex, PrescriptionFiles]);
  //fetching files from database
  useEffect(() => {
    setIsSubmitted(true);
    const fetchData = async () => {
      setPrescriptionUuid(prescriptionData.prescriptions_uuid);
      try {
        const response = await fetchPrescriptionFiles(
          prescriptionData.prescriptions_uuid,
<<<<<<< HEAD
          router
=======
          router,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        );

        if (response.data && response.data.length > 0) {
          setPrescriptionsFiles(response.data);
          console.log(response.data, "Prescriptions Data");
          setCurrentFile(response.data[0]);
          setFileIndex(0);
          const maxAllowedFiles = 5 - PrescriptionFiles.length;
          setNumFilesCanAdd(maxAllowedFiles);
          setIsLoading(false);
        }
        if (defaultPrescriptionFiles?.length === 0) {
          setIsNoFileModalOpen(true);
          setIsLoading(false);
        }
      } catch (error: any) {
        setError(error.message);
      }
    };

    if (prescriptionData.prescriptions_uuid) {
      fetchData();
    }
    setIsSubmitted(false);
  }, [
    prescriptionData.prescriptions_uuid,
    router,
    deleteModalOpen,
    isNoFileModalOpen,
    isSuccessOpen,
  ]);

  // Define a state to track the selected filenames
  const [numFilesCanAdd, setNumFilesCanAdd] = useState<number>(5);
  const [selectedFileNames, setSelectedFileNames] = useState<string[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [fileTypes, setFileTypes] = useState<string[]>([]);
  const [selectedFiles, setSelectedPrescriptionFiles] = useState<File[]>([]);
  const { toast } = useToast();
  const toggleMaxSizeToast = (): void => {
    setIsSubmitted(false);
    toast({
      variant: "destructive",
      title: "File Size Too Big!",
      description: `Total size of selected files exceeds the limit of 15MB!`,
    });
  };
  const toggleMaxFilesToast = (maxFiles: number): void => {
    setIsSubmitted(false);
    toast({
      variant: "destructive",
      title: "Maximum Number of Files Exceeded!",
      description: `You can only add ${maxFiles} more file(s). Please try again.`,
    });
  };
  const toggleNoFilesToast = (): void => {
    setIsSubmitted(false);
    toast({
      variant: "warning",
      title: "No Files Uploaded",
      description: `Please try again.`,
    });
  };
  const toggleFullFilesToast = (): void => {
    setIsSubmitted(false);
    toast({
      variant: "warning",
      title: "Maximum Files Uploaded",
      description:
        "You have already uploaded 5 files. Delete some files to update.",
    });
  };
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const MAX_FILE_SIZE_MB = 15;

    const MAX_NUM_FILES = 5;
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

          if (files && files.length > 0) {
            // Push file names to selectedFileNames array
            if (file && file.name) {
              selectedFileNames.push(file.name);
            }

            console.log(selectedFileNames, "selected file names");
            console.log(PrescriptionFiles, "PrescriptionFiles");

            // Set selected file names
            setSelectedFileNames(selectedFileNames);
          }
          // You can handle base64 conversion here if needed
        }
      });

      // Update state variables with arrays

      setSelectedPrescriptionFiles(newFiles);
      setFileNames(newFileNames);
      setFileTypes(newFileTypes);
    } else {
      console.warn("No files selected");
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitted(true);
    e.preventDefault();
    const getUuid = prescriptionUuid;

    console.log("submit clicked");

    if (PrescriptionFiles.length === 5) {
      toggleFullFilesToast();
      return;
    }
    if (getUuid) {
      const currentFileCount =
        await getCurrentPrescriptionFileCountFromDatabase(getUuid);
      const maxAllowedFiles = 5 - currentFileCount;
      console.log("FILES TO ADD", maxAllowedFiles);

      if (selectedFiles.length > maxAllowedFiles) {
        toggleMaxFilesToast(maxAllowedFiles);
        return;
      }
    }

    try {
      console.log(getUuid, "getUuid");
      // Iterate through each selected file
      if (selectedFiles && selectedFiles.length > 0) {
        setIsLoading(true);
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

          // Add  file
          const addPrescriptionFiles = await addPrescriptionFile(
            getUuid,
<<<<<<< HEAD
            prescriptionFileFormData
          );
          console.log(
            `Prescription FILE ${fileNames[i]} added successfully:`,
            addPrescriptionFiles
=======
            prescriptionFileFormData,
          );
          console.log(
            `Prescription FILE ${fileNames[i]} added successfully:`,
            addPrescriptionFiles,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
          );
        }
        setSelectedFileNames([]);
        setSelectedPrescriptionFiles([]);
        onSuccess();

        // Call the onSuccess callback function
      } else {
        console.warn("No files selected to upload");
        toggleNoFilesToast();
      }
    } catch (error) {
      console.error("Error adding Prescription:", error);
      // setError("Failed to add prescription");
    } finally {
      // Update loading state after all files are processed
      setIsLoading(false);
      setIsSubmitted(false);
    }
    setIsSubmitted(false);
  };
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
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-[220px]">
          <div
<<<<<<< HEAD
            className={`w-full flex flex-row ${
=======
            className={`flex w-full flex-row ${
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              defaultPrescriptionFiles.length === 5
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
<<<<<<< HEAD
            <p className="border-2 rounded-l-md text-gray-400 px-2 py-1 text-[13px] text-nowrap w-full ">
              {selectedFiles.length > 0
                ? `${selectedFiles.length}/${numFilesCanAdd}selected`
                : defaultPrescriptionFiles.length < 5
                ? "Choose files to upload"
                : "Max Files Uploaded"}
=======
            <p className="w-full text-nowrap rounded-l-md border-2 px-2 py-1 text-[13px] text-gray-400">
              {selectedFiles.length > 0
                ? `${selectedFiles.length}/${numFilesCanAdd}selected`
                : defaultPrescriptionFiles.length < 5
                  ? "Choose files to upload"
                  : "Max Files Uploaded"}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
            </p>
            <label
              htmlFor="fileupload"
              className={` ${
                defaultPrescriptionFiles.length === 5
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
<<<<<<< HEAD
              }text-[13px] bg-[#007C85] px-2 py-1 text-white rounded-r-md flex justify-center border-2 border-[#007C85]`}
=======
              }text-[13px] flex justify-center rounded-r-md border-2 border-[#007C85] bg-[#007C85] px-2 py-1 text-white`}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
            >
              Browse
            </label>

            <input
              type="file"
              id="fileupload"
              multiple={true}
              accept=".jpeg,.jpg,.png,.pdf"
              className="hidden"
              name="file"
              disabled={defaultPrescriptionFiles.length === 5}
              onChange={(e) => handleFile(e)}
              max={5}
            />
            {isHovering && selectedFiles.length > 0 && (
<<<<<<< HEAD
              <div className="absolute bg-[#4E4E4E] p-2 w-[220px] text-[13px]   mt-[30px] text-white rounded-md shadow-md left-0">
=======
              <div className="absolute left-0 mt-[30px] w-[220px] rounded-md bg-[#4E4E4E] p-2 text-[13px] text-white shadow-md">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                <ul>
                  {selectedFiles.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {defaultPrescriptionFiles?.length === 0 && isLoading === false ? (
        <NofileviewPrescriptionsModalContent
          prescriptionUuid={prescriptionUuid}
          onClose={handleNoFileModalClose}
          isModalOpen={(isOpen: boolean): void => {
            isModalOpen(isOpen);
          }}
          onSuccess={onSuccess}
        />
      ) : (
<<<<<<< HEAD
        <div className="w-[676px] h-[590px]">
          {isLoading ? (
            // Loading state
            <>
              <div className="bg-[#ffffff] w-full h-[70px] flex flex-col justify-start rounded-md">
                <div className="items-center flex justify-between">
                  <h2 className="p-title text-left text-[#071437] pl-10 mt-7"></h2>
                  <X
                    onClick={() => isModalOpen(false)}
                    className="w-6 h-6 text-black flex items-center mt-6 mr-9"
                  />
                </div>
                <p className="text-sm pl-10 text-gray-600 pb-10 pt-2"></p>
              </div>
              <div className="mb-9 pt-4">
                <div className="h-[380px] md:px-8 mt-5">
                  <div className="w-full h-full flex justify-center items-center ">
=======
        <div className="h-[590px] w-[676px]">
          {isLoading ? (
            // Loading state
            <>
              <div className="flex h-[70px] w-full flex-col justify-start rounded-md bg-[#ffffff]">
                <div className="flex items-center justify-between">
                  <h2 className="p-title mt-7 pl-10 text-left text-[#071437]"></h2>
                  <X
                    onClick={() => isModalOpen(false)}
                    className="mr-9 mt-6 flex h-6 w-6 items-center text-black"
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
<<<<<<< HEAD
              <div className="bg-[#ffffff] w-full h-[70px] flex flex-col justify-start rounded-md">
                <div className="items-center flex justify-between">
                  <h2 className="p-title text-left text-[#071437] pl-10 mt-7">
=======
              <div className="flex h-[70px] w-full flex-col justify-start rounded-md bg-[#ffffff]">
                <div className="flex items-center justify-between">
                  <h2 className="p-title mt-7 pl-10 text-left text-[#071437]">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    View Prescription
                  </h2>
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
                <p className="text-sm pl-10 text-gray-600 pb-10 pt-2">
=======
                    className={` ${isSubmitted && "cursor-not-allowed"} mr-9 mt-6 flex h-6 w-6 cursor-pointer items-center text-black`}
                  />
                </div>
                <p className="pb-10 pl-10 pt-2 text-sm text-gray-600">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  Document Files
                </p>
              </div>
              <form className="" onSubmit={handleSubmit}>
                <div className="mb-9 pt-4">
<<<<<<< HEAD
                  <div className="h-[380px] md:px-8 mt-5">
                    <div className="even:bg-gray-50 cursor-pointer">
                      {currentFile && (
                        <div className="w-full max-w-xl flex justify-between gap-4">
=======
                  <div className="mt-5 h-[380px] md:px-8">
                    <div className="cursor-pointer even:bg-gray-50">
                      {currentFile && (
                        <div className="flex w-full max-w-xl justify-between gap-4">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                          <div
                            style={{
                              overflow: "scroll",
                              width: "400px",
                              height: "350px",
                            }}
                          >
                            {fileType === "pdf" ? (
                              <iframe
                                src={blobUrl}
                                width="600px"
                                height="550px"
<<<<<<< HEAD
                                className="shadow-md rounded-lg"
=======
                                className="rounded-lg shadow-md"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                                title="PDF Document"
                                onClick={toggleModal}
                                onLoad={(e) => {}}
                              ></iframe>
                            ) : (
                              <Image
                                alt="file image"
                                width="600"
                                height="550"
                                onClick={toggleModal}
                                src={blobUrl}
                              />
                            )}
                          </div>
<<<<<<< HEAD
                          <div className="filehover ">
=======
                          <div className="filehover">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                            <FileUploadWithHover />
                            {defaultPrescriptionFiles.map(
                              (file: PrescriptionFile, index) => (
                                <div
<<<<<<< HEAD
                                  className="flex justify-center ml-1 px-1 max-w-[220px] w-full bg-white rounded-md border-2 mt-4 hover:border-[#686868] text-overflow truncate cursor-pointer"
=======
                                  className="text-overflow ml-1 mt-4 flex w-full max-w-[220px] cursor-pointer justify-center truncate rounded-md border-2 bg-white px-1 hover:border-[#686868]"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                                  key={index}
                                  onClick={() => {
                                    setFileIndex(index);
                                    setCurrentFile(file);
                                  }}
                                >
<<<<<<< HEAD
                                  <h2 className="text-[12px] px-1 truncate text-gray-400 py-1">
=======
                                  <h2 className="truncate px-1 py-1 text-[12px] text-gray-400">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                                    {file.filename}
                                  </h2>
                                  {/* Delete button for each file */}
                                  <X
                                    onClick={(e) => {
                                      setSelectedFileUUID(file.fileId);
                                      console.log("Delete button clicked");
                                      console.log(
                                        "File UUID:",
                                        file.fileId,
<<<<<<< HEAD
                                        selectedFileUUID
                                      );
                                      toggleDeleteModal();
                                    }}
                                    className="w-3 h-3 text-gray-400 flex items-center mt-[6px] mr-2"
                                  />
                                </div>
                              )
=======
                                        selectedFileUUID,
                                      );
                                      toggleDeleteModal();
                                    }}
                                    className="mr-2 mt-[6px] flex h-3 w-3 items-center text-gray-400"
                                  />
                                </div>
                              ),
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Modal */}
                    {modalOpen && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
<<<<<<< HEAD
                        <div className="w-full h-full rounded-lg flex items-center justify-center">
                          <button
                            type="button"
                            className="absolute top-0 left-0 m-4 ml-10 text-white hover:underline flex text-[20px]"
=======
                        <div className="flex h-full w-full items-center justify-center rounded-lg">
                          <button
                            type="button"
                            className="absolute left-0 top-0 m-4 ml-10 flex text-[20px] text-white hover:underline"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                          >
                            <Image
                              className="mr-2"
                              src="/svgs/print.svg"
                              alt="Icon"
                              width={30}
                              height={30}
                            />
                            Print
                          </button>
                          <button
                            type="button"
<<<<<<< HEAD
                            className="absolute top-0 left-0 m-4 ml-36 text-white hover:underline flex text-[20px]"
=======
                            className="absolute left-0 top-0 m-4 ml-36 flex text-[20px] text-white hover:underline"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                            onClick={downloadImage}
                          >
                            <Image
                              className="mr-2"
                              src="/svgs/download.svg"
                              alt="Icon"
                              width={30}
                              height={30}
                            />
                            Download
                          </button>
                          <button
<<<<<<< HEAD
                            className="absolute top-0 right-0 m-4 text-white hover:underline text-[20px]"
=======
                            className="absolute right-0 top-0 m-4 text-[20px] text-white hover:underline"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                            onClick={toggleModal}
                          >
                            Close
                          </button>
                          <Image
                            alt="Document Full Preview"
                            width={1500}
                            height={1200}
                            src={`data:image/${fileType};base64,${base64String}`}
                          />
                        </div>
                      </div>
                    )}
                    {deleteModalOpen && (
                      <Modal
                        content={
                          <ConfirmationModal
                            uuid={selectedFileUUID}
                            setConfirm={setDeleteModalOpen}
                            label="Delete"
                            handleFunction={(e) => {
                              handleDeleteClick();
                            }}
                            isSubmitted={isSubmitted}
                          />
                        }
                        isModalOpen={isConfirmModalOpen}
                      />
                    )}

<<<<<<< HEAD
                    <div className="flex space-x-4 mt-4 ml-[115px] text-[15px]">
                      {fileIndex > 0 && (
                        <button
                          type="button"
                          className="w-[80px] h-[30px] text-blue-500 bg-white-500 border-2 border-blue-500"
=======
                    <div className="ml-[115px] mt-4 flex space-x-4 text-[15px]">
                      {fileIndex > 0 && (
                        <button
                          type="button"
                          className="bg-white-500 h-[30px] w-[80px] border-2 border-blue-500 text-blue-500"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                          onClick={prevFile}
                        >
                          Previous
                        </button>
                      )}
                      {fileIndex < PrescriptionFiles.length - 1 && (
                        <button
                          type="button"
                          onClick={nextFile}
<<<<<<< HEAD
                          className="w-[80px] h-[30px] text-white bg-blue-500 hover:bg-blue-700"
=======
                          className="h-[30px] w-[80px] bg-blue-500 text-white hover:bg-blue-700"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                        >
                          Next
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div>
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
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              {/* {toast()} */}
            </>
          )}
        </div>
      )}
      {isSuccessOpen && (
        <SuccessModal
          label={selectedFileUUID !== "" ? "deleted" : "submitted"}
          isAlertOpen={isSuccessOpen}
          toggleModal={setIsSuccessOpen}
          isUpdated={isUpdated}
          setIsUpdated={setIsUpdated}
        />
      )}
    </div>
  );
};
