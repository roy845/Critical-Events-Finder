import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import criticalEventsReducer from "../features/criticalEvents/criticalEventsSlice";
import modalReducer from "../features/modalSlice";
import tabReducer from "../features/tabSlice";

export const store = configureStore({
  reducer: {
    criticalEvents: criticalEventsReducer,
    modal: modalReducer,
    tabs: tabReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
