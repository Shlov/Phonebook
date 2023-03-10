import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Box, Container, Center, Breadcrumb,  BreadcrumbItem,  BreadcrumbLink, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "Redux/auth/selector";
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export const Layout = () => {
  // const { colorMode, toggleColorMode } = useColorMode();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const bgHeader = useColorModeValue('purple.50', 'gray.700')
  const bgFooter = useColorModeValue('gray.200', 'gray.700')

  return (
    <Flex minHeight='100vh' flexDirection='column'>
      <Box as='header'>
        <Container maxW="container.lg" bg={bgHeader} h='60px' display='flex' justifyContent='space-between' alignItems='center'>
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
            <Flex alignItems='Center' gap='20px'>
              <ColorModeSwitcher/>
              {isLoggedIn ? <UserMenu/> : <AuthNav/>}
            </Flex>

        </Container>
      </Box>
      <Toaster />
      <Suspense fallback={<Loader/>}>
        <Flex as='main' flex='1 1 auto'>
          <Container maxW="container.lg" display='flex' flexDirection='column' alignItems='center' gap='20px'>
            <Outlet />
          </Container>
        </Flex>
      </Suspense>
      <Box as='footer'>
        <Container maxW="container.lg">
          <Center bg={bgFooter} h='40px' color='white'>
            by Shlov  ʕ·͡ᴥ·ʔ
          </Center>
        </Container>
      </Box>
      {/* <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button> */}
    </Flex>
  )
}