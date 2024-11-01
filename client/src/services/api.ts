import { CriticalEventsResponse, DayEvent } from "../types/types";
import { axiosInstance } from "./axios";

export const getCriticalEvents = async (
  daysList: DayEvent[][]
): Promise<CriticalEventsResponse> => {
  try {
    const response = await axiosInstance.post<CriticalEventsResponse>(
      "critical-events/",
      {
        days_list: daysList,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching critical events:", error);
    throw error;
  }
};
