import { z } from "zod";

export const DaySchema = z.array(
  z.object({
    intersection: z.string(),
    event: z.string(),
  })
);

export const DaysListSchema = z.array(DaySchema);

export const CriticalEventsResponseSchema = z.object({
  critical_events: z.array(z.string()),
});
