// import { Button } from "components/ListContacts/ListContacts.styled";
import { Button } from '../Button/Button';
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "Redux/auth/operation";
import { selectUser } from "Redux/auth/selector";
import { Flex, Text } from "@chakra-ui/react";




export const UserMenu = () => {

  const dispatch = useDispatch()
  const user = useSelector(selectUser);

  return (
    <Flex as='nav' alignItems='center' gap='20px'>
      <Text fontSize='xl'>Hello, {user.name} ✌(•◡•)</Text>
      <Button onClick={()=>dispatch(logOut())}>Logout</Button>
    </Flex>
  )
}