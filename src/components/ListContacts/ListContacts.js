import { deleteContact } from "Redux/contacts/operations";
import { getContacts, getFilter, getIsLoading } from "Redux/contacts/selectors"
import { useDispatch, useSelector } from "react-redux"
import { Button, Item, List } from "./ListContacts.styled"
import { Loader } from "components/Loader/Loader";
// import { editContact } from "Redux/contacts/contactsSlice";


export const ListContacts = ({onEdit}) => {

  // console.log('fu', onEdit)

  const contactsState = useSelector(getContacts).items;
  const filter = useSelector(getFilter).query;
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  // const handleEditedContact = () {

  // }

  const contacts = contactsState.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <List>
      { isLoading 
        ? <Loader />
        : contacts.map(contact => 
          <Item key = {contact.id}>{contact.name}: {contact.number} 
            {/* <Button onClick = {() => dispatch(editContact(contact))}>Edit</Button> */}
            <Button onClick = {() => onEdit(contact)}>Edit</Button>
            <Button onClick = {() => dispatch(deleteContact(contact.id))}>Delete</Button>
          </Item>)}
    </List>
  )
}
