'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

type Props = {
  photos: string[]
}

export default function CarouselWithFooter({ photos }: Props) {
  return (
    <Carousel>
      <CarouselContent>
        {photos.map((photo) => (
          <CarouselItem>
            <img
              src={photo.replace(/'/g, '')}
              className="w-full h-[650px] object-cover rounded-3xl"
              alt={photo}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex gap-6 mt-4">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}
