import { Badge, Button, Card, CardBody, CardFooter, Container, Divider, HStack, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { PROJECTS } from '../assets/Content'
import { JackInTheBox } from 'react-awesome-reveal'

function Projects({ color }) {
  return (
    <Container maxWidth={'3xl'}>
      <Stack
        spacing={{ base: 8, md: 14 }}
        pb={8}
        pt={8}
      >
        <HStack>
          <Text color={`${color}.400`} fontWeight={600}>03</Text>
          <Text fontWeight={800}>Projects</Text>
        </HStack>
        <Divider />
      </Stack>
      <HStack spacing={4}>
        {
          PROJECTS.map(project => (
            <JackInTheBox triggerOnce>
              <Card key={project.title} direction={'column'} overflow={'hidden'}>
                <Image objectFit={'cover'} src={project.img} />
                <CardBody>
                  <Heading size={'md'}>{project.title}</Heading>
                  <Text py={4}>{project.description}</Text>
                  <Stack spacing={4}>
                    {
                      project.buttons.map(button => (
                        <Link href={button.href}>
                          <Button colorScheme={color}>{button.text}</Button>
                        </Link>
                      ))
                    }
                  </Stack>
                </CardBody>
                <CardFooter>
                  <HStack spacing={2}>
                    {
                      project.badges.map(badge => (
                        <Badge key={badge} p={2}>
                          {badge}
                        </Badge>
                      ))
                    }
                  </HStack>
                </CardFooter>
              </Card>
            </JackInTheBox>
          ))
        }
      </HStack>
    </Container>
  )
}

export default Projects