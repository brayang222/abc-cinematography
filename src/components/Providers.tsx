'use client'
import { HeroUIProvider } from '@heroui/react'
import React from 'react'

export const Providers = ({children}: any) => {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  )
}
