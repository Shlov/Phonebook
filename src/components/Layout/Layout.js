import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { NavLink, Outlet } from "react-router-dom";

import {
  Box,
  Container, Flex, Center, 
} from "@chakra-ui/react";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "Redux/auth/selector";

export const Layout = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isRefreshing = useSelector(selectIsRefreshing);
  // console.log(isLoggedIn)

  return (
    <>
      <Box as='header'>
        <Container maxW="container.lg" bg='purple.50' h='60px' display='flex' justifyContent='space-between' alignItems='center'>
          {/* <Flex justifyContent='space-between' alignItems='center'> */}
            <nav>
              <NavLink to="/">Home</NavLink>
              {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
            </nav>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
          {/* </Flex> */}
        </Container>
      </Box>
      <Toaster />
      <Suspense fallback={<Loader/>}>
        <Box as='main'>
          <Container maxW="container.lg">
            <Outlet />
          </Container>
        </Box>
      </Suspense>
      <Box as='footer'>
        <Container maxW="container.lg">
          <Center bg='gray.200' h='40px' color='white'>
            by Shlov
          </Center>
        </Container>
      </Box>
    </>
  )
}