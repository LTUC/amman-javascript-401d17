import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

function Footer({ color }) {
  return (
    <Box
      bg={useColorModeValue(`${color}.100`, `${color}.900`)}
      color={useColorModeValue(`${color}.600`, `${color}.100`)}
    >
      <Text align={'center'} py={4} fontSize={'lg'}>
        &copy; 2023 Waleed A. Afifi, All right reserved.
      </Text>
    </Box>
  )
}

export default Footer