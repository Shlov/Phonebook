import { Button } from "components/ListContacts/ListContacts.styled"
import { useDispatch, useSelector } from "react-redux"
import { logOut } from "Redux/auth/operation"
import { selectUser } from "Redux/auth/selector"



export const UserMenu = () => {

  const dispatch = useDispatch()

  const user = useSelector(selectUser);

  console.log(user)

  return (
    <div>
      {/* <p>Hello, {user.name}</p> */}
      <p>Hello, </p>
      <Button onClick={()=>dispatch(logOut())}>Logout</Button>
    </div>
  )
}