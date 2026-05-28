'use client'

import { SessionProvider } from 'next-auth/react'
import { createContext, useContext, ReactNode } from 'react'

type Brand = { name: string; tagline: string }

const BrandContext = createContext<Brand>({
  name: 'Uptime Monitor',
  tagline: 'Open-source uptime monitoring and status pages',
})

export function useBrand() {
  return useContext(BrandContext)
}

export default function Providers({
  children,
  brand,
}: {
  children: ReactNode
  brand: Brand
}) {
  return (
    <SessionProvider>
      <BrandContext.Provider value={brand}>{children}</BrandContext.Provider>
    </SessionProvider>
  )
}
