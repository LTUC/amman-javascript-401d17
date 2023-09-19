import { 
  Box, 
  Card, 
  CardBody, 
  CardHeader, 
  Heading, 
  Image, 
  Stack, 
  StackDivider,
  Text } from '@chakra-ui/react'

import React from 'react'

function ListItem({ data }) {
  return (
    <Card width='30%'>
      <CardHeader>
        <Heading size='md'>{data.title}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Image src={data.image} />
          <Box>
            <Text pt='2' fontSize='sm'>
              Category: {data.type}
            </Text>
          </Box>
          <Box>
            <Text pt='2' fontSize='sm'>
              Released: {data.year}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default ListItem