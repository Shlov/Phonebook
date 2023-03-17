import { Box } from "@chakra-ui/react"
import '../Button/Button.css'


export const Button = ({children, ...props}) => {
  return (
    <Box as='button' className='btn' onClick={props.onClick}>
      {children}
    </Box>
  )
}
