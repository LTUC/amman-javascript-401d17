import React, { useContext } from 'react'
import { SiteContext } from '../context/Site'
import { Text } from '@mantine/core';

export default function Footer() {
  const siteSettings = useContext(SiteContext);

  return (
    <div>
      <Text>All right reserved ASAC&copy; 2023</Text>
      Twitter @{siteSettings.state.twitter}
    </div>
  )
}
