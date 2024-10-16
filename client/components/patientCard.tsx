import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { onNavigate } from "@/actions/navigation";
import moment from "moment";
import TimeGraph from "./timeGraph";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
<<<<<<< HEAD
=======
import ResuableTooltip from "./reusable/tooltip";
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "@/components/ui/tooltip";

import { text } from "stream/consumers";
import PatientIcon from "./reusable/patientIcon";
import Link from "next/link";
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
// import MobileTimeGraph from "./mobileTimeGraph";

const PatientCard = ({
  patientWithMedicationLogsToday,
  setPatientUuid,
  setPatientName,
  isModalOpen,
<<<<<<< HEAD
  setIsLoading,
=======
  isNotesModalOpen,
  setIsLoading,
  prescriptionOrders,
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
}: {
  patientWithMedicationLogsToday: any;
  setPatientUuid: any;
  setPatientName: any;
  isModalOpen: any;
<<<<<<< HEAD
  setIsLoading: any;
=======
  isNotesModalOpen: any;
  setIsLoading: any;
  prescriptionOrders: any;
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
}) => {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(moment().format("HHmm"));
  // Function to get distinct allergy types
  const getDistinctAllergyTypes = (allergies: any[]) => {
    const distinctTypes: string[] = [];
    allergies?.forEach((allergy: any) => {
      if (!distinctTypes.includes(allergy.type)) {
        distinctTypes.push(allergy.type);
      }
    });
    return distinctTypes.join(", ");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format("HHmm"));
    }, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, [currentTime]);
  // Function to get medication types and their counts
  const getPRNCount = (medicationLogs: any[]) => {
    const medicationTypes: { [key: string]: number } = {};

    // Count the occurrences of each medication type
    medicationLogs.forEach((log: any) => {
      if (log.medicationType === "PRN") {
        if (!medicationTypes[log.medicationType]) {
          medicationTypes[log.medicationType] = 1;
        } else {
          medicationTypes[log.medicationType]++;
        }
      }
    });

    return medicationTypes;
  };
<<<<<<< HEAD
  const handlePatientClick = (patientId: any) => {
    const lowercasePatientId = patientId.toLowerCase();

    router.replace(
      `/patient-overview/${lowercasePatientId}/medication/scheduled`
    );
  };

  return (
    <div className="w-full pl-3 mt-[46px] ">
      <div className="flex w-full  flex-col  bg-[#F4F4F4] items-center  md:border-dashed md:border-r md:border-r-black   right-0 ">
        <p className="absolute top-2 right-10 text-lg text-gray-500 font-light ">
          Prior
        </p>
        {patientWithMedicationLogsToday.map((patient: any, index: number) => (
          <div
            className={`

          w-full `}
            key={index}
          >
            <div className="flex flex-row  bg-white border-2 border-b-8 border-l-8  h-[203px] w-full rounded-lg border-[#F4F4F4] right-0">
              <div
                className="w-4/6 h-full cursor-pointer min-w-[250px] "
                onClick={() => {
                  setIsLoading(true);
                  handlePatientClick(patient.uuid);
                }}
              >
                <div className="flex p-3 pl-5 flex-row w-full mt-2">
                  <div className="rounded-full min-w-[60px] min-h-[60px] max-h-[60px] max-w-[60px] p-1 bg-[#007C854D]">
                    <Image
                      className="rounded-full"
                      src="/imgs/drake.png"
                      alt="Patient"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="ml-5 max-w-[250px]  flex flex-col truncate text-ellipsis ">
                    <p className=" font-semibold text-lg justify-start items-start flex truncate text-ellipsis">
                      {patient.firstName} {patient.middleName}{" "}
                      {patient.lastName}
                    </p>
                    <p className="flex text-sm justify-start">
                      {patient.age} years old - {patient.gender}
                    </p>
                  </div>
                </div>
                <div className="max-w-[2500px] h-full flex flex-col justify-start items-start gap-1 mt-2 ml-5 pr-5 pb-5">
                  <p>
                    Attending -{" "}
                    <span className="text-gray-400">Nurse Name</span>
                  </p>
                  <p className="truncate text-ellipsis max-w-[250px] flex justify-start items-start">
                    Allergies - {"  "}
                    <span className="max-w-[250px] flex justify-start items-start text-gray-400 truncate text-ellipsis">
                      {getDistinctAllergyTypes(patient.allergies).length > 0
                        ? getDistinctAllergyTypes(patient.allergies)
                        : "None"}
                    </span>
                  </p>
                  <p>
                    Code -{" "}
                    <span
                      className={`${
                        patient.codeStatus == "DNR"
                          ? "text-red-600"
                          : "text-blue-400"
                      }`}
                    >
                      {patient.codeStatus}
                    </span>
                  </p>
                </div>
              </div>

              <div className="h-full w-1/6 border-[#F4F4F4] border-l-4 border-solid flex justify-between items-center flex-col">
                <div className="h-full w-full flex flex-col border-[#F4F4F4] border-b-4 text-xs items-center justify-center  cursor-pointer">
                  <Image
                    src="/icons/chart-order.svg"
                    alt="order"
                    width={20}
                    height={20}
                    className="pointer-events-none select-none"
                  />
                  Orders
                  <p
                    className={`absolute flex justify-center items-center h-4 w-4 text-white bg-red-500 text-xs pointer-events-none select-none -mt-7 -mr-7  rounded-full -z-[0] ${
                      patient.medicationlogs.length === 0 ? "hidden" : ""
                    }`}
                  >
                    {patient.medicationlogs.length}
                  </p>
                </div>

                <div
                  className="h-full w-full flex flex-col border-[#F4F4F4] border-b-4 text-xs items-center justify-center  cursor-pointer"
                  onClick={() => {
                    setPatientUuid(patient.uuid);
                    isModalOpen(true);
                    setPatientName(`${patient.firstName} ${patient.lastName}`);
                  }}
                >
                  <Image
                    src="/icons/chart-prn.svg"
                    alt="prn"
                    width={20}
                    height={20}
                    className="pointer-events-none select-none"
                  />
                  PRN
                  {Object.entries(getPRNCount(patient.medicationlogs)).map(
                    ([type, count]) => (
                      <span
                        key={type}
                        className={`absolute flex justify-center items-center z-10 h-4 w-4 text-white bg-red-500 text-xs select-none pointer-events-none -mt-7 -mr-7 rounded-full ${
                          count === 0 ? "hidden" : ""
                        }`}
                      >
                        {count}
                      </span>
                    )
                  )}
                </div>
                <div className="h-full w-full flex flex-row border-[#F4F4F4] text-xs items-center gap-1 justify-center  cursor-pointer">
                  <div>
                    <Image
                      src="/icons/chart-status.svg"
                      alt="status"
                      width={15}
                      height={15}
                      className="pointer-events-none select-none"
                    />
                    A
                  </div>
                  <div>
                    <Image
                      src="/icons/chart-status.svg"
                      alt="status"
                      width={15}
                      height={15}
                      className="pointer-events-none select-none"
                    />
                    S
                  </div>
                  <div>
                    <Image
                      src="/icons/chart-status.svg"
                      alt="status"
                      width={15}
                      height={15}
                      className="pointer-events-none select-none"
                    />
                    D
                  </div>
                </div>
              </div>

              <div className="h-full w-[127px] border-[#F4F4F4] border-l-2 border-solid flex justify-center overflow overflow-hidden items-center flex-col bg-[#007C851A] ">
                {patient.medicationlogs.length !== 0 &&
                  patient.medicationlogs.some(
                    (log: any) =>
                      log.medicationLogStatus === "pending" &&
                      moment(log.medicationLogsTime, "HH:mm").format("HHmm") <=
                        currentTime
                  ) && (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center"
                    >
                      <HoverCard>
                        <HoverCardTrigger>
                          <div
                            className={`bg-[#FACC15] rounded-full p-1.5 cursor-pointer`}
                          >
                            <Image
                              src="icons/card-list.svg"
                              alt="list"
                              width={20}
                              height={20}
                              className="pointer-events-none select-none"
                            />
                            <div className=" h-full  absolute -mt-6 ml-5">
                              <span className="absolute flex justify-center items-center h-4 w-4 text-xs font-light rounded-full bg-red-600 text-white pointer-events-none select-none">
                                {
                                  patient.medicationlogs.filter(
                                    (log: any) =>
                                      log.medicationLogStatus === "pending" &&
                                      moment(
                                        log.medicationLogsTime,
                                        "HH:mm"
                                      ).format("HHmm") <= currentTime
                                  ).length
                                }
                              </span>
                            </div>
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent>
                          <div className="">
                            {patient.medicationlogs
                              .filter(
                                (log: {
                                  medicationLogStatus: string;
                                  medicationLogsTime: any;
                                }) =>
                                  log.medicationLogStatus === "pending" &&
                                  moment(
                                    log.medicationLogsTime,
                                    "HH:mm"
                                  ).format("HHmm") <= currentTime
                              )
                              .map(
                                (
                                  log: {
                                    [x: string]: ReactNode;
                                    medicationLogsName:
                                      | string
                                      | number
                                      | boolean
                                      | React.ReactElement<
                                          any,
                                          | string
                                          | React.JSXElementConstructor<any>
                                        >
                                      | Iterable<React.ReactNode>
                                      | React.ReactPortal
                                      | React.PromiseLikeOfReactNode
                                      | null
                                      | undefined;
                                    medicationType:
                                      | string
                                      | number
                                      | boolean
                                      | React.ReactElement<
                                          any,
                                          | string
                                          | React.JSXElementConstructor<any>
                                        >
                                      | Iterable<React.ReactNode>
                                      | React.ReactPortal
                                      | React.PromiseLikeOfReactNode
                                      | null
                                      | undefined;
                                  },
                                  logIndex: React.Key | null | undefined
                                ) => (
                                  <div key={logIndex} className=" text-start">
                                    {log.medicationLogsName} -{" "}
                                    {log.medicationType} -{" "}
                                    {log.medicationLogStatus}
                                  </div>
                                )
                              )}
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  )}
              </div>
            </div>
            {/* <MobileTimeGraph patient={patient.medicationlogs}/> */}
          </div>
        ))}
=======

  const handlePatientClick = (patientId: any, route: any) => {
    const lowercasePatientId = patientId.toLowerCase();

    router.replace(
      `/patient-overview/${lowercasePatientId}/${route === "overview" ? "medication/scheduled" : "patient-appointment"}`,
    );
  };

  console.log("patientWithMedicationLogsToday", patientWithMedicationLogsToday);
  return (
    <div className="mt-[46px] w-full pl-3">
      <div className="right-0 flex w-full flex-col items-center bg-[#F4F4F4] md:border-r md:border-dashed md:border-r-black">
        <p className="chart-header chart-header absolute right-7 top-2">
          Overdue
        </p>
        {patientWithMedicationLogsToday.map((patient: any, index: number) => {
          // Define the variable to count medication logs with hasDuration === "true"
          const durationLogsCount = patient.medicationlogs.filter(
            (log: any) => log.hasDuration === "true",
          ).length;

          return (
            <div className={`w-full`} key={index}>
              <div className="relative right-0 flex h-[203px] w-full flex-row rounded-lg border-2 border-b-8 border-l-8 border-[#F4F4F4] bg-white">
                <div
                  className="h-full w-4/6 min-w-[250px] cursor-pointer"
                  onClick={() => {
                    setIsLoading(true);
                    handlePatientClick(patient.uuid, "overview");
                  }}
                >
                  <div className="mt-2 flex w-full flex-row p-3 pl-5">
                    <div className="relative flex max-h-[60px] min-h-[60px] min-w-[60px] max-w-[60px] items-center justify-center rounded-full bg-[#007C854D] p-1">
                      <PatientIcon patientId={patient.uuid} />
                    </div>
                    <div className="ml-5 flex w-full max-w-[250px] flex-col truncate">
                      <p className="flex w-full items-start justify-start truncate text-[20px] font-medium">
                        <ResuableTooltip
                          text={`${patient.firstName} ${patient.middleName} ${patient.lastName}`}
                        />
                      </p>
                      <p className="flex justify-start text-[15px]">
                        {patient.age} years old - {patient.gender}
                      </p>
                    </div>
                  </div>
                  <div className="ml-5 mt-2 flex h-full max-w-[2500px] flex-col items-start justify-start gap-1 pb-5 pr-5">
                    <p>
                      Attending -{" "}
                      <span className="text-[#64748B]">Nurse Name</span>
                    </p>
                    <p className="flex max-w-[250px] items-start justify-start truncate text-ellipsis">
                      Allergies - {"  "}
                      <span className="flex max-w-[250px] items-start justify-start truncate text-ellipsis text-[#64748B]">
                        {getDistinctAllergyTypes(patient.allergies).length > 0
                          ? getDistinctAllergyTypes(patient.allergies)
                          : "None"}
                      </span>
                    </p>
                    <p>
                      Code -{" "}
                      <span
                        className={` ${
                          patient.codeStatus === "DNR"
                            ? "text-[#DB3956]"
                            : "text-[#1B84FF]"
                        }`}
                      >
                        {patient.codeStatus}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="relative flex h-full w-1/6 flex-col items-center justify-between border-l-4 border-solid border-[#F4F4F4]">
                  <div className="gray-1 flex h-full w-full cursor-pointer flex-col items-center justify-center border-b-4 border-[#F4F4F4]">
                    <Image
                      src="/icons/chart-order.svg"
                      alt="order"
                      width={28}
                      height={28}
                      className="pointer-events-none select-none"
                    />
                    Orders
                    <p
                      className={`pointer-events-none absolute -z-[0] -mr-7 -mt-7 flex h-4 w-4 select-none items-center justify-center rounded-full bg-[#DB3956] text-[10px] text-white ${
                        patient.medicationlogs.length === 0 ? "hidden" : ""
                      }`}
                    >
                      {durationLogsCount}
                    </p>
                  </div>

                  <div
                    className="gray-1 flex h-full w-full cursor-pointer flex-col items-center justify-center border-b-4 border-[#F4F4F4]"
                    onClick={() => {
                      setPatientUuid(patient.uuid);
                      isModalOpen(true);
                      setPatientName(
                        `${patient.firstName} ${patient.lastName}`,
                      );
                    }}
                  >
                    <Image
                      src="/icons/chart-prn.svg"
                      alt="prn"
                      width={24}
                      height={24}
                      className="pointer-events-none select-none"
                    />
                    PRN
                    {Object.entries(getPRNCount(patient.medicationlogs)).map(
                      ([type, count]) => (
                        <span
                          key={type}
                          className={`pointer-events-none absolute z-10 -mr-7 -mt-7 flex h-4 w-4 select-none items-center justify-center rounded-full bg-[#DB3956] text-[10px] text-white ${
                            count === 0 ? "hidden" : ""
                          }`}
                        >
                          {count}
                        </span>
                      ),
                    )}
                  </div>
                  <div className="flex ">
                    <div
                      className="flex w-1/2 cursor-pointer flex-col items-center justify-center m-2"
                      onClick={() => {
                        setPatientUuid(patient.uuid);
                        isNotesModalOpen(true);
                        setPatientName(
                          `${patient.firstName} ${patient.lastName}`,
                        );
                      }}
                    >
                      <Image
                        src="/icons/chart-note.svg"
                        alt="status"
                        width={28}
                        height={28}
                        className="pointer-events-none select-none"
                      />
                      N
                    </div>
                    <div className="h-full w-2 bg-[#F4F4F4]"></div>

                    <div
                      className="flex w-1/2 cursor-pointer flex-col items-center justify-center m-2"
                      onClick={() => {
                        setIsLoading(true);
                        handlePatientClick(patient.uuid, "appointment");
                      }}
                    >
                      <Image
                        src="/icons/chart-appointment.svg"
                        alt="status"
                        width={28}
                        height={28}
                        className="pointer-events-none select-none"
                      />
                      A
                    </div>
                  </div>
                </div>

                <div className="overflow flex h-full w-[127px] flex-col items-center justify-center overflow-hidden border-l-2 border-solid border-[#F4F4F4] bg-[#007C851A]">
                  {patient.medicationlogs.length !== 0 &&
                    patient.medicationlogs.some(
                      (log: any) =>
                        log.medicationLogStatus === "pending" &&
                        moment(log.medicationLogsTime, "HH:mm").format(
                          "HHmm",
                        ) <= currentTime,
                    ) && (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center"
                      >
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="max-w-[100%] truncate">
                              <div
                                className={`cursor-pointer rounded-full bg-[#FACC15] p-1.5`}
                              >
                                <Image
                                  src="icons/card-list.svg"
                                  alt="list"
                                  width={24}
                                  height={24}
                                  className="pointer-events-none select-none"
                                />
                                <div className="absolute -mt-6 ml-5 h-full">
                                  <span className="pointer-events-none absolute flex h-4 w-4 select-none items-center justify-center rounded-full bg-[#DB3956] text-[10px] font-light text-white">
                                    {
                                      patient.medicationlogs.filter(
                                        (log: any) =>
                                          log.medicationLogStatus ===
                                            "pending" &&
                                          moment(
                                            log.medicationLogsTime,
                                            "HH:mm",
                                          ).format("HHmm") <= currentTime,
                                      ).length
                                    }
                                  </span>
                                </div>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="overflow-visible text-wrap rounded-[2.4px] bg-[#007C85] text-white">
                              <p className="relative z-[51] flex flex-col gap-2 break-words p-1 text-[15px]">
                                {patient.medicationlogs
                                  .filter(
                                    (log: {
                                      medicationLogStatus: string;
                                      medicationLogsTime: any;
                                    }) =>
                                      log.medicationLogStatus === "pending" &&
                                      moment(
                                        log.medicationLogsTime,
                                        "HH:mm",
                                      ).format("HHmm") <= currentTime,
                                  )
                                  .map(
                                    (
                                      log: {
                                        [x: string]: ReactNode;
                                        medicationLogsName:
                                          | string
                                          | number
                                          | boolean
                                          | React.ReactElement<
                                              any,
                                              | string
                                              | React.JSXElementConstructor<any>
                                            >
                                          | Iterable<React.ReactNode>
                                          | React.ReactPortal
                                          | React.PromiseLikeOfReactNode
                                          | null
                                          | undefined;
                                        medicationType:
                                          | string
                                          | number
                                          | boolean
                                          | React.ReactElement<
                                              any,
                                              | string
                                              | React.JSXElementConstructor<any>
                                            >
                                          | Iterable<React.ReactNode>
                                          | React.ReactPortal
                                          | React.PromiseLikeOfReactNode
                                          | null
                                          | undefined;
                                      },
                                      logIndex: React.Key | null | undefined,
                                    ) => (
                                      <div
                                        key={logIndex}
                                        className="text-start font-semibold"
                                      >
                                        {log.medicationLogsName}
                                      </div>
                                    ),
                                  )}
                              </p>
                              <div className="absolute left-1/2 top-[-5px] z-[49] h-3 w-3 -translate-x-1/2 rotate-45 transform bg-[#007C85]"></div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    )}
                </div>
              </div>
              {/* <MobileTimeGraph patient={patient.medicationlogs}/> */}
            </div>
          );
        })}
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
      </div>
    </div>
  );
};

export default PatientCard;
