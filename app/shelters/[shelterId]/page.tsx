'use client'

import Image from 'next/image'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import * as React from 'react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ShelterResponse } from '@/modules/shelter/shelter-response'
import { PawPrint } from 'lucide-react'
import Link from 'next/link'
import { AnimaResponse } from '@/modules/animal/animal-response'

export default function Shelter({ params }: { params: Promise<{ shelterId: string }> }) {
  const { shelterId } = React.use(params)

  const [displayOption, setDisplayOption] = useState<'pets' | 'needs'>('pets')
  const [shelter, setShelter] = useState<ShelterResponse>()
  const [pets, setPets] = useState<AnimaResponse[]>([])

  React.useEffect(() => {
    fetch(`/api/shelters/${shelterId}`)
      .then((res) => res.json())
      .then((data) => setShelter(data))
  }, [])

  React.useEffect(() => {
    fetch(`/api/shelters/${shelterId}/animals`)
      .then((res) => res.json())
      .then((data) => setPets(data))
  }, [])

  const handleClick = (button: string) => {
    setDisplayOption(button as 'pets' | 'needs')
  }

  return (
    <div className="mt-8 flex-col justify-center items-center px-20">
      <AspectRatio ratio={7} className="flex-1">
        <Image
          src={shelter?.picture && shelter.picture !== '' ? shelter.picture : '/default.jpg'}
          alt="Background"
          fill
          className="object-cover object-[60%_55%] rounded-3xl"
          sizes="100vw"
        />
      </AspectRatio>

      <section className="flex gap-4 mt-8">
        <Card className="w-[350px] mt-4 py-6 bg-secondary/50 shadow-none h-auto max-h-fit">
          <CardHeader>
            <CardTitle className="text-xl">{shelter?.name}</CardTitle>
            <CardDescription className="text-sm">{shelter?.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <span className="text-base font-bold">Nous contacter</span>
            <div className="flex flex-col gap-1 text-sm mt-2">
              <span className="flex items-center gap-2">
                Téléphone :{' '}
                <a href="tel:+33123456789" className="underline">
                  {shelter?.phone}
                </a>
              </span>
              <span className="flex items-center gap-2">
                Email :{' '}
                <a href={`mailto:${shelter?.email}`} className="underline">
                  {shelter?.email}
                </a>
              </span>
              <span className="flex items-center gap-2">{shelter?.address}</span>
            </div>
            <CardFooter className="mt-4 w-full">
              <Button size={'sm'} className="w-full">
                Faire un don
              </Button>
            </CardFooter>
          </CardContent>
        </Card>
        <section className="w-full">
          <div className="gap-2 flex justify-between">
            <div className="flex gap-2">
              <Button onClick={() => handleClick('pets')}>Nos animaux</Button>
              <Button onClick={() => handleClick('needs')}>Nos besoins</Button>
            </div>
            <div>
              <Button onClick={() => handleClick('')} icon={<PawPrint />}>
                Ajouter un animal
              </Button>
            </div>
          </div>
          {displayOption === 'pets' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full mx-auto mt-5 max-w-full">
              {pets &&
                pets.map((pet) => (
                  <Link key={pet.id} href={`/shelters/${shelterId}/animals/${pet.id}`}>
                    <Card
                      key={pet.id}
                      className="w-[300-px] h-[420px] flex flex-col bg-secondary/50 shadow-none cursor-pointer py-0 pb-4 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105"
                    >
                      <AspectRatio ratio={4 / 3}>
                        <Image
                          src={pet.photos[0].replace(/'/g, '')}
                          alt="Animal"
                          fill
                          className="rounded-t-xl object-cover"
                          sizes="300px"
                        />
                      </AspectRatio>
                      <CardHeader className="flex-1">
                        <CardTitle className="text-xl">{pet.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardFooter className="flex flex-col gap-2 mt-4 w-full"></CardFooter>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full mx-auto mt-4 max-w-full">
              {needs.map((need) => (
                <Card
                  key={need.id}
                  className="w-[300-px] h-[420px] flex flex-col bg-secondary/50 shadow-none cursor-pointer py-0 pb-4 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105"
                >
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={need.image}
                      alt="Animal"
                      fill
                      className="rounded-t-xl object-cover object-[80%_70%] "
                      sizes="300px"
                    />
                  </AspectRatio>
                  <CardHeader className="flex-1">
                    <CardTitle className="text-xl">{need.titre}</CardTitle>
                    <CardDescription className="text-sm">{need.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-xl">{need.prix}</span>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2 mt-4 w-full"></CardFooter>
                </Card>
              ))}
            </div>
          )}
        </section>
      </section>
    </div>
  )
}
