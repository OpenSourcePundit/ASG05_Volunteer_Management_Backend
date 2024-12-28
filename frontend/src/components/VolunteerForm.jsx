export const VolunteerForm = ({
    handleSubmit,
    volunteerInput,
    setVolunteerInput,
    volunteer,
  }) => {
    return (
      <>
        <form className="card" onSubmit={handleSubmit}>
          <div>
            <label>
              <strong>Name: </strong>
              <input
                placeholder="Emily Smith"
                required
                value={volunteerInput.name}
                onChange={(e) =>
                  setVolunteerInput({ ...volunteerInput, name: e.target.value })
                }
              />
            </label>
          </div>
          <div>
            <label>
              <strong>Contact: </strong>
              <input
                type="number"
                min={0}
                placeholder="8782376483"
                required
                value={volunteerInput.contactInfo}
                onChange={(e) =>
                  setVolunteerInput({
                    ...volunteerInput,
                    contactInfo: e.target.value,
                  })
                }
              />
            </label>
          </div>
          <div>
            <label>
              <strong>Skills: </strong>
              <input
                placeholder="Separated by commas"
                required
                value={volunteerInput.skills}
                onChange={(e) =>
                  setVolunteerInput({
                    ...volunteerInput,
                    skills: e.target.value.replace(/ /g, "").split(","),
                  })
                }
              />
            </label>
          </div>
          <div>
            <label>
              <strong>Available: </strong>
              <span>
                <label>
                  <input
                    type="radio"
                    name="availability"
                    value={true}
                    onChange={(e) =>
                      setVolunteerInput({
                        ...volunteerInput,
                        availability: e.target.value,
                      })
                    }
                    checked={volunteerInput.availability === true}
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="availability"
                    value={false}
                    onChange={(e) =>
                      setVolunteerInput({
                        ...volunteerInput,
                        availability: e.target.value,
                      })
                    }
                    checked={volunteerInput.availability === false}
                  />{" "}
                  No
                </label>
              </span>
            </label>
          </div>
          <div>
            <label>
              <strong>Areas of Interest: </strong>
              <input
                placeholder="Separated by commas"
                required
                value={volunteerInput.areasOfInterest}
                onChange={(e) =>
                  setVolunteerInput({
                    ...volunteerInput,
                    areasOfInterest: e.target.value.replace(/ /g, "").split(","),
                  })
                }
              />
            </label>
          </div>
          <div>
            <label>
              <strong>Volunteer History: </strong>
              <input
                placeholder="Separated by commas"
                value={volunteerInput.volunteerHistory}
                onChange={(e) =>
                  setVolunteerInput({
                    ...volunteerInput,
                    volunteerHistory: e.target.value.replace(/ /g, "").split(","),
                  })
                }
              />
            </label>
          </div>
          <div>
            <label>
              <strong>Assign Events: </strong>
              <input
                placeholder="Separated by commas"
                value={volunteerInput.assignedEvents}
                onChange={(e) =>
                  setVolunteerInput({
                    ...volunteerInput,
                    assignedEvents: e.target.value.replace(/ /g, "").split(","),
                  })
                }
              />
            </label>
          </div>
          <input type="submit" value={volunteer ? "Update" : "Add"} />
        </form>
      </>
    );
  };
  