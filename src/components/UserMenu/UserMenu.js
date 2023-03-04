import { Button } from "components/ListContacts/ListContacts.styled"
import { useDispatch } from "react-redux"
import { logOut } from "Redux/auth/operation"
import { selectUser } from "Redux/auth/selector"



export const UserMenu = () => {

  const dispatch = useDispatch()

  // const user = selectUser();

  return (
    <div>
      {/* <p>Hello, {user.name}</p> */}
      <p>Hello, </p>
      <Button onClick={()=>dispatch(logOut())}>Logout</Button>
    </div>
  )
}