import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Box, Container, Center, Breadcrumb,  BreadcrumbItem,  BreadcrumbLink, Text } from "@chakra-ui/react";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "Redux/auth/selector";

export const Layout = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  return (
    <>
      <Box as='header'>
        <Container maxW="container.lg" bg='purple.50' h='60px' display='flex' justifyContent='space-between' alignItems='center'>
          <Breadcrumb separator='👽'>
            <BreadcrumbItem  isCurrentPage={location.pathname === '/'} >
              <BreadcrumbLink as={Link} to='/'>
                <Text fontSize='xl'>Home</Text>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {isLoggedIn &&
            <BreadcrumbItem isCurrentPage={location.pathname === '/contacts'}>
              <BreadcrumbLink as={Link} to='/contacts'>
                <Text fontSize='xl'>Contacts</Text>
              </BreadcrumbLink>
            </BreadcrumbItem>}
          </Breadcrumb>
            {/* <nav>
              <NavLink to="/">Home</NavLink>
              {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
            </nav> */}
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}

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
            by Shlov  ʕ·͡ᴥ·ʔ
          </Center>
        </Container>
      </Box>
    </>
  )
}