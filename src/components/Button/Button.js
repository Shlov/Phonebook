import { Box } from "@chakra-ui/react"
import '../Button/Button.css'


const styleBtn = {
  
}

export const Button = ({children, ...props}) => {

  return (
    <Box as='button' style={styleBtn} className='btn' onClick={props.onClick}>
      {children}
    </Box>
  )
}
