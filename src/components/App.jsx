
import "@fontsource/rajdhani";
import { useEffect } from "react";
// import { fatchContacts } from "Redux/operations";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Contacts } from "../pages/Contacts";
import { Layout } from "./Layout/Layout";
import { Register } from "pages/Register";
import { Login } from "pages/Login";
import { refreshUser } from "Redux/auth/operation";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";



export const App = () => {

  const dispatch = useDispatch()
  // useEffect(() => {dispatch(fatchContacts())},[dispatch])

  useEffect(() => {dispatch(refreshUser())}, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
        {/* <Route path="/contacts" element={<Contacts/>} /> */}
        {/* <PrivateRoute path="/contacts">
          <Contacts/>
        </PrivateRoute> */}
        <Route path="/contacts" element={
          <PrivateRoute redirectTo="/login" component={<Contacts/>}/>
        }/>
        <Route path="/login" element={
          <RestrictedRoute redirectTo="/contacts" component={<Login/>}/>
        }/>
        <Route path="/register" element={
          <RestrictedRoute redirectTo="/contacts" component={<Register/>}/>
        }/>

        {/* <Route path="/login" element={<Login/>} /> */}
        {/* <Route path="/register" element={<Register/>} /> */}
      </Route>
    </Routes>
  );
}
