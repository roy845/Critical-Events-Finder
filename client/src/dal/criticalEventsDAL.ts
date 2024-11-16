import { axiosInstance } from "../services/axios";
import { CriticalEventsResponse, DayEvent } from "../types/types";

export class CriticalEventsDAL {
  /**
   * Sends a POST request to the API to fetch critical events.
   * @param payload - The payload containing the days_list to send to the API.
   * @returns A promise resolving to the raw API response.
   */
  static async fetchCriticalEvents(payload: {
    days_list: DayEvent[][];
  }): Promise<CriticalEventsResponse> {
    try {
      const response = await axiosInstance.post<CriticalEventsResponse>(
        "/critical-events/",
        payload
      );
      return response.data;
    } catch (error) {
      console.error("Error in DAL while fetching critical events:", error);
      throw error;
    }
  }
}
