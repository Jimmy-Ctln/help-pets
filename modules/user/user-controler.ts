import { UserService } from './user-service';

export class UserControler {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }
  async registerUser(email: string, password: string) {
    return this.service.register(email, password);
  }
}
