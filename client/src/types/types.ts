export interface DayEvent {
  intersection: string;
  event: string;
}

export interface Day {
  id: string;
  events: DayEvent[];
}

export interface DaysList {
  days_list: Day[];
}

export interface CriticalEventsResponse {
  critical_events: string[];
}

export interface CriticalEventsState {
  daysList: DaysList;
  criticalEvents: string[];
  loading: boolean;
  daysInput: string;
}
