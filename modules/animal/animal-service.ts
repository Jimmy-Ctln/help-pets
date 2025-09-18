import { AnimalRepository } from './animal-repository'
import { AnimalCreateData, AnimalUpdateData } from './animal-model'
import { AnimalandShelterQuery } from '@/types/animal-shelter'

export class AnimalService {
  private repository: AnimalRepository

  constructor() {
    this.repository = new AnimalRepository()
  }

  async getAllAnimals(shelterId?: string) {
    if (shelterId) {
      const animals = await this.repository.getAllAnimals(shelterId)
      return animals.map((animal) => ({
        ...animal,
      }))
    }
    const animals = await this.repository.getAllAnimals()
    return animals.map((animal) => ({
      ...animal,
    }))
  }

  async getAnimalByIdAndShelterId(query: AnimalandShelterQuery) {
    const animal = await this.repository.getAnimalByIdAndShelterId(query)
    if (!animal) throw new Error('Animal not found')
    return animal
  }

  async getAnimalById(id: string): Promise<AnimalCreateData> {
    const animal = await this.repository.getAnimalById(id)
    if (!animal) throw new Error('Animal not found')
  }

  async createAnimal(data: AnimalCreateData) {
    //Not working beacause, i need to retrieve userId with the session (next-auth)
    return this.repository.createAnimal(data)
  }

  async updateAnimal(id: string, data: AnimalUpdateData) {
    return this.repository.updateAnimal(id, data)
  }

  async deleteAnimal(id: string) {
    return this.repository.deleteAnimal(id)
  }
}
