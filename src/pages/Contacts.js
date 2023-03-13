
import { FormContact } from "../components/FormContact/FotmContact";
import { ListContacts } from "../components/ListContacts/ListContacts";
import { SearchContact } from "../components/SearchContact/SearchContact";
import { useEffect, useState } from "react";
import { fatchContacts } from "Redux/contacts/operations";
import { useDispatch } from "react-redux";
import { Heading } from "@chakra-ui/react";
// import { Divider, Heading } from "@chakra-ui/react";

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
      <div>
        <Heading size='xl' p='12px'>Phonebook</Heading> 
        {/* <Divider /> */}
        <FormContact editedSt={isEdited} onEdit={newEditContact}/>
        {/* <Divider /> */}
        <Heading size='lg' p='8px'>Contacts</Heading>
        <SearchContact />
        <ListContacts onEdit={newEditContact} onEditable={isEdited}/>
      </div>
    </>    
  )
};