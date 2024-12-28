import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteEventAsync } from "./eventSlice";

export const SingleEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const event = useSelector(({ events }) =>
    events.events.find((event) => event._id === id)
  );

  if (!event) {
    return <p>Event not found!</p>;
  }

  return (
    <div>
      <h2>Event Detail</h2>
      <div className="card">
        <p>
          <strong>Name: </strong>
          {event.eventName}
        </p>
        <p>
          <strong>Date: </strong>
          {new Date(event.date).toLocaleDateString()}
        </p>
        <p>
          <strong>Location: </strong>
          {event.location}
        </p>
        <p>
          <strong>Description: </strong>
          {event.description}
        </p>
        {event.roles.length > 0 && (
          <p>
            <strong>Roles: </strong>
            <ol>
              {event.roles.map((role) => (
                <li>
                  {role.role} - {role.volunteersRequired} volunteers
                </li>
              ))}
            </ol>
          </p>
        )}
        {event.volunteers.length > 0 && (
          <p>
            <strong>Volunteers: </strong>
            <ol>
              {event.volunteers.map((volunteer) => (
                <li>
                  {volunteer.name} - {volunteer.role}
                </li>
              ))}
            </ol>
          </p>
        )}

        <Link to={`/event/edit/${id}`} state={event}>
          <button className="edit">Edit Details </button>
        </Link>

        <button
          onClick={() => {
            dispatch(deleteEventAsync(id));
            navigate("/events");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};