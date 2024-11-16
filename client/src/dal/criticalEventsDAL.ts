import { CriticalEventsResponse, DayEvent } from "../types/types";
import { HttpClient } from "../utils/httpClient";

/**
 * Data Access Layer for Critical Events.
 */
export class CriticalEventsDAL {
  /**
   * Fetches critical events by sending a POST request to the API.
   * @param payload - The payload containing the days_list to send to the API.
   * @returns A promise resolving to the critical events response.
   */
  static async fetchCriticalEvents(payload: {
    days_list: DayEvent[][];
  }): Promise<CriticalEventsResponse> {
    return HttpClient.post<CriticalEventsResponse, typeof payload>(
      "/critical-events/",
      payload
    );
  }
}
