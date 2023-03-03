
import "@fontsource/rajdhani";
// import { useEffect } from "react";
// import { fatchContacts } from "Redux/operations";
// import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { Contacts } from "../pages/Contacts";


export const App = () => {

  // const dispatch = useDispatch()
  // useEffect(() => {dispatch(fatchContacts())},[dispatch])

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contacts" element={<Contacts/>} />
    
    </Routes>
  );
}
