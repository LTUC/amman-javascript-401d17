import { Box, Container, Divider, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Fade } from "react-awesome-reveal";

function About({ color }) {
  return (
    <>
      <Container maxWidth={'3xl'}>
        <Fade delay={300}>
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
                <Text color={`${color}.400`} fontWeight={600}>01</Text>
                <Text fontWeight={800}>About</Text>
              </HStack>
              <Divider />
            </Stack>
            <Text color={`${color}.600`} fontSize={'xl'}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </Stack>
        </Fade>
      </Container>
    </>
  )
}

export default About