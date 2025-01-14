import axios, { AxiosError } from "axios";
import { onNavigate } from "@/actions/navigation";
import { getAccessToken, setAccessToken } from "../login-api/accessToken";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function fetchVitalSignsByPatient(
  patientUuid: string,
  term: string,
  currentPage: number,
  sortBy: string,
  sortOrder: "ASC" | "DESC",
  perPage: number,
  router: any // Pass router instance as a parameter
): Promise<any> {
  const requestData = {
    patientUuid: patientUuid.toUpperCase(),
    term: term,
    page: currentPage,
    sortBy: sortBy,
    sortOrder: sortOrder,
    perPage: perPage
  };
  try {
    console.log("searchPatient", requestData);
    const accessToken = getAccessToken();
    if (!accessToken) {
      throw new Error("Unauthorized Access");
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.post(
      `${apiUrl}/vital-signs/list/${patientUuid}`,
      requestData,
      { headers }
    );

    console.log(response.data);
    const patientVitalSigns = response.data;
    console.log(patientVitalSigns, "patient vital-signs after search");
    return patientVitalSigns;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.message === "Network Error") {
        // Handle network error
        console.error("Connection refused or network error occurred.");
        return Promise.reject(
          new Error("Connection refused or network error occurred.")
        );
      }
      if (axiosError.response?.status === 401) {
        setAccessToken("");
        onNavigate(router, "/login");
        return Promise.reject(new Error("Unauthorized access"));
      }
    }
    console.error("Error searching patient list:", error.message);
    return Promise.reject(error);
  }
}

export async function createVitalSignsOfPatient(
  patientId: string,
  formData: any,
  router: any
): Promise<any> {
  try {
    const accessToken = getAccessToken();
    if (!accessToken) {
      throw new Error("Unauthorized Access");
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    // Make the API request to create the VitalSign
    const response = await axios.post(
      `${apiUrl}/vital-signs/${patientId}`,
      formData,
      { headers }
    );
    const createdVitalSign = response.data;

    return createdVitalSign;
  } catch (error) {
    console.error("Error creating VitalSign:", error);
    throw error; // Rethrow the error to handle it in the component
  }
}

export async function updateVitalSignsOfPatient(
  prescriptionUuid: string,
  formData: any,
  router: any
): Promise<any> {
  try {
    console.log(formData, "formdata");
    const accessToken = getAccessToken();
    if (!accessToken) {
      throw new Error("Unauthorized Access");
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    // Make the API request to create the VitalSign
    const response = await axios.patch(
      `${apiUrl}/vital-signs/update/${prescriptionUuid}`,
      formData,
      { headers }
    );
    const updatedVitalSign = response.data;

    return updatedVitalSign;
  } catch (error) {
    if ((error as AxiosError).response?.status === 401) {
      setAccessToken("");
      onNavigate(router, "/login");
      return Promise.reject(new Error("Unauthorized access"));
    }
    console.error((error as AxiosError).message);
  }
}
