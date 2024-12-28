import { Link } from "react-router-dom";

export const VolunteerTable = ({ volunteers }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Availability</th>
          </tr>
          {volunteers?.map(({ _id, name, contactInfo, availability }) => (
            <tr key={_id} className="list-items">
              <td>
                <Link to={`/volunteer/${_id}`}>{name}</Link>
              </td>
              <td>
                <Link to={`/volunteer/${_id}`}>{contactInfo}</Link>
              </td>
              <td>
                <Link to={`/volunteer/${_id}`}>
                  {availability ? "Available" : "Not Available"}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};