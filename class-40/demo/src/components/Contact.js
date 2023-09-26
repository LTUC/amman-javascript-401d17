import { Box, Center, Container, Divider, HStack, Heading, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';


function Contact({ color }) {
  return (
    <Container maxWidth={'3xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 32 }}
        pt={{ base: 32, md: 20 }}
      >
        {/* <Stack direction={{base: 'column', md: 'row'}}> */}
        <Stack>
          <HStack>
            <Text color={`${color}.400`} fontWeight={600}>05</Text>
            <Text fontWeight={800}>Stay in touch</Text>
          </HStack>
          <Divider />
        </Stack>
        <Stack spacing={4} as={Container} textAlign={'center'}>
          <Heading color={`${color}.400`} fontSize={'3xl'}>Let's Stay in Touch!!</Heading>
          <Text color={`${color}.600`}>info@waleedafifi.me</Text>
          <HStack alignItems={'center'} justifyContent={'center'}>
            <Link colorScheme={color}>
              <AiFillFacebook size={28}/>
            </Link>
            <Link colorScheme={color}>
              <AiFillGithub size={28}/>
            </Link>
            <Link colorScheme={color}>
              <AiFillLinkedin size={28}/>
            </Link>
          </HStack>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Contact