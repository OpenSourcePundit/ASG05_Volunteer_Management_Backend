import { Link } from "react-router-dom";

export const EventTable = ({ events }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Location</th>
          </tr>
          {events?.map(({ _id, eventName, date, location }) => (
            <tr key={_id} className="list-items">
              <td>
                <Link to={`/event/${_id}`}>{eventName}</Link>
              </td>
              <td>
                <Link to={`/event/${_id}`}>
                  {new Date(date).toLocaleDateString()}
                </Link>
              </td>
              <td>
                <Link to={`/event/${_id}`}>{location}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};