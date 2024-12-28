import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { fetchEvents } from "./eventSlice";
import { EventTable } from "../../components/EventTable";

export const Events = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { events, status, error } = useSelector(({ events }) => events);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchEvents());
    }
  }, [status, dispatch]);

  return (
    <>
      <h2>Events</h2>
      <button onClick={() => navigate("/addEvent")}>Add Event</button>
      {status === "loading" ? (
        <div className="loader">
          <SyncLoader color={"rgb(250, 99, 124)"} />
        </div>
      ) : (
        <div>
          {status === "error" ? (
            error
          ) : events.length === 0 ? (
            <h3>No Volunteers Found</h3>
          ) : (
            <EventTable events={events} />
          )}
        </div>
      )}
    </>
  );
};