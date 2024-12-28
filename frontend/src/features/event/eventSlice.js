import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  events: [],
  status: "idle",
  error: null,
};

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  const response = await axios.get(
    "/api/v1/events/all"
  );
  return response.data.events;
});

export const addEventAsync = createAsyncThunk(
  "events/addEventAsync",
  async (event) => {
    const response = await axios.post(
      "/api/v1/events/new",
      event
    );
    return response.data.event;
  }
);

export const updateEventAsync = createAsyncThunk(
  "events/updateEventAsync",
  async ({ id, updatedEvent }) => {
    const response = await axios.put(
      `/api/v1/events/${id}`,
      updatedEvent
    );
    return response.data.event;
  }
);

export const deleteEventAsync = createAsyncThunk(
  "events/deleteEventAsync",
  async (id) => {
    const response = await axios.delete(
      `/api/v1/events/${id}`
    );
    return response.data.event;
  }
);

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = "success";
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(addEventAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addEventAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.events.push(action.payload);
      })
      .addCase(addEventAsync.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(updateEventAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateEventAsync.fulfilled, (state, action) => {
        state.status = "success";
        const updatedEvent = action.payload;
        const index = state.events.findIndex(
          (event) => event._id === updatedEvent._id
        );
        if (index !== -1) {
          state.events[index] = updatedEvent;
        }
      })
      .addCase(updateEventAsync.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(deleteEventAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteEventAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.events = state.events.filter(
          (event) => event._id !== action.payload._id
        );
      })
      .addCase(deleteEventAsync.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default eventSlice.reducer;