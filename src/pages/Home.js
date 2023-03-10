import { Heading } from "@chakra-ui/react"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "Redux/auth/selector";
import { Button } from '../components/Button/Button';

export const Home = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Heading size='xl' w='620px'>
        Welcome to the online phone book page.
        Do not lose touch with important people.
        Write the contact in the phone book...
      </Heading>
      {isLoggedIn 
      ? <Button><NavLink to="/contacts"> to contacts...</NavLink></Button>
      : <Button><NavLink to="/login"> to login...</NavLink></Button>}
    </>
  )
};