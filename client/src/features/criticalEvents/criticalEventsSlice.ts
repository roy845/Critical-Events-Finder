import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import {
  CriticalEventsResponse,
  CriticalEventsState,
  Day,
  DayEvent,
  DaysList,
} from "../../types/types";
import { getCriticalEvents } from "../../services/api";

const initialState: CriticalEventsState = {
  daysList: { days_list: [] as Day[] },
  criticalEvents: [] as string[],
  loading: false as boolean,
  daysInput: "" as string,
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
        field: "intersection" | "event";
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
        if (action.payload.length > 0) {
          toast.success("Critical events found!");
        } else {
          toast.info("No critical events found.");
        }
      })
      .addCase(fetchCriticalEvents.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {
  setDaysInput,
  setDaysList,
  addDays,
  addEvent,
  setCriticalEvents,
  removeLastEvent,
  removeDay,
  updateEventField,
  resetForm,
} = criticalEventsSlice.actions;

export default criticalEventsSlice.reducer;
