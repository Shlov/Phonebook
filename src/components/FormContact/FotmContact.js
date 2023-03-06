import { Button } from "components/ListContacts/ListContacts.styled";
// import { useState } from "react";
// import { Input , Label, Form} from "./FormContact.styled";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { addContact, replaceContact } from "Redux/contacts/operations";
import { getContacts, getIsEdited } from "Redux/contacts/selectors";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().trim().strict().required(),
  number: Yup.string().required(),
});

export const FormContact = ({editedSt}) => {

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts).items;
  const isEdited = useSelector(getIsEdited);

  // const [nameNewContact, setNameNewContact] = useState('');
  // const [number, setNumber] = useState('');

  // const initialValues = {name: 'Test', number: '0000'}

  console.log('ed', editedSt)
  // console.log('||', editedSt ? {name: editedSt.name, number: editedSt.number} : initialValues)


  const transferContact = (evnt, {resetForm}) => {
    if (isEdited) {
      if (false) {
        return alert(`${evnt.name} contact not changes.`)
      } else {
        const changedСontact = {id: isEdited.id, name: evnt.name, number: evnt.number};
        // console.log('changedСontact', changedСontact)
        dispatch(replaceContact(changedСontact))
        resetForm()
      }
    } else {
      const include = contacts.some(({name}) => name.toLowerCase() === evnt.name.toLowerCase())
      if (include) {
        return alert(`${evnt.name} is already in contacts.`)
      } else {
        dispatch(addContact({name: evnt.name, number: evnt.number}));
        resetForm()
      }
    }
  }

  return (
  // <Formik initialValues={isEdited ? {name: isEdited.name, number: isEdited.number} : initialValues} validationSchema={schema} onSubmit={transferContact}>
  // <Formik initialValues={editedSt ? {name: editedSt.name, number: editedSt.number} : initialValues} validationSchema={schema} onSubmit={transferContact}>
  <Formik initialValues={editedSt} validationSchema={schema} onSubmit={transferContact}>
    <Form>
      <label>
        Name
        <Field type = 'text' name = 'name' 
        // onChange = {(e) => recordName(e)}
        />
        <ErrorMessage component="div" name='name'/>
      </label>
      <label>
        Number
        <Field type = 'tel' name = 'number' 
        // onChange = {(e) => recordNumber(e)}
        />
        <ErrorMessage component="div" name='number'/>
      </label>
      <Button type="submit">
        {isEdited ? 'Edit contact' : 'Add contact'}
      </Button>
    </Form>
  </Formik>  


    // <Form action="" onSubmit = {(e) => transferContact(e)}>
    //   <Label>
    //     Name
    //     <Input
    //     // onChange = {(e) => recordName(e)}
    //     type="text"
    //     name="name"
    //     value={foo()}
    //     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //     required
    //     />
    //   </Label>
    //   <Label htmlFor="">
    //     Number
    //     <Input
    //       onChange = {(e) => recordNumber(e)}
    //       type="tel"
    //       name="number"
    //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //       required
    //     />
    //   </Label>
    //   <Button type="submit" >
    //     {isEdited ? 'Edit contact' : 'Add contact'}
    //   </Button>
    // </Form>
  )
}

FormContact.propType = {
  onAddContact: PropTypes.func.isRequired,
}


    // evnt.preventDefault();
    
    // const include = contacts.some(({name}) => name.toLowerCase() === nameNewContact.toLowerCase())
    // if (include) {
    //   return alert(`${nameNewContact} is already in contacts.`)
    // } else {
    //   dispatch(addContact({name: nameNewContact, number}));
    // }
    // evnt.target.reset()