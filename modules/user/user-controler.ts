import { UserCreateData } from './user-model'
import { UserService } from './user-service'

export class UserControler {
  private service: UserService

  constructor() {
    this.service = new UserService()
  }
  async registerUser(data: UserCreateData) {
    return this.service.register(data)
  }
}
