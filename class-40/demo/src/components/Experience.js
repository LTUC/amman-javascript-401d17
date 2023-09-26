import { Badge, Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Center, Container, Divider, HStack, Image, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { EXPERIENCE, OPTIONS } from '../assets/Content'
import { ChevronRightIcon } from '@chakra-ui/icons';
import Reveal from 'react-awesome-reveal';

function Experience({ color }) {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    if (OPTIONS.length) setSelected(OPTIONS[0])
  }, [])



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
            <Text color={`${color}.400`} fontWeight={600}>02</Text>
            <Text fontWeight={800}>Experience</Text>
          </HStack>
          <Divider />
        </Stack>
        <Center>
          <ButtonGroup variant={'outline'}>
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
        <Stack>
          {
            EXPERIENCE
              .filter(exp => exp.tags.includes(selected))
              .map(exp => (
                <Reveal>
                  <Card key={exp.company}>
                    <CardHeader>
                      <HStack>
                        <Image src={exp.logo} h={50} />
                        <Box px={4} textAlign={'left'}>
                          <Text fontWeight={600}>{exp.company}</Text>
                          <Text>{exp.role}</Text>
                        </Box>
                      </HStack>
                    </CardHeader>
                    <CardBody>
                      <List>
                        {
                          exp.items.map(item => (
                            <ListItem key={item} textAlign={'left'}>
                              <ListIcon
                                as={ChevronRightIcon}
                                color={`${color}.500`}
                              />
                              {item}
                            </ListItem>
                          ))
                        }
                      </List>
                    </CardBody>
                    <CardFooter>
                      <HStack spacing={2}>
                        {
                          exp.badges.map(badge => (
                            <Badge key={badge} p={2}>
                              {badge}
                            </Badge>
                          ))
                        }
                      </HStack>
                    </CardFooter>
                  </Card>
                </Reveal>
              ))
          }
        </Stack>
      </Stack>
    </Container>
  )
}

export default Experience