'use client'

import { AnimalResponse } from '@/modules/animal/animal-response'
import { BadgeInfo } from '@/components/BadgeInfo'
import { Check, X, ThumbsUp, ThumbsDown, Heart, Handshake } from 'lucide-react'

import React, { useEffect, useState } from 'react'
import CarouselWithFooter from '@/components/CarouselWithFooter'

export default function AnimalProfile({
  params,
}: {
  params: Promise<{ animalId: string; shelterId: string }>
}) {
  const { shelterId, animalId } = React.use(params)
  const [animal, setAnimal] = useState<AnimalResponse>()

  useEffect(() => {
    fetch(`/api/shelters/${shelterId}/animals/${animalId}`)
      .then((response) => response.json())
      .then((data) => setAnimal(data))
  }, [])

  return (
    <section className="mt-8 flex-col justify-center items-center px-20 mb-4">
      {animal && (
        <div className="flex justify-around w-full gap-6">
          <div className="flex flex-col w-[50%] gap-4">
            <CarouselWithFooter photos={animal.photos} />
          </div>
          <div className="flex flex-col justify-start w-1/2">
            <h2 className="text-4xl font-bold">{animal.name}</h2>
            <div className="flex gap-2 mt-2"></div>
            <div className="mt-4">
              <div className="flex flex-col gap-4">
                <h3 className="text-base font-semibold">Description :</h3>
                <p className="text-base">{animal.description}</p>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex gap-2 items-center">
                    <Heart size={15} />
                    <h3 className="text-base font-semibold">Santé :</h3>
                  </div>
                  <div className="flex gap-3">
                    {animal.identified && animal.identified === true ? (
                      <BadgeInfo icon={<Check size={15} />} text={'identifié'} />
                    ) : (
                      <BadgeInfo icon={<X size={15} />} text={'identifié'} />
                    )}
                    {animal.sterilized && animal.sterilized === true ? (
                      <BadgeInfo icon={<Check size={15} />} text={'Stérélisé'} />
                    ) : (
                      <BadgeInfo icon={<X size={15} />} text={'Stérélisé'} />
                    )}
                    {animal.vaccinated && animal.vaccinated === true ? (
                      <BadgeInfo icon={<Check size={15} />} text={'vacciné'} />
                    ) : (
                      <BadgeInfo icon={<X size={15} />} text={'vacciné'} />
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <Handshake size={15} />
                    <h3 className="text-base font-semibold">Compatibilité :</h3>
                  </div>
                  <div className="flex gap-3">
                    {animal.compatibleWithKids && animal.compatibleWithKids === true ? (
                      <BadgeInfo icon={<ThumbsUp size={15} />} text={'Enfant'} />
                    ) : (
                      <BadgeInfo icon={<ThumbsDown size={15} />} text={'Enfant'} />
                    )}
                    {animal.compatibleWithDogs && animal.compatibleWithDogs === true ? (
                      <BadgeInfo icon={<ThumbsUp size={15} />} text={'Chien'} />
                    ) : (
                      <BadgeInfo icon={<ThumbsDown size={15} />} text={'Chien'} />
                    )}
                    {animal.vaccinated && animal.compatibleWithCats === true ? (
                      <BadgeInfo icon={<ThumbsUp size={15} />} text={'Chat'} />
                    ) : (
                      <BadgeInfo icon={<ThumbsDown size={15} />} text={'Chat'} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
