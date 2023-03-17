
import { FormContact } from "../components/FormContact/FotmContact";
import { ListContacts } from "../components/ListContacts/ListContacts";
import { SearchContact } from "../components/SearchContact/SearchContact";
import { useEffect, useState } from "react";
import { fatchContacts } from "Redux/contacts/operations";
import { useDispatch } from "react-redux";
import { Flex, Heading } from "@chakra-ui/react";

export const Contacts = () => {

  const [isEdited, setIsEdited] = useState(null);

  const newEditContact = (contact) => {
    setIsEdited(contact)
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fatchContacts())
  },[dispatch])

  return (
    <>
      <Flex flexDirection='column' >
        <Heading size='xl' p='12px'>Phonebook</Heading> 
        <FormContact editedSt={isEdited} onEdit={newEditContact}/>
        <Heading size='lg' p='8px'>Contacts</Heading>
        <SearchContact />
        <ListContacts onEdit={newEditContact} onEditable={isEdited}/>
      </Flex>
    </>    
  )
};
