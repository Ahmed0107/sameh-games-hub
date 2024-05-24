import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'

const Navbar = () => {
  return (
      <HStack>
          <Image src={logo } boxSize='50px' borderRadius='10px' margin='10px'/>
          <Text>NavBar</Text>
    </HStack>
  )
}

export default Navbar