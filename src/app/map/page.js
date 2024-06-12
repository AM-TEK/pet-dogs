import React from 'react'
import Maps from '@/components/Map'
import Header from '@/components/Header'
import { Suspense } from 'react'

export default function page() {
  return (
    <>
      <Header />
      <Suspense fallback="Loading...">
        <Maps />
      </Suspense>
    </>
  )
}
