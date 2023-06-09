// import { Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Breadcrumb,  BreadcrumbItem,  BreadcrumbLink, Text } from '@chakra-ui/react'

export const AuthNav = () => {

  const location = useLocation();

  return (
    // <Flex as='nav' >
    //   <NavLink to="/login">Login</NavLink>
    //   <NavLink to="/register">Register</NavLink>
    // </Flex>
  <Breadcrumb separator={location.pathname === '/login' ? '(≖_≖ )' : '( ≖_≖)'}>
    <BreadcrumbItem  isCurrentPage={location.pathname === '/login'} >
      <BreadcrumbLink as={Link} to='/login'>
        <Text fontSize='xl'>Login</Text>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem isCurrentPage={location.pathname === '/register'}>
      <BreadcrumbLink as={Link} to='/register'>
      <Text fontSize='xl'>Register</Text>
      </BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
  )
}