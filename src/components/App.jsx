
import { FormContact } from "./FormContact/FotmContact";
import { Contacts } from "./Contacts/Contacts";
import "@fontsource/rajdhani";
import { useEffect } from "react";
import { fatchContacts } from "Redux/operations";
import { useDispatch } from "react-redux";


export const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {dispatch(fatchContacts())},[dispatch])

  return (
    <div style={{fontSize: 40,}}>
      <h2>Phonebook</h2> 
        <FormContact 
        />
      <h3>Contacts</h3>
        <Contacts 
      />
    </div>
  );
}
