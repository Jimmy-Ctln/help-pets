import { AnimalRepository } from './animal-repository'
import { AnimalCreateData, AnimalUpdateData } from './animal-response'

export class AnimalService {
  private repository: AnimalRepository

  constructor() {
    this.repository = new AnimalRepository()
  }

  async getAnimalsForDisplay() {
    const animals = await this.repository.getAllAnimals()
    return animals.map((animal) => ({
      ...animal,
    }))
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
