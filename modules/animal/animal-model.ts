export interface AnimalBase {
  id: string
  name: string
  species: string
  breed?: string
  age?: number
  birthday?: string
  sex: string
  size?: number
  weight?: number
  description: string
  photos: string[]
  vaccinated?: boolean
  identified?: boolean
  sterilized?: boolean
  compatibleWithDogs?: boolean
  compatibleWithCats?: boolean
  compatibleWithKids?: boolean
  shelterId: string
  createdAt: string
  updatedAt: string
}

export type AnimalCreateData = Omit<AnimalBase, 'id' | 'createdAt' | 'updatedAt'>

export type AnimalUpdateData = Partial<AnimalCreateData>
