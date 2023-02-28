import { deleteContact } from "Redux/operations";
import { getContacts, getFilter, getIsLoading } from "Redux/selectors"
import { useDispatch, useSelector } from "react-redux"
import { Button, Item, List } from "./ListContacts.styled"
import { Loader } from "components/Loader/Loader";


export const ListContacts = () => {

  const contactsState = useSelector(getContacts).items;
  const filter = useSelector(getFilter).query;
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  console.log(isLoading)

  const contacts = contactsState.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <List>
      { isLoading 
        ? <Loader />
        : contacts.map(contact => 
          <Item key = {contact.id}>{contact.name}: {contact.number} 
          <Button onClick = {() => dispatch(deleteContact(contact.id))}>Delete</Button>
          </Item>)}
    </List>
  )
}
