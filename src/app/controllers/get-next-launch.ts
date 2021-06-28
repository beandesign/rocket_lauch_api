import { ILaunchRepository } from "@domain/interfaces/launch-repository";
import { getNextLaunchUseCase } from "@domain/use-cases/get-next-launch";

export class getNextLaunchController {
// o ideal seria estender uma interface
  constructor(
    public repository: ILaunchRepository
  ) {}

  async handle() {
    try {
      const useCase = new getNextLaunchUseCase(this.repository)
      const response = await useCase.handle()
      return response
    } catch (error) {
      return error
      // create an error object  
    }
  }


}