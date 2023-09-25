import { Button, Container, Heading, Stack, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

function Hero({ color }) {
  return (
    <>
      <Container maxW={'100%'} id='hero' p={0}>
        <VStack
          textAlign={'center'}
          pb={{ base: 20, md: 36 }}
          pt={{ base: 36, md: 52 }}
          background={useColorModeValue(`${color}.900`, `${color}.900`)}
          backgroundImage='https://www.queensu.ca/gazette/sites/default/files/assets/WEB%20Coding%20arnold-francisca-nPhl2x4fk2s-unsplash.jpg'
          backgroundSize={'cover'}
          bgBlendMode={'overlay'}
          spacing={{ base: 8, md: 14 }}
        // background-blend-mode
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            color={`${color}.100`}
            lineHeight={'100%'}
          >
            Hi my name is Waleed <br />
            <Text as='span' color={`${color}.600`}>Full-Stack JavaScript developer</Text>
          </Heading>

          <Text
            color={`${color}.100`}
            fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}

          >
            BUILT SIMPLE
          </Text>

          <Stack>
            <Button
              colorScheme={color}
              bg={`${color}.400`}
              rounded={'full'}
              _hover={{
                bg: `${color}.500`
              }}
            >
              Let's Connect
            </Button>
            <Button
              variant={'link'}
              colorScheme={color}
              size={'md'}
            >
              Contact me
            </Button>
          </Stack>
        </VStack>
      </Container>
    </>
  )
}

export default Hero