import { ListContacts } from "components/ListContacts/ListContacts"
import { SearchContact } from "components/SearchContact/SearchContact"


export const Contacts = () => {
  return (
    <>
      <SearchContact />
      <ListContacts />
    </>
  )
}