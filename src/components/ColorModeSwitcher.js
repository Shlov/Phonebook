import { IconButton, Tooltip, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons";




export const ColorModeSwitcher = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  return(

    <Tooltip label='ColorModeSwitcher' placement='left'>
      <IconButton
          rounded="full"
          aria-label="Toggle color mode"
          bgColor="transparent"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        />
    </Tooltip>
    
  )
}