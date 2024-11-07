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

export type SortOrder = "asc" | "desc" | null;

export type AllowedFieldType = "intersection" | "event";

export interface CriticalEventsState {
  daysList: DaysList;
  criticalEvents: string[];
  loading: boolean;
  daysInput: string;
  searchCriticalEvents: string;
  isTyping: boolean;
  sortOrder: SortOrder;
  currentPage: number;
  itemsPerPage: number;
}

export interface TabsState {
  activeTab: string;
}
