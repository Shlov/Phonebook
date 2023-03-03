import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { NavLink, Outlet } from "react-router-dom";

import {
  Container,
} from "@chakra-ui/react";

export const Layout = () => {

  return (
    <Container>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </nav>
      </header>
      <Toaster />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </Container>
  )
}