import { ILaunchRepository } from "@domain/interfaces/launch-repository";
import { getPastLaunchUseCase } from "@domain/use-cases/get-past-launch";

export class getPastLaunchController {
// o ideal seria estender uma interface
  constructor(
    public repository: ILaunchRepository
  ) {}

  async handle() {
    try {
      const useCase = new getPastLaunchUseCase(this.repository)
      const response = await useCase.handle()
      return response
    } catch (error) {
      return error
      // create an error object  
    }
  }


}