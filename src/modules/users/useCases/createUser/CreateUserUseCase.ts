/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    const exist = this.usersRepository.findByEmail(email);

    if (exist) {
      throw new Error("User Already Exists");
    }

    const newUser = this.usersRepository.create({ email, name });

    return newUser;
  }
}

export { CreateUserUseCase };
