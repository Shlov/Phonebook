import { Button } from '../components/Button/Button';
import { Formik, Form, ErrorMessage, } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "Redux/auth/operation";

import * as Yup from 'yup';
import { Heading, FormLabel, Flex, FormControl, Center,  } from '@chakra-ui/react';
import { Input } from 'components/Input/Input.styled';


const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(32).required()
})

export const Login = () => {

  const dispatch = useDispatch();
  const handleSubmit = (value, {resetForm}) => {
    dispatch(logIn(value))
    resetForm()
  }

  const initialValues = {email: '', password: ''}

  return (
    <Flex flexDirection='column' justifyContent='center' alignItems='center'>
      <Heading size='lg' p='8px'>Login</Heading>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
        <Form>
          <Center flexDirection='column' gap='12px'>

          <FormControl display='flex' justifyContent='space-between'>
            {/* <FormLabel htmlFor='email'> */}
              {/* Email */}
            {/* <ErrorMessage component="div" name='email'/> */}
            {/* </FormLabel> */}
            <Input type = 'email' name = 'email' placeholder='Email'/>
          </FormControl>
          <FormControl display='flex' justifyContent='space-between'>
            {/* <FormLabel htmlFor='password'> */}
              {/* Password */}
            {/* <ErrorMessage component="div" name='password'/> */}
            {/* </FormLabel> */}
            <Input type = 'password' name = 'password' placeholder='Password'/>
          </FormControl>
          <Button type="submit">Login</Button>
          </Center>
        </Form>
      </Formik>
    </Flex>
  )
}



