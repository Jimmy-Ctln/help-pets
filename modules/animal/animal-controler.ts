import { AnimalCreateData, AnimalUpdateData } from './animal-response'
import { AnimalService } from './animal-service'

export class AnimalControler {
  private service: AnimalService

  constructor() {
    this.service = new AnimalService()
  }

  async getAnimals() {
    return this.service.getAnimalsForDisplay()
  }

  async getAnimalById(id: string) {
    return this.service.getAnimalById(id)
  }

  async createAnimal(data: AnimalCreateData) {
    //Not working beacause, i need to retrieve userId with the session (next-auth)
    return this.service.createAnimal(data)
  }

  async updateAnimal(id: string, body: AnimalUpdateData) {
    return this.service.updateAnimal(id, body)
  }
}
