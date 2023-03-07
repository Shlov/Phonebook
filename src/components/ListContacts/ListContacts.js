import { deleteContact } from "Redux/contacts/operations";
import { getContacts, getFilter, getIsLoading } from "Redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
// import { Item, List } from "./ListContacts.styled";
import { Loader } from "components/Loader/Loader";
import { Button} from '../Button/Button';
import { Table, Tbody, Tr, Td, TableContainer, Center, Avatar, Text, } from '@chakra-ui/react'

export const ListContacts = ({onEdit}) => {

  const contactsState = useSelector(getContacts).items;
  const filter = useSelector(getFilter).query;
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  const contacts = contactsState.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <>
      { isLoading 
        ? <Loader />
        : <Center>
        <TableContainer maxWidth='100%'>
          <Table variant='simple' size='sm'>
            <Tbody>
              {contacts.map(contact =>
              <Tr key = {contact.id}>
                <Td>
                  <Avatar name={contact.name} bg='teal.500' size='sm' color='gray.800' />
                </Td>
                <Td >
                  <Text>{contact.name}</Text>
                </Td>
                <Td>
                  <Text>{contact.number}</Text> 
                </Td>
                <Td isNumeric>
                  <Button onClick = {() => onEdit(contact)}>Edit</Button>
                  <Button onClick = {() => dispatch(deleteContact(contact.id))}>Delete</Button>
                </Td>
              </Tr>)}
            </Tbody>
          </Table>
        </TableContainer>
          </Center>
      }
    </>
  )
}

