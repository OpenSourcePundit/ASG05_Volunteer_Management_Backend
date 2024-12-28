import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEventAsync, updateEventAsync } from "../features/event/eventSlice";
import { useLocation, useNavigate } from "react-router-dom";

export const AddUpdateEvent = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();

  const event = state ? state : null;

  const [eventInput, setEventInput] = useState({
    eventName: event ? event.eventName : "",
    date: event ? event.date : "",
    location: event ? event.location : "",
    description: event ? event.description : "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (event) {
      dispatch(
        updateEventAsync({
          id: event._id,
          updatedEvent: eventInput,
        })
      );
      navigate(`/event/${event._id}`);
    } else {
      dispatch(addEventAsync(eventInput));
      navigate("/events");
    }
  };
  return (
    <>
      <h2>{event ? "Update" : "Add"} Event</h2>
      <form className="card" onSubmit={handleSubmit}>
        <div>
          <label>
            <strong>Event Name: </strong>{" "}
            <input
              placeholder="Community meeting"
              required
              value={eventInput.eventName}
              onChange={(e) =>
                setEventInput({ ...eventInput, eventName: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label>
            <strong>Date of event: </strong>{" "}
            <input
              type="date"
              required
              value={eventInput.date}
              onChange={(e) =>
                setEventInput({ ...eventInput, date: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label>
            <strong>Location: </strong>
            <input
              placeholder="Town Square"
              required
              value={eventInput.location}
              onChange={(e) =>
                setEventInput({ ...eventInput, location: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label>
            <strong>Description: </strong>
            <input
              placeholder="Description"
              required
              value={eventInput.description}
              onChange={(e) =>
                setEventInput({ ...eventInput, description: e.target.value })
              }
            />
          </label>
        </div>
        <input type="submit" value={event ? "Update" : "Add"} />
      </form>
    </>
  );
};