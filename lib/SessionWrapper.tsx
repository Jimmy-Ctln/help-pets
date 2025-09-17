'use client'

import { SessionProvider } from 'next-auth/react'

const basePath = process.env.NEXTAUTH_URL

const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider basePath={basePath}>{children}</SessionProvider>
}

export default SessionWrapper
