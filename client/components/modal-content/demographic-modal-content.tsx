"use client";
import { fetchCountryList } from "@/app/api/country-api/countryList.api";
import { addPatient } from "@/app/api/patients-api/patientList.api";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastAction } from "../ui/toast";
import { useToast } from "../ui/use-toast";
import { addPatientProfileImage } from "@/app/api/patients-api/patientProfileImage.api";
<<<<<<< HEAD
=======
import { cn } from "@/lib/utils";
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
interface Modalprops {
  label: string;
  isOpen: boolean;
  isModalOpen: (isOpen: boolean) => void;
  setErrorMessage: any;
  onSuccess: () => void;
  onFailed: () => void;
}
<<<<<<< HEAD
=======

type EmergencyContact = {
  name: string;
  patientRelationship: string;
  phoneNumber: string;
  email: string;
};
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
interface UserIcon {
  file: any; // Assuming file property exists for the key
  filename: string;
  data: Uint8Array;
  img_uuid: string;
}
export const DemographicModalContent = ({
  label,
  isOpen,
  isModalOpen,
  setErrorMessage,
  onSuccess,
  onFailed,
}: Modalprops) => {
  const { toast } = useToast();
  const [selectedCodeStatus, setSelectedCodeStatus] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [countryList, setCountryList] = useState<any[]>([]);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
<<<<<<< HEAD
=======
  const [isEmergency, setIsEmergency] = useState(false);
  const [contact1, setContact1] = useState(false);
  const [contact2, setContact2] = useState(false);
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    gender: "",
    age: "",
    dateOfBirth: "",
    phoneNo: "",
    address1: "",
    city: "",
    address2: "",
    state: "",
    country: "",
    zip: "",
<<<<<<< HEAD
    admissionDate: "",
    codeStatus: "",
    email: "",
  });

=======
    admissionDate: new Date().toISOString().slice(0, 10),
    codeStatus: "",
    email: "",
    height: "",
    weight: "",
    mobility: "",
    dietaryRestriction: "",
    admissionStatus: "",
    emergencyContacts: [
      {
        name: "",
        patientRelationship: "",
        phoneNumber: "",
        email: "",
      },
    ],
  });

  useEffect(() => {
    if (
      formData.emergencyContacts[1] != null ||
      formData.emergencyContacts[1] != undefined
    ) {
      setContact1(true);
    }
    if (
      formData.emergencyContacts[2] != null ||
      formData.emergencyContacts[2] != undefined
    ) {
      setContact2(true);
    }
    if (
      formData.emergencyContacts[1]?.name == "" &&
      formData.emergencyContacts[1]?.patientRelationship == "" &&
      formData.emergencyContacts[1]?.phoneNumber == "" &&
      formData.emergencyContacts[1]?.email == ""
    ) {
      setContact1(false);
    }
    if (
      formData.emergencyContacts[2]?.name == "" &&
      formData.emergencyContacts[2]?.patientRelationship == "" &&
      formData.emergencyContacts[2]?.phoneNumber == "" &&
      formData.emergencyContacts[2]?.email == ""
    ) {
      setContact2(false);
    }
  }, [formData.emergencyContacts]);

  console.log(contact1, "contact1");
  console.log(contact2, "contact2");

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "age" && !/^\d*$/.test(value)) {
      return; // Don't update state
    }
<<<<<<< HEAD
=======
    if (name === "dateOfBirth") {
      const calculateAge = (dateOfBirth: string) => {
        if (!dateOfBirth) {
          return "0";
        }
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }
        return age.toString();
      };

      setFormData((prevData) => ({
        ...prevData,
        age: calculateAge(value),
      }));
    }

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    // Call the addPatient API function here
    e.preventDefault();
    setIsSubmitted(true);
    try {
      const patientList = await addPatient(formData, router);
      console.log("Patient added successfully:", patientList);
      // Optionally, you can reset the form data after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        middleName: "",
        gender: "",
        age: "",
        dateOfBirth: "",
        phoneNo: "",
        address1: "",
        city: "",
        address2: "",
        state: "",
        country: "",
        zip: "",
        admissionDate: "",
        codeStatus: "",
        email: "",
<<<<<<< HEAD
=======
        height: "",
        weight: "",
        mobility: "",
        dietaryRestriction: "",
        admissionStatus: "",
        emergencyContacts: [],
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
      });
      const getUuid = patientList.uuid;
      console.log("patientList UUID:", getUuid);
      if (selectedFiles && selectedFiles.length > 0) {
        // Iterate through each selected file
        for (let i = 0; i < selectedFiles.length; i++) {
          const userIconFormData = new FormData();
          userIconFormData.append(
            "profileimage",
            selectedFiles[i],
<<<<<<< HEAD
            fileNames[i]
=======
            fileNames[i],
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
          );

          // Add lab file
          const addUserIcon = await addPatientProfileImage(
            getUuid,
<<<<<<< HEAD
            userIconFormData
=======
            userIconFormData,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
          );

          console.log(
            `Icon FILE ${fileNames[i]} added successfully:`,
<<<<<<< HEAD
            addUserIcon
=======
            addUserIcon,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
          );
        }
      } else {
        console.warn("No files selected to upload");
      }
      onSuccess();
      isModalOpen(false);
    } catch (error: any) {
      if (error.message === "Patient already exist") {
        setErrorMessage("Patient already exist");
        onFailed();
        isModalOpen(false);
        console.log("conflict error");
      }
      console.log(error.message);
      setError("Failed to add Patient");
    }
    setIsSubmitted(false);
  };

  const handleCountryChange = (countryId: string) => {
    setFormData((prevData) => ({
      ...prevData,
      country: countryId,
    }));
  };

  const handleGenderChange = (gender: string) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: gender,
    }));
  };

<<<<<<< HEAD
  const handleCodeStatusChange = (codeStatus: string) => {
    setFormData((prevData) => ({
      ...prevData,
      codeStatus: codeStatus,
=======
  const handleCodeStatusChange = (status: string) => {
    setFormData((prevData) => ({
      ...prevData,
      codeStatus: status,
    }));
  };
  const handleAdmissionStatusChange = (status: string) => {
    setFormData((prevData) => ({
      ...prevData,
      admissionStatus: status,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
    }));
  };
  console.log(error, "error");
  // Define a state to track the selected filenames
  const [selectedFileNames, setSelectedFileNames] = useState<string[]>([]);
  const [iconFile, seticonFile] = useState<any>(); //

  const [selectedFiles, setSelectedLabFiles] = useState<File[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [fileTypes, setFileTypes] = useState<string[]>([]);

  const toggleMaxSizeToast = (): void => {
    setIsSubmitted(false);
    toast({
      variant: "destructive",
      title: "File Size Too Big!",
      description: `Total size of selected files exceeds the limit of 15MB!`,
    });
  };
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSubmitted(true);
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
          console.log(iconFile, "iconFile iconFile iconFile");
          // Set selected file names
          setSelectedFileNames(newFileNames);
          console.log(selectedFileNames, "selected file names");
          // You can handle base64 conversion here if needed
        }
      });

      // Update state variables with arrays

      setSelectedLabFiles(newFiles);
      setFileNames(newFileNames);
      setFileTypes(newFileTypes);
    } else {
      console.warn("No files selected");
    }
    setIsSubmitted(false);
  };
  useEffect(() => {
    // Initialize selected file names array
    setSelectedFileNames([]);
    if (iconFile > 0) {
      selectedFileNames.push(iconFile.filename);
      console.log(selectedFileNames, "selected file names");
      console.log(iconFile, "iconFile iconFile iconFile");
      // Set selected file names
      setSelectedFileNames(selectedFileNames);
    } else {
      // Log a message when there are no files in iconFile
      console.log("No files in iconFile");
      // Optionally, you can clear the selectedFileNames state here
      setSelectedFileNames([]);
    }
  }, [iconFile, setSelectedFileNames]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countries = await fetchCountryList(router);
        setCountryList(countries);
      } catch (error: any) {
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
        console.error("Error fetching country list:");
      }
    };

    fetchData();
  }, []);
  console.log(formData, "formData");

<<<<<<< HEAD
  return (
    <>
      <div className="w-[1200px] h-[642px]">
        <form className="" onSubmit={handleSubmit}>
          <div className="bg-[#ffffff] w-full h-[70px] flex flex-col justify-start rounded-md">
            <div className="items-center flex justify-between px-8">
              <h2 className="p-title text-left text-[#071437] mt-5 w-full pl-2">
=======
  const onNext = (e: any) => {
    e.preventDefault();
    setIsEmergency(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [field, indexStr, subfield] = name.split(/[.[\]]/).filter(Boolean);

    if (field === "emergencyContacts") {
      const index = parseInt(indexStr); // Convert index to a number

      if (!isNaN(index) && subfield) {
        setFormData((prevData) => {
          // Ensure the array has enough space for the given index
          const updatedContacts = [...prevData.emergencyContacts];

          // Dynamically add an object if the index does not exist
          if (!updatedContacts[index]) {
            updatedContacts[index] = {
              name: "",
              patientRelationship: "",
              phoneNumber: "",
              email: "",
            };
          }

          // Update the specific subfield value
          updatedContacts[index][
            subfield as keyof (typeof updatedContacts)[0]
          ] = value;

          return { ...prevData, emergencyContacts: updatedContacts };
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  return (
    <>
      <div className="relative h-[757px] w-[1284px] p-3">
        <form className={cn({ hidden: isEmergency })} onSubmit={onNext}>
          <div className="flex h-[70px] w-full flex-col justify-start rounded-md bg-[#ffffff]">
            <div className="flex items-center justify-between px-8">
              <h2 className="p-title mt-5 w-full pl-2 text-left !font-medium">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                Patient Demographic
              </h2>
              <X
                onClick={() => {
                  isSubmitted ? null : isModalOpen(false);
                }}
<<<<<<< HEAD
                className={`
                ${isSubmitted && " cursor-not-allowed"}
                w-6 h-6  text-black flex items-center mt-4 mr-1 cursor-pointer`}
              />
            </div>
            <p className="text-sm pl-10 text-gray-600 pb-10 pt-2">
              Add patient demographic and make sure to submit.
            </p>
            <div className="flex place-items-end mr-4"></div>
          </div>
          <div className=" mb-9 pt-4">
            <div className="h-[600px] max-h-[470px] md:px-10 mt-5">
              <div className="grid grid-cols-3 gap-x-4 gap-y-4">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-lg font-bold leading-6 text-gray-900 required-field"
                  >
                    First Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      required
                      className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
=======
                className={` ${isSubmitted && "cursor-not-allowed"} mr-1 mt-4 flex h-6 w-6 cursor-pointer items-center text-black`}
              />
            </div>
            <p className="sub-title pb-10 pl-10 pt-2">
              Add patient demographic and make sure to submit.
            </p>
            <div className="mr-4 flex place-items-end"></div>
          </div>
          <div className="mb-9 pt-4">
            <div className="mt-5 h-[600px] max-h-[470px] md:px-10">
              <div className="grid grid-cols-3 gap-x-5 gap-y-7">
                <div>
                  <label
                    htmlFor="first-name"
                    className="required-field block text-[20px] font-medium leading-6"
                  >
                    First Name
                  </label>
                  <div className="mt-3">
                    <input
                      type="text"
                      required
                      className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      placeholder="input first name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
<<<<<<< HEAD
                    className="block text-lg font-bold leading-6 text-gray-900 required-field"
                  >
                    Middle Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      required
                      className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
=======
                    className="not-required block text-[20px] font-medium leading-6"
                  >
                    Middle Name
                  </label>
                  <div className="mt-3">
                    <input
                      type="text"
                      className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      placeholder="input middle name"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
<<<<<<< HEAD
                    className="block text-lg font-bold leading-6 text-gray-900 required-field"
                  >
                    Last Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      required
                      className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
=======
                    className="required-field block text-[20px] font-medium leading-6"
                  >
                    Last Name
                  </label>
                  <div className="mt-3">
                    <input
                      type="text"
                      required
                      className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      placeholder="input last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
<<<<<<< HEAD
                <div className="flex flex-row">
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-bold leading-6 text-gray-900 required-field"
                    >
                      Age
                    </label>
                    <div className="mt-1 mr-4">
                      <input
                        type="text"
                        required
                        className="block w-[174px] h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400t sm:text-sm sm:leading-6 appearance-none"
=======
                <div className="flex w-full flex-row gap-5">
                  <div className="w-full">
                    <label
                      htmlFor="last-name"
                      className="required-field block text-[20px] font-medium leading-6"
                    >
                      Gender
                    </label>
                    <div className="relative mt-3">
                      <select
                        id="status"
                        className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 !text-[15px] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                        onChange={(e) => handleGenderChange(e.target.value)}
                        style={{ cursor: "pointer" }}
                        name="lastName"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      <Image
                        className="pointer-events-none absolute right-0 top-0 mr-5 mt-3.5"
                        width={20}
                        height={20}
                        src={"/svgs/chevron-up.svg"}
                        alt={""}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="first-name"
                      className="required-field block text-[20px] font-medium leading-6"
                    >
                      Date of Birth
                    </label>
                    <div className="relative mt-3">
                      <input
                        type="date"
                        required
                        className="group block h-[48px] w-full cursor-pointer rounded-md border-0 px-3.5 py-2 !text-[15px] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                        placeholder="input date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        max={new Date().toISOString().slice(0, 10)}
                      />
                      <Image
                        className="pointer-events-none absolute right-0 top-0 mr-5 mt-3.5"
                        width={20}
                        height={20}
                        src={"/svgs/calendark.svg"}
                        alt={""}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex w-full flex-row gap-5">
                  <div className="w-full">
                    <label
                      htmlFor="last-name"
                      className="required-field block text-[20px] font-medium leading-6"
                    >
                      Age
                    </label>
                    <div className="mt-3">
                      <input
                        type="text"
                        required
                        className="block h-[48px] w-full appearance-none rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                        placeholder="input age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
<<<<<<< HEAD
                  <div className="flex flex-row">
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-lg font-bold leading-6 text-gray-900 required-field"
                      >
                        Gender
                      </label>
                      <div className="mt-1 relative">
                        <select
                          id="status"
                          className="block w-[173px] h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400t sm:text-sm sm:leading-6"
                          onChange={(e) => handleGenderChange(e.target.value)}
                          style={{ cursor: "pointer" }}
                          name="lastName"
                        >
                          <option value="">select gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        <Image
                          className="absolute top-0 right-0 mt-3.5 mr-3 pointer-events-none"
                          width={20}
                          height={20}
                          src={"/svgs/chevron-up.svg"}
                          alt={""}
                        />
                      </div>
=======
                  <div className="w-full">
                    <label
                      htmlFor="last-name"
                      className="required-field block text-[20px] font-medium leading-6"
                    >
                      Height
                    </label>
                    <div className="mt-3">
                      <input
                        type="text"
                        required
                        className="block h-[48px] w-full appearance-none rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-end placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                        placeholder="cm"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-row gap-5">
                  <div className="w-full">
                    <label
                      htmlFor="last-name"
                      className="required-field block text-[20px] font-medium leading-6"
                    >
                      Weight
                    </label>
                    <div className="mt-3">
                      <input
                        type="text"
                        required
                        className="block h-[48px] w-full appearance-none rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-end placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                        placeholder="kg"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="last-name"
                      className="required-field block text-[20px] font-medium leading-6"
                    >
                      Mobility
                    </label>
                    <div className="mt-3">
                      <input
                        type="text"
                        required
                        className="block h-[48px] w-full appearance-none rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                        placeholder="input mobility"
                        name="mobility"
                        value={formData.mobility}
                        onChange={handleChange}
                      />
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
<<<<<<< HEAD
                    className="block text-lg font-bold leading-6 text-gray-900 required-field"
                  >
                    Date of Birth
                  </label>
                  <div className="mt-1 relative">
                    <input
                      type="date"
                      required
                      className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="input date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                    />
                    <Image
                      className="absolute top-0 right-0 mt-3.5 mr-3 pointer-events-none"
                      width={20}
                      height={20}
                      src={"/svgs/calendark.svg"}
                      alt={""}
                    />
=======
                    className="required-field block text-[20px] font-medium leading-6"
                  >
                    Dietary Restriction
                  </label>
                  <div className="mt-3">
                    <input
                      type="text"
                      required
                      className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                      placeholder="input dietary restriction"
                      name="dietaryRestriction"
                      value={formData.dietaryRestriction}
                      onChange={handleChange}
                    />
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
<<<<<<< HEAD
                    className="block text-lg font-bold leading-6 text-gray-900 required-field"
                  >
                    Address 1
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      required
                      className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
=======
                    className="required-field block text-[20px] font-medium leading-6"
                  >
                    Phone Number
                  </label>
                  <div className="mt-3">
                    <input
                      type="text"
                      required
                      className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                      placeholder="input phone number"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="not-required block text-[20px] font-medium leading-6"
                  >
                    Email
                  </label>
                  <div className="mt-3">
                    <input
                      type="email"
                      className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                      placeholder="input email example@gmail.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="first-name"
                    className="required-field block text-[20px] font-medium leading-6"
                  >
                    Address 1
                  </label>
                  <div className="mt-3">
                    <input
                      type="text"
                      required
                      className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      placeholder="input address 1"
                      name="address1"
                      value={formData.address1}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
<<<<<<< HEAD
                    className="block text-lg font-bold leading-6 text-gray-900"
                  >
                    Address 2
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="input address 2 (optional)"
=======
                    className="not-required block text-[20px] font-medium leading-6"
                  >
                    Address 2
                  </label>
                  <div className="mt-3">
                    <input
                      type="text"
                      className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                      placeholder="input address 2"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      name="address2"
                      value={formData.address2}
                      onChange={handleChange}
                    />
                  </div>
                </div>
<<<<<<< HEAD
                <div className="flex flex-row">
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-bold leading-6 text-gray-900 required-field"
                    >
                      City
                    </label>
                    <div className="mt-1 mr-4">
                      <input
                        type="text"
                        required
                        className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400t sm:text-sm sm:leading-6"
=======

                <div className="flex w-full flex-row gap-5">
                  <div className="w-full">
                    <label
                      htmlFor="first-name"
                      className="required-field block text-[20px] font-medium leading-6"
                    >
                      Country
                    </label>
                    <div className="relative mt-3">
                      <select
                        required
                        className="block h-[48px] w-full cursor-pointer rounded-md border-0 px-3.5 py-2 !text-[15px] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                        name="country"
                        onChange={(event) =>
                          handleCountryChange(event.target.value)
                        }
                      >
                        <option>Select Country</option>
                        {countryList.map((country) => (
                          <option key={country.countryId} value={country.id}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                      <Image
                        className="pointer-events-none absolute right-0 top-0 mr-5 mt-3.5"
                        width={20}
                        height={20}
                        src={"/svgs/chevron-up.svg"}
                        alt={""}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="last-name"
                      className="required-field block text-[20px] font-medium leading-6"
                    >
                      City
                    </label>
                    <div className="mt-3">
                      <input
                        type="text"
                        required
                        className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                        placeholder="input city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
<<<<<<< HEAD
                  <div className="flex flex-row">
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-lg font-bold leading-6 text-gray-900 required-field"
                      >
                        State
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          required
                          className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400t sm:text-sm sm:leading-6"
                          placeholder="input state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-lg font-bold leading-6 text-gray-900 required-field"
                  >
                    Country
                  </label>
                  <div className="mt-1 relative">
                    <select
                      required
                      className="block cursor-pointer w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      name="country"
                      onChange={(event) =>
                        handleCountryChange(event.target.value)
                      }
                    >
                      <option>Select a country</option>
                      {countryList.map((country) => (
                        <option key={country.countryId} value={country.id}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <Image
                      className="absolute top-0 right-0 mt-3.5 mr-3 pointer-events-none"
                      width={20}
                      height={20}
                      src={"/svgs/chevron-up.svg"}
                      alt={""}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-lg font-bold leading-6 text-gray-900 required-field"
                  >
                    Zip
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      required
                      className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400t sm:text-sm sm:leading-6"
                      placeholder="input zip"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor="last-name"
                    className="block text-lg font-bold leading-6 text-gray-900 required-field"
                  >
                    Code Status
                  </label>
                  <div className="mt-1 relative">
                    <select
                      id="status"
                      className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400t sm:text-sm sm:leading-6 cursor-pointer"
                      name="codeStatus"
                      onChange={(e) => handleCodeStatusChange(e.target.value)}
                      style={{ cursor: "pointer" }}
                    >
                      <option value="">select status</option>
                      <option value="DNR" className="text-red-500">
                        DNR
                      </option>
                      <option value="FULL CODE" className="text-blue-500">
                        FULL CODE
                      </option>
                    </select>
                    <Image
                      className="absolute top-0 right-0 mt-3.5 mr-3 pointer-events-none"
                      width={20}
                      height={20}
                      src={"/svgs/chevron-up.svg"}
                      alt={""}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-lg font-bold leading-6 text-gray-900 required-field"
                  >
                    Admission Date
                  </label>
                  <div className="mt-1 relative">
                    <input
                      type="date"
                      required
                      className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400t sm:text-sm sm:leading-6"
                      placeholder="input addmission date"
                      name="admissionDate"
                      value={formData.admissionDate}
                      onChange={handleChange}
                    />
                    <Image
                      className="absolute top-0 right-0 mt-3.5 mr-3 pointer-events-none"
                      width={20}
                      height={20}
                      src={"/svgs/calendark.svg"}
                      alt={""}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-lg font-bold leading-6 text-gray-900 required-field"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      required
                      className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="input email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-lg font-bold leading-6 text-gray-900 required-field"
                  >
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      required
                      className="block w-full h-12 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="input phone number"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                    />
=======
                </div>
                <div className="flex flex-row gap-5">
                  <div className="w-full">
                    <label
                      htmlFor="last-name"
                      className="required-field block text-[20px] font-medium leading-6"
                    >
                      State
                    </label>
                    <div className="mt-3">
                      <input
                        type="text"
                        required
                        className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                        placeholder="input state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="last-name"
                      className="required-field block text-[20px] font-medium leading-6"
                    >
                      Zip
                    </label>
                    <div className="mt-3">
                      <input
                        type="text"
                        required
                        className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                        placeholder="input zip code"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-5">
                  <div className="w-full">
                    <label
                      htmlFor="last-name"
                      className="required-field block text-[20px] font-medium leading-6"
                    >
                      Code Status
                    </label>
                    <div className="relative mt-3">
                      <select
                        id="status"
                        className="block h-[48px] w-full cursor-pointer rounded-md border-0 px-3.5 py-2 !text-[15px] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                        name="codeStatus"
                        onChange={(e) => handleCodeStatusChange(e.target.value)}
                        style={{ cursor: "pointer" }}
                      >
                        <option value="">Select</option>
                        <option value="DNR" className="text-red-500">
                          DNR
                        </option>
                        <option value="FULL CODE" className="text-blue-500">
                          FULL CODE
                        </option>
                      </select>
                      <Image
                        className="pointer-events-none absolute right-0 top-0 mr-5 mt-3.5"
                        width={20}
                        height={20}
                        src={"/svgs/chevron-up.svg"}
                        alt={""}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="last-name"
                      className="required-field block text-[20px] font-medium leading-6"
                    >
                      Admission Date
                    </label>
                    <div className="relative mt-3">
                      <input
                        type="date"
                        disabled
                        className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 !text-[15px] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                        placeholder="input addmission date"
                        name="admissionDate"
                        defaultValue={new Date().toISOString().slice(0, 10)}
                      />
                      <Image
                        className="pointer-events-none absolute right-0 top-0 mr-5 mt-3.5"
                        width={20}
                        height={20}
                        src={"/svgs/calendark.svg"}
                        alt={""}
                      />
                    </div>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  </div>
                </div>

                <div className="w-full">
                  <label
                    htmlFor="imageUpload"
<<<<<<< HEAD
                    className="relative h-[70px] w-full bg-[#daf3f5] border-[#007C85] border-dashed border-2 flex justify-center items-center rounded-md cursor-pointer text-center text-[#101828] font-bold mt-1.5"
                  >
                    {selectedFileNames.length > 0 ? (
                      // If files are selected, display filein.svg
                      <Image
                        className="w-10 h-10 mr-1"
                        width={50}
                        height={50}
                        src={"/svgs/filein.svg"}
                        alt=""
                      />
                    ) : (
                      // If no files are selected, display folder-add.svg
                      <Image
                        className="w-10 h-10 mr-1"
                        width={50}
                        height={50}
                        src={"/svgs/gallery-export.svg"}
                        alt=""
                      />
                    )}
=======
                    className="relative mt-5 flex h-[62px] w-full cursor-pointer items-center justify-center rounded-[3px] border-2 border-dashed border-[#007C85] bg-[#007C851A] text-center font-medium"
                  >
                    <Image
                      className="mr-1 h-10 w-10"
                      width={50}
                      height={50}
                      src={"/svgs/filein.svg"}
                      alt=""
                    />

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    <div className="flex pb-5">
                      {selectedFileNames.length > 0 ? (
                        <>
                          <p className="">File Attached.</p>
<<<<<<< HEAD
                          <p className="underline decoration-solid text-blue-500 ml-1">
=======
                          <p className="ml-1 text-blue-500 underline decoration-solid">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                            Replace
                          </p>
                        </>
                      ) : (
                        <>
<<<<<<< HEAD
                          <p className="">Drag & Drop files or</p>
                          <p className="underline decoration-solid text-blue-500 ml-1">
=======
                          <p className="">Upload or Attach Files or</p>
                          <p className="ml-1 text-blue-500 underline decoration-solid">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                            Browse
                          </p>
                        </>
                      )}
                    </div>
<<<<<<< HEAD
                    <span className="text-sm font-normal absolute bottom-2 text-[#667085] ml-10 pb-1">
                      {selectedFileNames.length === 0 ? (
                        // Display "Support PNG & JPG" if no files are attached
                        <span>Support PNG & JPG</span>
=======
                    <span className="absolute bottom-2 ml-10 pb-1 text-sm font-normal text-[#667085]">
                      {selectedFileNames.length === 0 ? (
                        // Display "Support PNG & JPG" if no files are attached
                        <span>Miximum file size 50 MB.</span>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      ) : (
                        // Display the file name if one file is attached, or the number of files if more than one are attached
                        <span>{selectedFileNames[0]}</span>
                      )}
                    </span>
                  </label>
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFile(e)}
                  />
                </div>
              </div>
            </div>
<<<<<<< HEAD
            <div className="justify-end flex mr-10">
=======
            <div className="absolute bottom-11 right-14 flex justify-end">
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
              >
                Submit
=======
                className={` ${isSubmitted && "cursor-not-allowed"} h-[45px] w-[150px] rounded-sm bg-[#007C85] px-3 py-2 font-medium text-[#ffff] hover:bg-[#03595B]`}
              >
                Next
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
              </button>
            </div>
          </div>
        </form>
<<<<<<< HEAD
=======
        {/* Emergency Contact */}
        {isEmergency && (
          <form
            onSubmit={handleSubmit}
            className="flex h-full flex-col justify-between p-5 px-8"
          >
            <div className="">
              <div className="flex justify-between">
                <h1 className="text-[20px] font-medium">
                  Incase of Emergency Contact
                </h1>
                <X
                  onClick={() => {
                    isSubmitted ? null : isModalOpen(false);
                  }}
                  className={` ${isSubmitted && "cursor-not-allowed"} flex h-6 w-6 cursor-pointer items-center`}
                />
              </div>
              <p className="sub-title mt-2">
                Add emergency contact and make sure to submit.
              </p>
              <div className="mt-7 grid grid-cols-4 gap-5">
                <div className="col-span-1 grid">
                  <div className="flex flex-col gap-2">
                    <h1 className="required-field text-[20px] font-medium">
                      Contact Name
                    </h1>
                    <input
                      type="text"
                      required
                      className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                      placeholder="input full name"
                      name="emergencyContacts[0].name"
                      value={formData.emergencyContacts[0]?.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-span-1 grid">
                  <div className="flex flex-col gap-2">
                    <h1 className="required-field text-[20px] font-medium">
                      Relationship
                    </h1>
                    <input
                      type="text"
                      required
                      className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                      placeholder="input relationship"
                      name="emergencyContacts[0].patientRelationship"
                      value={formData.emergencyContacts[0]?.patientRelationship}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-span-1 grid">
                  <div className="flex flex-col gap-2">
                    <h1 className="required-field text-[20px] font-medium">
                      Contact Number
                    </h1>
                    <input
                      type="text"
                      required
                      className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                      placeholder="input contact number"
                      name="emergencyContacts[0].phoneNumber"
                      value={formData.emergencyContacts[0]?.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-span-1 grid">
                  <div className="flex flex-col gap-2">
                    <h1 className="required-field text-[20px] font-medium">
                      Contact Email
                    </h1>
                    <input
                      type="text"
                      required
                      className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                      placeholder="input email"
                      name="emergencyContacts[0].email"
                      value={formData.emergencyContacts[0]?.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <hr className="mt-14" />
              <div className="mt-5">
                <h1 className="flex text-[20px] font-medium text-[#007C85]">
                  Contact 1{" "}
                  <span className="flex gap-2 text-[#64748B]">
                    (Optional) <img src="/icons/optional-icon.svg" alt="" />
                  </span>
                </h1>
                <div className="mt-5 grid grid-cols-4 gap-5">
                  <div className="col-span-1 grid">
                    <div className="flex flex-col gap-2">
                      <h1 className="not-required text-[20px] font-medium">
                        Contact Name
                      </h1>
                      <input
                        type="text"
                        required={contact1}
                        className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                        placeholder="input full name"
                        name="emergencyContacts[1].name"
                        value={formData.emergencyContacts[1]?.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-span-1 grid">
                    <div className="flex flex-col gap-2">
                      <h1 className="not-required text-[20px] font-medium">
                        Relationship
                      </h1>
                      <input
                        type="text"
                        required={contact1}
                        className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                        placeholder="input relationship"
                        name="emergencyContacts[1].patientRelationship"
                        value={
                          formData.emergencyContacts[1]?.patientRelationship
                        }
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-span-1 grid">
                    <div className="flex flex-col gap-2">
                      <h1 className="not-required text-[20px] font-medium">
                        Contact Number
                      </h1>
                      <input
                        type="text"
                        required={contact1}
                        className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                        placeholder="input contact number"
                        name="emergencyContacts[1].phoneNumber"
                        value={formData.emergencyContacts[1]?.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-span-1 grid">
                    <div className="flex flex-col gap-2">
                      <h1 className="not-required text-[20px] font-medium">
                        Contact Email
                      </h1>
                      <input
                        type="text"
                        required={contact1}
                        className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                        placeholder="input email"
                        name="emergencyContacts[1].email"
                        value={formData.emergencyContacts[1]?.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mt-14" />
              <div className="mt-5">
                <h1 className="flex text-[20px] font-medium text-[#007C85]">
                  Contact 2{" "}
                  <span className="flex gap-2 text-[#64748B]">
                    (Optional) <img src="/icons/optional-icon.svg" alt="" />
                  </span>
                </h1>
                <div className="mt-5 grid grid-cols-4 gap-5">
                  <div className="col-span-1 grid">
                    <div className="flex flex-col gap-2">
                      <h1 className="not-required text-[20px] font-medium">
                        Contact Name
                      </h1>
                      <input
                        type="text"
                        required={contact2}
                        className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                        placeholder="input full name"
                        name="emergencyContacts[2].name"
                        value={formData.emergencyContacts[2]?.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-span-1 grid">
                    <div className="flex flex-col gap-2">
                      <h1 className="not-required text-[20px] font-medium">
                        Relationship
                      </h1>
                      <input
                        type="text"
                        required={contact2}
                        className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                        placeholder="input relationship"
                        name="emergencyContacts[2].patientRelationship"
                        value={
                          formData.emergencyContacts[2]?.patientRelationship
                        }
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-span-1 grid">
                    <div className="flex flex-col gap-2">
                      <h1 className="not-required text-[20px] font-medium">
                        Contact Number
                      </h1>
                      <input
                        type="text"
                        required={contact2}
                        className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                        placeholder="input contact number"
                        name="emergencyContacts[2].phoneNumber"
                        value={formData.emergencyContacts[2]?.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-span-1 grid">
                    <div className="flex flex-col gap-2">
                      <h1 className="not-required text-[20px] font-medium">
                        Contact Email
                      </h1>
                      <input
                        type="text"
                        required={contact2}
                        className="block h-[48px] w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:mr-1 placeholder:text-[15px] placeholder:text-[#64748B] sm:text-sm sm:leading-6"
                        placeholder="input email"
                        name="emergencyContacts[2].email"
                        value={formData.emergencyContacts[2]?.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-11 right-14 flex justify-end">
              <button
                onClick={() => setIsEmergency(false)}
                disabled={isSubmitted}
                type="button"
                className={` ${isSubmitted && "cursor-not-allowed"} mr-4 h-[45px] w-[150px] rounded-sm bg-[#F3F3F3] font-medium text-black hover:bg-[#D9D9D9]`}
              >
                Back
              </button>
              <button
                disabled={isSubmitted}
                type="submit"
                className={` ${isSubmitted && "cursor-not-allowed"} h-[45px] w-[150px] rounded-sm bg-[#007C85] px-3 py-2 font-medium text-[#ffff] hover:bg-[#03595B]`}
              >
                Submit
              </button>
            </div>
          </form>
        )}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
      </div>
    </>
  );
};
