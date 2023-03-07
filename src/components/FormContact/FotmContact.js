import { Button } from '../Button/Button';
import { useEffect, useState } from "react";
import { Input , Form} from "./FormContact.styled";
import { useDispatch, useSelector } from "react-redux";
import { addContact, replaceContact } from "Redux/contacts/operations";
import { getContacts } from "Redux/contacts/selectors";
import { Flex, Text, Card, CardBody } from '@chakra-ui/react';


export const FormContact = ({editedSt, onEdit}) => {

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts).items;
  const [nameNewContact, setNameNewContact] = useState('');
  const [numberNewContact, setNumberNewContact] = useState('');

  const recordName = (evnt) => {
    setNameNewContact(evnt.target.value)
  }
  
  const recordNumber = (evnt) => {
    setNumberNewContact(evnt.target.value)
  }

  useEffect(()=>{
      if (editedSt) {
        setNameNewContact(editedSt.name)
      }
  },[editedSt]);

  useEffect(()=>{
    if (editedSt) {
      setNumberNewContact(editedSt.number)
    }
},[editedSt]);

  const resetForm = () => {
    onEdit(null)
    setNameNewContact('')
    setNumberNewContact('')
  }

  const transferContact = (evnt) => {
    evnt.preventDefault();
    if (editedSt) {
      if (editedSt.name === nameNewContact &&  editedSt.number === numberNewContact) {
        return alert(`Сontact not changes.`)
      } else {
        const changedСontact = {id: editedSt.id, name: nameNewContact, number: numberNewContact};
        dispatch(replaceContact(changedСontact))
        resetForm()
      }
    } else {
      const includeName = contacts.some(({name}) => name.toLowerCase() === nameNewContact.toLowerCase())
      const includeNumber = contacts.some(({number}) => number.toLowerCase() === numberNewContact.toLowerCase())
      if (includeName) {
        return alert(`${nameNewContact} is already in contacts.`)
      } else if (includeNumber) {
        return alert(`${numberNewContact} is already in contacts.`)
      } else {
        dispatch(addContact({name: nameNewContact, number: numberNewContact}));
        resetForm()
      }
    }
  }

  return (
    <Card>
      <CardBody>
        <Form action="" onSubmit = {(e) => transferContact(e)}>
          <Flex as='label' alignItems='center'>
            <Text fontSize='2xl' as='b'>Name</Text>
            <Input
            onChange = {(e) => recordName(e)}
            type="text"
            name="name"
            value={nameNewContact}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
          </Flex>
          <Flex as='label' alignItems='center'>
            <Text fontSize='2xl' as='b'>Number</Text>
            <Input
              onChange = {(e) => recordNumber(e)}
              type="tel"
              name="number"
              value={numberNewContact}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              />
          </Flex>
          <Button type="submit" >
            {editedSt ? 'Edit contact' : 'Add contact'}
          </Button>
        </Form>
      </CardBody>
    </Card>
  )
}


// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from 'yup';

      // const isEdited = useSelector(getIsEdited);

    // const schema = Yup.object().shape({
//   name: Yup.string().trim().strict().required(),
//   number: Yup.string().required(),
// });

  // <Formik initialValues={isEdited ? {name: isEdited.name, number: isEdited.number} : initialValues} validationSchema={schema} onSubmit={transferContact}>
  // <Formik initialValues={editedSt ? {name: editedSt.name, number: editedSt.number} : initialValues} validationSchema={schema} onSubmit={transferContact}>
  // <Formik initialValues={editedSt} validationSchema={schema} onSubmit={transferContact}>
  //   <Form>
  //     <label>
  //       Name
  //       <Field type = 'text' name = 'name' 
  //       // onChange = {(e) => recordName(e)}
  //       />
  //       <ErrorMessage component="div" name='name'/>
  //     </label>
  //     <label>
  //       Number
  //       <Field type = 'tel' name = 'number' 
  //       // onChange = {(e) => recordNumber(e)}
  //       />
  //       <ErrorMessage component="div" name='number'/>
  //     </label>
  //     <Button type="submit">
  //       {isEdited ? 'Edit contact' : 'Add contact'}
  //     </Button>
  //   </Form>
  // </Formik>  


    // evnt.preventDefault();
    
    // const include = contacts.some(({name}) => name.toLowerCase() === nameNewContact.toLowerCase())
    // if (include) {
    //   return alert(`${nameNewContact} is already in contacts.`)
    // } else {
    //   dispatch(addContact({name: nameNewContact, number}));
    // }
    // evnt.target.reset()