import { Button } from "components/ListContacts/ListContacts.styled";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "Redux/auth/operation";

import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(32).required()

})

export const Login = () => {


  const dispatch = useDispatch();
  const handleSubmit = (value, {resetForm}) => {
    console.log(value)
    dispatch(logIn(value))
    resetForm()
  }

  const initialValues = {email: '', password: ''}

  return (
    <>
    <h1>Login</h1>
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
        <Form>
          <label>
            Email
            <Field type = 'email' name = 'email'/>
            <ErrorMessage component="div" name='email'/>
          </label>
          <label>
            Password
            <Field type = 'password' name = 'password'/>
            <ErrorMessage component="div" name='password'/>
          </label>
          <Button type="submit">Login</Button>
        </Form>
      </Formik>
      </>
  )
}