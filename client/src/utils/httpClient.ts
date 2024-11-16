import { axiosInstance } from "../services/axios";

/**
 * Utility class for making HTTP requests.
 * Provides static methods for generic HTTP operations.
 */
export class HttpClient {
  /**
   * Sends a generic POST request to the API.
   * @param url - The API endpoint to send the request to.
   * @param payload - The payload to include in the request body.
   * @returns A promise resolving to the response data.
   */
  static async post<TResponse, TPayload = unknown>(
    url: string,
    payload: TPayload
  ): Promise<TResponse> {
    try {
      const response = await axiosInstance.post<TResponse>(url, payload);
      return response.data;
    } catch (error) {
      console.error("Error in HttpClient while sending POST request:", error);
      throw error;
    }
  }
}
