import { Badge, Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Center, Container, Divider, HStack, Heading, Image, Link, List, ListIcon, ListItem, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { OPTIONS, OTHER_PROJECTS } from '../assets/Content'
import { JackInTheBox } from 'react-awesome-reveal';

function OtherProject({ color }) {
  const [selected, setSelected] = useState('All');

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
            <Text color={`${color}.400`} fontWeight={600}>04</Text>
            <Text fontWeight={800}>Other Projects</Text>
          </HStack>
          <Divider />
        </Stack>
        <Center>
          <ButtonGroup variant={'outline'}>
            <Button
              colorScheme={selected === 'All' ? color : 'gray'}
              onClick={() => setSelected('All')}
            >
              All
            </Button>
            {OPTIONS.map(option => (
              <Button
                colorScheme={selected === option ? color : 'gray'}
                onClick={() => setSelected(option)}
              >
                {option}
              </Button>
            ))}
          </ButtonGroup>
        </Center>
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {
            OTHER_PROJECTS
              .filter(project => {
                if (selected === 'All') return true;
                else return project.tags.includes(selected)
              })
              .map(project => (
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
        </SimpleGrid>
      </Stack>
    </Container>
  )
}

export default OtherProject