import {
  CriticalEventsResponseSchema,
  DaysListSchema,
} from "../schemas/schemas";
import { CriticalEventsResponse, DayEvent } from "../types/types";
import { axiosInstance } from "./axios";

export const getCriticalEvents = async (
  daysList: DayEvent[][]
): Promise<CriticalEventsResponse> => {
  const parsedDaysList = DaysListSchema.safeParse(daysList);

  if (!parsedDaysList.success) {
    console.error(
      "Validation error for daysList:",
      parsedDaysList.error.errors
    );
    throw new Error("Invalid data format for daysList");
  }

  try {
    const response = await axiosInstance.post<CriticalEventsResponse>(
      "/critical-events/",
      { days_list: parsedDaysList.data }
    );

    const parsedResponse = CriticalEventsResponseSchema.safeParse(
      response.data
    );

    if (!parsedResponse.success) {
      console.error(
        "Validation error for response:",
        parsedResponse.error.errors
      );
      throw new Error("Invalid response format from API");
    }

    return parsedResponse.data;
  } catch (error) {
    console.error("Error fetching critical events:", error);
    throw error;
  }
};
