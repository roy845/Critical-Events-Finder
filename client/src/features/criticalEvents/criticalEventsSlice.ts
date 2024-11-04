import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import {
  AllowedFieldType,
  CriticalEventsResponse,
  CriticalEventsState,
  Day,
  DayEvent,
  DaysList,
  SortOrder,
} from "../../types/types";
import { getCriticalEvents } from "../../services/api";
import { RootState } from "../../app/store";
import { ITEMS_PER_PAGE } from "../../constants/paginationConstants";

const initialState: CriticalEventsState = {
  daysList: { days_list: [] as Day[] },
  criticalEvents: [] as string[],
  loading: false as boolean,
  daysInput: "" as string,
  searchCriticalEvents: "" as string,
  isTyping: false as boolean,
  sortOrder: null,
  currentPage: 1,
  itemsPerPage: ITEMS_PER_PAGE,
};

export const fetchCriticalEvents = createAsyncThunk(
  "criticalEvents/fetchCriticalEvents",
  async (daysList: DayEvent[][], { rejectWithValue }) => {
    try {
      const result: CriticalEventsResponse = await getCriticalEvents(daysList);
      return result.critical_events;
    } catch (error: any) {
      if (error.code === "ERR_NETWORK") {
        toast.error("Network Error");
      }
      toast.error("An error occurred while fetching critical events.");
      return rejectWithValue(error);
    }
  }
);

const criticalEventsSlice = createSlice({
  name: "criticalEvents",
  initialState,
  reducers: {
    setCriticalEvents: (state, action: PayloadAction<string[]>) => {
      state.criticalEvents = action.payload;
    },
    setDaysInput: (state, action: PayloadAction<string>) => {
      state.daysInput = action.payload;
    },
    setDaysList: (state, action: PayloadAction<DaysList>) => {
      state.daysList = action.payload;
    },
    setSearchCriticalEvents: (state, action: PayloadAction<string>): void => {
      state.searchCriticalEvents = action.payload;
    },
    setIsTyping: (state, action: PayloadAction<boolean>): void => {
      state.isTyping = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<SortOrder>) => {
      state.sortOrder = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>): void => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
    addDays: (state) => {
      const numberOfDays = parseInt(state.daysInput, 10);
      if (isNaN(numberOfDays) || numberOfDays <= 0) {
        toast.error("Please enter a valid positive number of days.");
        return;
      }
      state.daysList.days_list = Array.from({ length: numberOfDays }, () => ({
        id: uuidv4(),
        events: [],
      }));
    },
    addEvent: (state, action: PayloadAction<string>) => {
      const dayId = action.payload;
      const day = state.daysList.days_list.find((day) => day.id === dayId);
      if (day) {
        day.events.push({ intersection: "", event: "" });
      }
    },
    removeLastEvent: (state, action: PayloadAction<string>) => {
      const dayId = action.payload;
      const day = state.daysList.days_list.find((day) => day.id === dayId);
      if (day) {
        day.events.pop();
      }
    },
    removeDay: (state, action: PayloadAction<string>) => {
      state.daysList.days_list = state.daysList.days_list.filter(
        (day) => day.id !== action.payload
      );
    },
    updateEventField: (
      state,
      action: PayloadAction<{
        dayId: string;
        eventIndex: number;
        field: AllowedFieldType;
        value: string;
      }>
    ) => {
      const { dayId, eventIndex, field, value } = action.payload;
      const day = state.daysList.days_list.find((day) => day.id === dayId);
      if (day) {
        day.events[eventIndex][field] = value;
      }
    },
    resetForm: (state) => {
      state.daysList = { days_list: [] };
      state.criticalEvents = [];
      state.daysInput = "";
      state.searchCriticalEvents = "";
      state.isTyping = false;
      state.sortOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCriticalEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCriticalEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.criticalEvents = action.payload;

        const numberOfCriticalEvents: number = action.payload.length;

        if (action.payload.length > 0) {
          toast.success(`${numberOfCriticalEvents} Critical events found!`);
        } else {
          toast.info("No critical events found.");
        }
      })
      .addCase(fetchCriticalEvents.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const selectFilteredCriticalEvents = createSelector(
  (state: RootState) => state.criticalEvents.criticalEvents,
  (state: RootState) => state.criticalEvents.searchCriticalEvents,
  (state: RootState) => state.criticalEvents.sortOrder,
  (criticalEvents, searchCriticalEvents, sortOrder) => {
    let filteredCriticalEvents: string[] = [...criticalEvents];
    if (searchCriticalEvents.trim()) {
      filteredCriticalEvents = filteredCriticalEvents.filter(
        (criticalEvent: string) =>
          criticalEvent
            .toLowerCase()
            .includes(searchCriticalEvents.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      filteredCriticalEvents.sort((a, b) => a.localeCompare(b));
    } else if (sortOrder === "desc") {
      filteredCriticalEvents.sort((a, b) => b.localeCompare(a));
    }

    return filteredCriticalEvents;
  }
);
export const selectPaginatedCriticalEvents = createSelector(
  selectFilteredCriticalEvents,
  (state: RootState) => state.criticalEvents.currentPage,
  (state: RootState) => state.criticalEvents.itemsPerPage,
  (filteredProducts, currentPage, itemsPerPage) => {
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }
);
export const selectTotalPages = createSelector(
  selectFilteredCriticalEvents,
  (state: RootState) => state.criticalEvents.itemsPerPage,
  (filteredProducts, itemsPerPage) =>
    Math.ceil(filteredProducts.length / itemsPerPage)
);

export const {
  setDaysInput,
  setDaysList,
  addDays,
  addEvent,
  setCriticalEvents,
  removeLastEvent,
  removeDay,
  updateEventField,
  setSearchCriticalEvents,
  resetForm,
  setIsTyping,
  setSortOrder,
  setCurrentPage,
  setItemsPerPage,
} = criticalEventsSlice.actions;

export default criticalEventsSlice.reducer;
