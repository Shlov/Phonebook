import { Flex } from "@chakra-ui/react"
// import { Flex, Heading } from "@chakra-ui/react"
import { Hero } from "components/Hero/Hero";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "Redux/auth/selector";
import { Button } from '../components/Button/Button';

export const Home = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Flex flexDirection='column' alignItems='center' gap='20px' justifyContent='center' w='820px'>
      {/* <Heading size='xl' w='600px'>
        Welcome to the online phone book page.
        Do not lose touch with important people.
        Write the contact in the phone book...
      </Heading> */}
        <Hero/>
      {isLoggedIn 
      ? <Button><NavLink to="/contacts"> to contacts...</NavLink></Button>
      : <Button><NavLink to="/login"> to login...</NavLink></Button>}
    </Flex>
  )
};