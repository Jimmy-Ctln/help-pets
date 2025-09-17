export interface AnimalCreateData {
  id: string
  name: string
  species: string
  breed?: string
  age?: number
  size?: string
  weight?: number
  color?: string
  birthday?: string
  description?: string
  photos: string[]
  status: string
  vaccinated?: boolean
  identified?: boolean
  chipNumber?: string
  sterilized?: boolean
  compatibility?: string
  specialNeeds?: string
  shelterId: string
}

export type AnimalUpdateData = {
  name?: string
  species?: string
  breed?: string
  age?: number
  size?: string
  weight?: number
  birthday?: string
  description?: string
  photos?: string[]
  status?: string
  vaccinated?: boolean
  identified?: boolean
  chipNumber?: string
  sterilized?: boolean
  compatibility?: string
  specialNeeds?: string
}
