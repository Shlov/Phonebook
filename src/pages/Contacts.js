
import { FormContact } from "../components/FormContact/FotmContact";
import { ListContacts } from "../components/ListContacts/ListContacts";
import { SearchContact } from "../components/SearchContact/SearchContact";
import { useEffect, useState } from "react";
import { fatchContacts } from "Redux/contacts/operations";
import { useDispatch } from "react-redux";

export const Contacts = () => {

  const [isEditedSt, setIsEditedSt] = useState({name: 'Test', number: '0000'});

  const newEditContact = (contact) => {
    setIsEditedSt(contact)
  }

  const dispatch = useDispatch()
  useEffect(() => {dispatch(fatchContacts())},[dispatch])

  return (
    <>
      <h2>Contacts</h2>
      <div>
        <h2>Phonebook</h2> 
        <FormContact editedSt={isEditedSt}/>
        <h3>Contacts</h3>
        <SearchContact />
        <ListContacts onEdit={newEditContact}/>
      </div>
    </>    
  )
};