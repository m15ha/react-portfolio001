import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import {DiAndroid, DiWebplatform, DiCodeigniter} from 'react-icons/di'

export default function Profile() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)');
  return (
    <Flex
      direction={isNotSmallerScreen ? 'row' : 'column'}
      w="100%"
      maxWidth={{ base: '100vh', md: '110vh', lg: '110vh', xl: '110vh' }}
    >
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          3+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experiance
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontSize="2xl">
          Product Designer and Developer. Specialised in web app development.
        </Text>

        <Flex direction={isNotSmallerScreen ? 'row' : 'column'} mt={8}>

          <Flex ml={isNotSmallerScreen ? 4 : 0}
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="21vh"
            w="21vh"
            justify="flex-end" _hover={{bg: 'teal.200'}}
          >
            <Icon color='white' p='4' as={DiWebplatform} w='24' h='24' />
            <Text
              color="white"
              p="4"
              fontSize="xl"
              fontWeight="semibold"
            >Web App</Text>
          </Flex>

          <Flex ml={isNotSmallerScreen ? 4 : 0}
            rounded="xl"
            direction="column"
            mt={4}
            bg="cyan.400"
            h="21vh"
            w="21vh"
            justify="flex-end" _hover={{bg: 'teal.200'}}
          >
            <Icon color='white' p='4' as={DiAndroid} w='24' h='24' />
            <Text
              color="white"
              p="4"
              fontSize="xl"
              fontWeight="semibold"
            >Android App</Text>
          </Flex>

          <Flex ml={isNotSmallerScreen ? 4 : 0}
            rounded="xl"
            direction="column"
            mt={4}
            bg="cyan.400"
            h="21vh"
            w="21vh"
            justify="flex-end" _hover={{bg: 'teal.200'}}
          >
            <Icon color='white' p='4' as={DiCodeigniter} w='24' h='24' />
            <Text
              color="white"
              p="4"
              fontSize="xl"
              fontWeight="semibold"
            >Design App</Text>
          </Flex>
          
        </Flex>
      </Box>
    </Flex>
  );
}
