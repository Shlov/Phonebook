import { NavLink } from "react-router-dom";

export const AuthNav = () => {

  return (
    <nav>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </nav>
  )
}