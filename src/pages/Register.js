import { Button } from '../components/Button/Button';
import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "Redux/auth/operation";
import * as Yup from 'yup';
import { Center, Heading, Flex } from '@chakra-ui/react';
import { Input } from 'components/Input/Input.styled';

const schema = Yup.object().shape({
  name: Yup.string().min(3).max(16).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(32).required()
});

export const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = (value, {resetForm}) => {
    dispatch(register(value));
    resetForm();
  };

  const initialValues = {name:'', email: '', password: ''};

  return (
    <Flex flexDirection='column' justifyContent='center' alignItems='center'>
      <Heading size='lg' p='8px'>Register</Heading>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
        <Form>
        <Center flexDirection='column' gap='12px'>
            {/* Name */}
            <Input type = 'text' name = 'name' placeholder='Name'/>
            <ErrorMessage component="div" name='name'/>
            {/* Email */}
            <Input type = 'email' name = 'email' placeholder='Email'/>
            <ErrorMessage component="div" name='email'/>
            {/* Password */}
            <Input type = 'password' name = 'password' placeholder='Password'/>
            <ErrorMessage component="div" name='password'/>
          <Button type="submit">Register</Button>
          </Center>
        </Form>
      </Formik>
    </Flex>
  )
};