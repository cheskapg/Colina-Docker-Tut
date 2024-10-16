"use client";
import Image from "next/image";
import { getAccessToken } from "@/app/api/login-api/accessToken";
import { fetchPatientPrescriptions } from "@/app/api/patients-api/patientTimeGraph";
import { PrnModalContent } from "@/components/modal-content/prn-modal-content";
import { ScheduledModalContent } from "@/components/modal-content/scheduled-modal-content";
import PatientCard from "@/components/patientCard";
import Modal from "@/components/reusable/modal";
import { ErrorModal } from "@/components/shared/error";
import Pagination from "@/components/shared/pagination";
import { SuccessModal } from "@/components/shared/success";
import TimeGraph from "@/components/timeGraph";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
<<<<<<< HEAD
import { formUrlQuery } from "@/lib/utils";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ChartLoader from "./loaders/ChartLoader";
import LoadingGif from "./loaders/LoadingGif";

const Chart = () => {
  const router = useRouter();
=======
import { cn, formUrlQuery } from "@/lib/utils";
import {
  redirect,
  useParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";
import ChartLoader from "./loaders/ChartLoader";
import LoadingGif from "./loaders/LoadingGif";
import { NursenotesModalContent } from "./modal-content/nursenotes-modal-content";
import { IncidentreportModalContent } from "./modal-content/incidentreport-modal-content";

const Chart = () => {
  const router = useRouter();
  const [id, setId] = useState("");
  const searchParams = useSearchParams();
  const [patientId, setPatientId] = useState<string | null>(searchParams.get("id"));
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  const { toast } = useToast();
  const [patientList, setPatientList] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [gotoError, setGotoError] = useState(false);
  const [pageNumber, setPageNumber] = useState("");
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalPatients, setTotalPatients] = useState<number>(1);
  const [patientUuid, setPatientUuid] = useState<string>("");
  const [PRNData, setPRNData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [term, setTerm] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAschOpen, setIsAschOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [medicationLogUuid, setMedicationLogUuid] = useState("");
  const [aschData, setAschData] = useState<any[]>([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [endLineHeight, setEndLineHeight] = useState(0);
<<<<<<< HEAD
  console.log(patientName, "patientName");

=======
  const [prescriptionOrders, setPrescriptionOrders] = useState();
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  const [isIROpen, setIsIROpen] = useState(false);
  console.log(patientName, "patientName");
console.log(patientId, "patientId");
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  const patientWithMedicationLogsToday = patientList?.filter((patient) => {
    // Assuming medicationlogs is an array and you want to check if any of the logs were created today
    return patient.medicationlogs.some((log: any) => {
      // Explicitly define the type of 'log' as 'any'
      // Check if the createdAt of any medication log is today's date
      const createdAtDate = new Date(log.createdAt);
      const today = new Date();
      return createdAtDate.toDateString() === today.toDateString();
    });
  });

  const isModalOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "visible";
      setPRNData([]);
    }
  };

  const isAschModalOpen = (isAschOpen: boolean) => {
    setIsAschOpen(isAschOpen);
    if (isAschOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isAschOpen) {
      document.body.style.overflow = "visible";
    }
  };
<<<<<<< HEAD
  console.log(term);
=======

  const isNotesModalOpen = (isNoteOpen: boolean) => {
    setIsNoteOpen(isNoteOpen);
    if (isNoteOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isNoteOpen) {
      document.body.style.overflow = "visible";
    }
  };

  const isIRModalOpen = (isIrOpen: boolean) => {
    setIsIROpen(isIrOpen);
    if (isIrOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isIrOpen) {
      document.body.style.overflow = "visible";
    }
  };
  console.log(term);

  useEffect(() => {
    const handleParamsChange = () => {
      const newId = searchParams.get("id");
      setPatientId(newId);
    };

    handleParamsChange();
  }, [searchParams]);
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  useEffect(() => {
    const fetchData = async () => {
      try {
        const patientListWithPrescription = await fetchPatientPrescriptions(
<<<<<<< HEAD
          term,
          currentPage,
          router
=======
          patientId != null && term == "" ? patientId : term,
          currentPage,
          router,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        );
        setPatientList(patientListWithPrescription.data);
        setTotalPages(patientListWithPrescription.totalPages);
        setTotalPatients(patientListWithPrescription.totalCount);
<<<<<<< HEAD
=======
        setPrescriptionOrders(patientListWithPrescription.prescriptionOrders);
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        console.log("error");
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
    };

    fetchData();
<<<<<<< HEAD
  }, [currentPage, isOpen, term, isAschOpen]);
  console.log(totalPages, "totalPages");

  const [id, setId] = useState("");
  const searchParams = useSearchParams();
=======
  }, [currentPage, isOpen, term, isAschOpen, patientId]);
  console.log(totalPages, "totalPages");

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  useEffect(() => {
    if (id) {
      isModalOpen(true);
    }
  }, [id]);
<<<<<<< HEAD
=======

  useEffect(() => {
    if (term != "") {
      setPatientId("");
    }
  }, [term]);

  console.log(patientId, "patientId");
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
  const handlePRNClicked = (patientId: string) => {
    setId(patientId); // Update state first
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "id",
      value: patientId,
    });
    router.replace(newUrl, { scroll: true }); // Update URL immediately
  };

  const onSuccess = () => {
    setIsSuccessOpen(true);
    setIsEdit(false);
    isModalOpen(false);
    isAschModalOpen(false);
  };
  const onFailed = () => {
    setIsErrorOpen(true);
    setIsEdit(false);
  };
  interface Modalprops {
    label: string;
    isOpen: boolean;
    isModalOpen: (isOpen: boolean) => void;
  }

  if (isLoading) {
<<<<<<< HEAD
    return <LoadingGif/> 
    // <ChartLoader />;
  }
  console.log(patientWithMedicationLogsToday, "patientWithMedicationLogsToday");
  return (
    <div className=" w-full px-[150px] h-full">
      <div className="w-full flex-col  flex justify-center items-center">
        {patientWithMedicationLogsToday.length == 0 && !term ? (
          <div className="w-full h-screen flex  flex-col justify-center items-center -mt-14">
=======
    return <LoadingGif />;
    // <ChartLoader />;
  }
  return (
    <div className="-mt-2 h-full w-full px-[150px] py-[20px]">
      <div className="flex h-full w-full flex-col items-center justify-center pt-20">
        {patientWithMedicationLogsToday.length == 0 && !term ? (
          <div className="flex w-full flex-col items-center justify-center">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
            <p className="mt-10"> No Data Yet</p>{" "}
            <span> Create a prescription for patient </span>
          </div>
        ) : (
<<<<<<< HEAD
          <div className="bg-[#F4F4F4] h-[826px] max-h-[826px] w-full">
            <div className="top-section w-full pt-24 pl-5">
              <div>
                <Image
                  src="/icons/search-icon.svg"
                  alt="search-icon"
                  className="absolute ml-2 mt-4"
                  width={20}
                  height={20}
                />
                <input
                  type="text"
                  className="w-[419px] rounded-md h-[45px] pl-7 mb-2"
=======
          <div className="h-full w-full bg-[#F4F4F4]">
            <div className="top-section w-full pl-5 pt-5">
              <div className="relative flex items-center">
                <Image
                  src="/icons/search-icon.svg"
                  alt="search-icon"
                  className="absolute ml-2"
                  width={13.35}
                  height={13.35}
                />
                <input
                  type="text"
                  className="placeholder-text h-[45px] w-[419px] rounded-md pl-7"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  placeholder="Search by reference no. or name..."
                  value={term}
                  onChange={(e) => {
                    setTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
<<<<<<< HEAD
              <div className="flex flex-col w-[250px] justify-between">
                <h1 className=" -mb-8 font-semibold">
                  {" "}
                  Time Chart {" - "}
                  <span className="text-gray-500">
                    Total of {totalPatients} Patients
                  </span>
=======
              <div className="flex w-full flex-col justify-between">
                <h1 className="-mb-8 text-[20px] font-medium">
                  <p className="absolute mt-2.5">
                    {" "}
                    Time Chart {" - "}
                    <span className="chart-header">
                      Total of {totalPatients} Patients
                    </span>
                  </p>
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                </h1>
              </div>
            </div>
            {patientWithMedicationLogsToday.length == 0 && term ? (
<<<<<<< HEAD
              <div className="w-full h-full  flex items-center  justify-center font-thin  ">
                No Patient Found
              </div>
            ) : (
              <div className="w-full relative overflow-hidden flex">
                <div className="md:w-2/6  sticky top-0">
=======
              <div className="flex h-full w-full items-center justify-center font-thin">
                No Patient Found
              </div>
            ) : (
              <div className="relative flex w-full overflow-hidden pr-4">
                <div className="sticky top-0 md:w-2/6">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                  <div className="w-full">
                    <PatientCard
                      patientWithMedicationLogsToday={
                        patientWithMedicationLogsToday
                      }
                      setIsLoading={setIsLoading}
                      setPatientUuid={setPatientUuid}
                      isModalOpen={isModalOpen}
<<<<<<< HEAD
                      setPatientName={setPatientName}
                    />
                  </div>
                </div>
                <div className="md:w-4/6 h-full md:block hidden overflow-y-hidden ">
                  <div className="w-full h-full ">
=======
                      isNotesModalOpen={isNotesModalOpen}
                      setPatientName={setPatientName}
                      prescriptionOrders={prescriptionOrders}
                    />
                  </div>
                </div>
                <div className="hidden h-full overflow-y-hidden md:block md:w-4/6">
                  <div className="h-full w-full">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    <TimeGraph
                      patientWithMedicationLogsToday={
                        patientWithMedicationLogsToday
                      }
                      setMedicationLogUuid={setMedicationLogUuid}
<<<<<<< HEAD
=======
                      isPRNModalOpen={isModalOpen}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                      isAschModalOpen={isAschModalOpen}
                      setPatientName={setPatientName}
                      setAschData={setAschData}
                      setEndLineHeight={setEndLineHeight}
                    />
                  </div>
                </div>
<<<<<<< HEAD
                <div className=" relative  r-0">
                  <div
                    className="absolute w-1 bg-[#d9d9d9] endLine "
=======
                <div className="r-0 relative">
                  <div
                    className="endLine absolute w-[5px] bg-[#d9d9d9]"
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
                    style={{ height: endLineHeight + "px", right: 0 }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        )}

<<<<<<< HEAD
        <div className="bg-white  w-full mt-5">
=======
        <div
          className={cn("mt-7 w-full bg-white", {
            hidden: patientWithMedicationLogsToday.length == 0,
          })}
        >
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            setCurrentPage={setCurrentPage}
          />
        </div>

        {isOpen && (
          <Modal
            content={
              <PrnModalContent
                isModalOpen={isModalOpen}
                uuid={patientUuid}
                name={patientName}
                setIsUpdated={""}
                isOpen={isOpen}
                isEdit={isEdit}
                PRNData={PRNData}
                label="charting"
                onSuccess={onSuccess}
                onFailed={onFailed}
                setErrorMessage={setError}
              />
            }
            isModalOpen={isModalOpen}
          />
        )}
        {isAschOpen && (
          <Modal
            content={
              <ScheduledModalContent
                aschData={aschData}
                isModalOpen={isAschModalOpen}
                uuid={medicationLogUuid}
                name={patientName}
                isOpen={isAschOpen}
                isEdit={isEdit}
                scheduledMedData={""}
                setIsUpdated={""}
                label="charting"
                onSuccess={onSuccess}
                onFailed={onFailed}
                setErrorMessage={setError}
              />
            }
            isModalOpen={isModalOpen}
          />
        )}
<<<<<<< HEAD
=======
        {isNoteOpen && (
          <Modal
            content={
              <NursenotesModalContent
                isModalOpen={isNotesModalOpen}
                isNotesModalOpen={isNotesModalOpen}
                isIRModalOpen={isIRModalOpen}
                uuid={patientUuid}
                name={patientName}
                isOpen={isOpen}
                isView={false}
                label={"Add"}
                PatientNotesData={""}
                onSuccess={onSuccess}
              />
            }
            isModalOpen={isNotesModalOpen}
          />
        )}
        {isIROpen && (
          <Modal
            content={
              <IncidentreportModalContent
                isModalOpen={isIRModalOpen}
                uuid={patientUuid}
                name={patientName}
                isOpen={isOpen}
                isView={false}
                label={"Add"}
                PatientNotesData={""}
                onSuccess={onSuccess}
              />
            }
            isModalOpen={isIRModalOpen}
          />
        )}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
        {isSuccessOpen && (
          <SuccessModal
            label="Success"
            isAlertOpen={isSuccessOpen}
            toggleModal={setIsSuccessOpen}
            isUpdated=""
            setIsUpdated={setIsUpdated}
          />
        )}
        {isErrorOpen && (
          <ErrorModal
            label="Scheduled Log already exist"
            isAlertOpen={isErrorOpen}
            toggleModal={setIsErrorOpen}
            isEdit={isEdit}
            errorMessage={error}
          />
        )}
      </div>
    </div>
  );
};

export default Chart;
