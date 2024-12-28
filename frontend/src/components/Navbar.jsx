import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const getStyles = ({ isActive }) => ({
    color: isActive ? "rgb(231, 91, 201)" : "",
    textDecoration: isActive ? "underline" : "",
  });
  return (
    <>
      <nav>
        <NavLink style={getStyles} to="/">
          Volunteers
        </NavLink>
        <NavLink style={getStyles} to="/events">
          Events
        </NavLink>
      </nav>
    </>
  );
};