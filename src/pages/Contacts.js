
import { FormContact } from "../components/FormContact/FotmContact";
import { ListContacts } from "../components/ListContacts/ListContacts";
import { SearchContact } from "../components/SearchContact/SearchContact";
import { useEffect } from "react";
import { fatchContacts } from "Redux/contacts/operations";
import { useDispatch } from "react-redux";

export const Contacts = () => {

  const dispatch = useDispatch()
  useEffect(() => {dispatch(fatchContacts())},[dispatch])

  return (
    <>
      <h2>Contacts</h2>
      <div style={{fontSize: 40,}}>
        <h2>Phonebook</h2> 
        <FormContact />
        <h3>Contacts</h3>
        <SearchContact />
        <ListContacts />
      </div>
    </>    
  )
};