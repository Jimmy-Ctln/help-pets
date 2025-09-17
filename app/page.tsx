'use client'

import Hero from '@/components/Hero'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { ShelterResponse } from '@/modules/shelter/shelter-response'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function HomePage() {
  const [shelters, setShelters] = useState<ShelterResponse[]>([])

  useEffect(() => {
    fetch(`/api/shelters`)
      .then((res) => res.json())
      .then((data) => setShelters(data))
  }, [])

  return (
    <main className="mx-20 justify-center my-8">
      <Hero />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full mx-auto max-w-full">
        {shelters.map((shelter: ShelterResponse, index) => (
          <Link key={shelter.id} href={`/profile/${shelter.id}`}>
            <Card
              key={shelter.id}
              className="cursor-pointer flex py-0 pb-4 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105"
            >
              <div className="w-full h-40 relative rounded-t-md overflow-hidden">
                <Image
                  src={shelter.picture ?? ''}
                  alt={shelter.name ?? ''}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{shelter.name}</CardTitle>
                <CardDescription>{shelter.description}</CardDescription>
              </CardHeader>
              <CardFooter className="text-sm">{shelter.city + ' ' + shelter.postalCode}</CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}
