import { Button } from '../components/Button/Button';
import { Formik, Form, } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "Redux/auth/selector";
import { logIn } from "Redux/auth/operation";
import * as Yup from 'yup';
import { Heading, Flex, Center, useToast } from '@chakra-ui/react';
import { Input } from 'components/Input/Input.styled';
import { useEffect } from 'react';


const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(32).required()
})

export const Login = () => {

  const dispatch = useDispatch();
  const toast = useToast();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const handleSubmit = (value, {resetForm}) => {
    dispatch(logIn(value));
    resetForm();
  }

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     toast({
  //       title: 'Authorization error (◑_◑)🤚',
  //       description: 'Сheck your login or password (ㆆ_ㆆ)  ',
  //       status: 'error',
  //       duration: 9000,
  //       isClosable: true,
  //       position: 'top',
  //     })
  //   }
  // }
    
  // , [isLoggedIn, toast])

  

  const initialValues = {email: '', password: ''}

  return (
    <Flex flexDirection='column' justifyContent='center' alignItems='center'>
      <Heading size='lg' p='8px'>Login</Heading>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
        <Form>
          <Center flexDirection='column' gap='12px'>
              {/* Email */}
            <Input type = 'email' name = 'email' placeholder='Email'/>
              {/* Password */}
            <Input type = 'password' name = 'password' placeholder='Password'/>
          <Button type="submit">Login</Button>
          </Center>
        </Form>
      </Formik>
    </Flex>
  )
}



