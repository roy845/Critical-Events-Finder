import { CriticalEventsRepository } from "../repository/CriticalEventsRepository";
import { CriticalEventsResponse, DayEvent } from "../types/types";

export class CriticalEventsService {
  /**
   * Public method to fetch and validate critical events.
   * @param daysList - The list of day events to fetch.
   * @returns A promise resolving to the validated critical events response.
   */
  static async getCriticalEvents(
    daysList: DayEvent[][]
  ): Promise<CriticalEventsResponse> {
    return CriticalEventsRepository.getCriticalEvents(daysList);
  }
}
