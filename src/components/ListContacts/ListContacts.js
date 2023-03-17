import { deleteContact } from "Redux/contacts/operations";
import { getContacts, getFilter, getIsLoading } from "Redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Button} from '../Button/Button';
import { Table, Tbody, Tr, Td, TableContainer, Center, Avatar, Text, Stack, Skeleton, SkeletonCircle, Flex, Divider } from '@chakra-ui/react'

export const ListContacts = ({onEdit, onEditable}) => {

  const contactsState = useSelector(getContacts).items;
  const filter = useSelector(getFilter).query;
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  const contacts = contactsState.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <>
      { isLoading 
        ? <Stack w='680px'display='flex' alignItems='center' marginLeft='auto' marginRight='auto' p='12px 0px'>
              <Flex flexDirection='row' w='100%' alignItems='center' gap='28px' p='0px 16px'>
                <SkeletonCircle w='38px' h='38px' />
                <Skeleton height='40px' w='580px'/>
              </Flex>
            <Divider/>
              <Flex flexDirection='row' w='100%' alignItems='center' gap='28px' p='0px 16px'>
                <SkeletonCircle w='38px' h='38px' />
                <Skeleton height='40px' w='580px'/>
              </Flex>
            <Divider/>
              <Flex flexDirection='row' w='100%' alignItems='center' gap='28px' p='0px 16px'>
                <SkeletonCircle w='38px' h='38px' />
                <Skeleton height='40px' w='580px'/>
              </Flex>
            <Divider/>
              <Flex flexDirection='row' w='100%' alignItems='center' gap='28px' p='0px 16px'>
                <SkeletonCircle w='38px' h='38px' />
                <Skeleton height='40px' w='580px'/>
              </Flex>
            <Divider/>
          </Stack>
        : <Center p='12px'>
            <TableContainer maxWidth='100%'>
              <Table variant='simple' size='sm'>
                <Tbody>
                  {contacts.map(contact =>
                  <Tr key = {contact.id}>
                    <Td>
                      <Avatar name={contact.name} bg='#aa3bb1' w='38px' h='38px' color='gray.50' />
                    </Td>
                    <Td >
                      <Text fontSize='xl'>{contact.name}</Text>
                    </Td>
                    <Td>
                      <Text fontSize='xl'>{contact.number}</Text> 
                    </Td>
                    <Td isNumeric w='300px' display='flex' gap='16px' justifyContent='flex-end'>
                      {onEditable && onEditable.id === contact.id 
                      ? <Button onClick = {() => onEdit(null)}>Cancel</Button>
                      : <Button onClick = {() => onEdit(contact)}>Edit</Button>
                      }
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

