import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { fetchVolunteers } from "./volunteerSlice";
import { VolunteerTable } from "../../components/VolunteerTable";

export const Volunteers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { volunteers, status, error } = useSelector(
    ({ volunteers }) => volunteers
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchVolunteers());
    }
  }, [status, dispatch]);

  return (
    <>
      <h2>Volunteers</h2>
      <button onClick={() => navigate("/addVolunteer")}>Add Volunteer</button>
      {status === "loading" ? (
        <div className="loader">
          <SyncLoader color={"rgb(250, 99, 124)"} />
        </div>
      ) : (
        <div>
          {status === "error" ? (
            error
          ) : volunteers.length === 0 ? (
            <h3>No Volunteers Found</h3>
          ) : (
            <VolunteerTable volunteers={volunteers} />
          )}
        </div>
      )}
    </>
  );
};