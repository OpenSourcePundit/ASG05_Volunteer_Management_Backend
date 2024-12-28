import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addVolunteerAsync,
  updateVolunteerAsync,
} from "../features/volunteer/volunteerSlice";
import { VolunteerForm } from "./VolunteerForm";

export const AddUpdateVolunteer = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();

  const volunteer = state ? state : null;

  const [volunteerInput, setVolunteerInput] = useState({
    name: volunteer ? volunteer.name : "",
    contactInfo: volunteer ? volunteer.contactInfo : 0,
    skills: volunteer ? volunteer.skills.join(", ") : "",
    availability: volunteer ? volunteer.availability : true,
    areasOfInterest: volunteer ? volunteer.areasOfInterest.join(", ") : null,
    volunteerHistory: volunteer ? volunteer.volunteerHistory.join(", ") : null,
    assignedEvents: volunteer ? volunteer.assignedEvents.join(", ") : null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (volunteer) {
      dispatch(
        updateVolunteerAsync({
          id: volunteer._id,
          updatedVolunteer: volunteerInput,
        })
      );
      navigate(`/volunteer/${volunteer._id}`);
    } else {
      dispatch(addVolunteerAsync(volunteerInput));
      navigate("/");
    }
  };
  return (
    <>
      <h2>{volunteer ? "Update" : "Add"} Volunteer</h2>
      <VolunteerForm
        handleSubmit={handleSubmit}
        volunteerInput={volunteerInput}
        setVolunteerInput={setVolunteerInput}
        volunteer={volunteer}
      />
    </>
  );
};