import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteVolunteerAsync } from "./volunteerSlice";

export const SingleVolunteer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const volunteer = useSelector(({ volunteers }) =>
    volunteers.volunteers.find((volunteer) => volunteer._id === id)
  );

  if (!volunteer) {
    return <p>Volunteer not found!</p>;
  }

  return (
    <div>
      <h2>Volunteer Detail</h2>
      <div className="card">
        <p>
          <strong>Name: </strong>
          {volunteer.name}
        </p>
        <p>
          <strong>Contact: </strong>
          {volunteer.contactInfo}
        </p>
        <p>
          <strong>Skills: </strong>
          {volunteer.skills.join(", ")}
        </p>
        <p>
          <strong>Areas of Interested: </strong>
          {volunteer.areasOfInterest.join(", ")}
        </p>
        <p>
          <strong>Availability: </strong>
          {volunteer.availability ? "Available" : "Not Available"}
        </p>
        {volunteer.volunteerHistory.length > 0 && (
          <p>
            <strong>Volunteer History: </strong>
            <ol>
              {volunteer.volunteerHistory.map((history) => (
                <li>{history}</li>
              ))}
            </ol>
          </p>
        )}
        {volunteer.assignedEvents.length > 0 && (
          <p>
            <strong>Assigned Event(s): </strong>
            <ol>
              {volunteer.assignedEvents.map((event) => (
                <li>{event}</li>
              ))}
            </ol>
          </p>
        )}

        <Link to={`/volunteer/edit/${id}`} state={volunteer}>
          <button className="edit">Edit Details </button>
        </Link>

        <button
          onClick={() => {
            dispatch(deleteVolunteerAsync(id));
            navigate("/");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};