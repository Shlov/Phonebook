import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { NavLink, Outlet } from "react-router-dom";

import {
  Container,
} from "@chakra-ui/react";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "Redux/auth/selector";

export const Layout = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isRefreshing = useSelector(selectIsRefreshing);
  console.log(isLoggedIn)

  return (
    <Container maxW="container.sm" my={{ base: 0, md: 8 }}>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          {/* <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink> */}
        </nav>
        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        {/* <UserMenu/> */}
        
      </header>
      <Toaster />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </Container>
  )
}