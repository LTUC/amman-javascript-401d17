import React from 'react'
import { Anchor, Group, Header, Navbar } from '@mantine/core';

function AppHeader() {
  return (
    <Header>
      <Navbar>
        <Group className='header-nav'>
          <Anchor  href="/" target="_blank">
            Home
          </Anchor>
          <Anchor href="/" target="_blank">
            Contact
          </Anchor>
          <Anchor href="/" target="_blank">
            About
          </Anchor>
        </Group>
      </Navbar>
    </Header>
  )
}

export default AppHeader