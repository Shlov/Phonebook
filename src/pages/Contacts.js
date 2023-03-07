
import { FormContact } from "../components/FormContact/FotmContact";
import { ListContacts } from "../components/ListContacts/ListContacts";
import { SearchContact } from "../components/SearchContact/SearchContact";
import { useEffect, useState } from "react";
import { fatchContacts } from "Redux/contacts/operations";
import { useDispatch } from "react-redux";
import { Heading } from "@chakra-ui/react";
// import { Divider, Heading } from "@chakra-ui/react";

export const Contacts = () => {

  const [isEditedSt, setIsEditedSt] = useState(null);

  const newEditContact = (contact) => {
    setIsEditedSt(contact)
  }

  const dispatch = useDispatch()
  useEffect(() => {dispatch(fatchContacts())},[dispatch])

  return (
    <>
      <div>
        <Heading size='xl'>Phonebook</Heading> 
        {/* <Divider /> */}
        <FormContact editedSt={isEditedSt} onEdit={newEditContact}/>
        {/* <Divider /> */}
        <Heading size='lg'>Contacts</Heading>
        <SearchContact />
        <ListContacts onEdit={newEditContact}/>
      </div>
    </>    
  )
};