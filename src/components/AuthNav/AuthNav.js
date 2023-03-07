import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Breadcrumb,  BreadcrumbItem,  BreadcrumbLink,  BreadcrumbSeparator,} from '@chakra-ui/react'

export const AuthNav = () => {

  return (
    // <Flex as='nav' >
    //   <NavLink to="/login">Login</NavLink>
    //   <NavLink to="/register">Register</NavLink>
    // </Flex>
  <Breadcrumb separator='(≖_≖ )'>
    <BreadcrumbItem>
      <BreadcrumbLink as={Link} to='/login'>
        Login
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink as={Link} to='/register'>
        Register
      </BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>

  )
}