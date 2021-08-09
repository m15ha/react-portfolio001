import {FaSun, FaMoon, FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa'
import React from 'react';
import {
  VStack,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  Spacer,
} from '@chakra-ui/react';
import Header from './components/Header';
import Skill from './components/Skill';
import Profile from './components/Profile';


function App() {
const {colorMode, toggleColorMode} = useColorMode()
const isDark = colorMode === 'dark'

  return (  
          <VStack p={5}>
            <Flex w='100%'>
              <Heading ml='8' size='md' fontWeight='semibold' color='cyan.400'>awesome</Heading>
            <Spacer></Spacer>
            <IconButton ml={2} icon={ <FaLinkedin />} isRound='true'></IconButton>
            <IconButton ml={2} icon={ <FaGithub />} isRound='true'></IconButton>
            <IconButton ml={2} icon={ <FaFacebook />} isRound='true'></IconButton>
            <IconButton ml={2} icon={isDark ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} isRound='true'></IconButton>
            </Flex>
            <Header />
            <Skill />
            <Profile />
          </VStack>      
  );
}

export default App;
