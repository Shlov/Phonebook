import "@fontsource/rajdhani";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Contacts } from "../pages/Contacts";
import { Layout } from "./Layout/Layout";
import { Register } from "pages/Register";
import { Login } from "pages/Login";
import { refreshUser } from "Redux/auth/operation";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { selectIsRefreshing } from "Redux/auth/selector";


export const App = () => {

  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {dispatch(refreshUser())}, [dispatch]);

  return (
    isRefreshing ? (<p> Refreshing user... </p>) :
    (<Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path="/contacts" element={
          <PrivateRoute redirectTo="/login" component={<Contacts/>}/>
        }/>
        <Route path="/login" element={
          <RestrictedRoute redirectTo="/contacts" component={<Login/>}/>
        }/>
        <Route path="/register" element={
          <RestrictedRoute redirectTo="/contacts" component={<Register/>}/>
        }/>
      </Route>
    </Routes>)
    
  );
}
