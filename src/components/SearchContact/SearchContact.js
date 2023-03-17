import { setFilter } from "Redux/contacts/filterSlice";
import { useDispatch } from "react-redux"
import { Input, Label } from "./SearchContact.styled"
import { Card, Flex, CardBody, Text } from "@chakra-ui/react";



export const SearchContact = () => {

  const dispatch = useDispatch();

  return (
    <Card>
      <CardBody>
      <Flex as={Label} alignItems='center'>
        <Text fontSize='2xl' as='b'>Find contacts by name</Text>
        <Input
          onChange={(evnt) => {dispatch(setFilter(evnt.target.value))}}
          type="text" 
          />
        </Flex>
      </CardBody>
    </Card>
  )
}