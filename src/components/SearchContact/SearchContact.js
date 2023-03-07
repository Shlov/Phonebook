import { setFilter } from "Redux/contacts/filterSlice";
import { useDispatch } from "react-redux"
import { Input, Label } from "./SearchContact.styled"
import { Card, Flex, CardBody } from "@chakra-ui/react";



export const SearchContact = () => {

  const dispatch = useDispatch();

  return (
    <Card>
      <CardBody>
  <Flex as={Label} alignItems='center'>
    {/* <Label htmlFor=""> */}
      Find contacts by name
      <Input
        onChange={(evnt) => {dispatch(setFilter(evnt.target.value))}}
        type="text" 
        />
    {/* </Label> */}
    </Flex>
  </CardBody>
</Card>

  )
}