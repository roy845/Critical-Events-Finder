import { CriticalEventsResponse, DayEvent } from "../types/types";
import {
  CriticalEventsResponseSchema,
  DaysListSchema,
} from "../schemas/schemas";
import { CriticalEventsDAL } from "../dal/criticalEventsDAL";

export class CriticalEventsRepository {
  /**
   * Fetches critical events by validating input and response.
   * @param daysList - The list of day events to validate and fetch.
   * @returns A promise resolving to the parsed critical events response.
   * @throws Error if validation or the API call fails.
   */
  static async getCriticalEvents(
    daysList: DayEvent[][]
  ): Promise<CriticalEventsResponse> {
    const validatedDaysList = this.validateDaysList(daysList);

    const response = await CriticalEventsDAL.fetchCriticalEvents({
      days_list: validatedDaysList,
    });

    return this.validateResponse(response);
  }

  /**
   * Validates the daysList input.
   * @param daysList - The list of day events to validate.
   * @throws Error if validation fails.
   */
  private static validateDaysList(daysList: DayEvent[][]): DayEvent[][] {
    const parsedDaysList = DaysListSchema.safeParse(daysList);
    if (!parsedDaysList.success) {
      console.error(
        "Validation error for daysList:",
        parsedDaysList.error.errors
      );
      throw new Error("Invalid data format for daysList");
    }
    return parsedDaysList.data;
  }

  /**
   * Validates the API response.
   * @param response - The raw API response to validate.
   * @throws Error if validation fails.
   */
  private static validateResponse(response: unknown): CriticalEventsResponse {
    const parsedResponse = CriticalEventsResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error(
        "Validation error for response:",
        parsedResponse.error.errors
      );
      throw new Error("Invalid response format from API");
    }
    return parsedResponse.data;
  }
}
