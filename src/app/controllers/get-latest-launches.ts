import { ILaunchRepository } from "@domain/interfaces/launch-repository";
import { getLatestLaunchesUseCase } from "@domain/use-cases/get-latest-launches";

export class getLatestLaunchesController {
// o ideal seria estender uma interface
  constructor(
    public repository: ILaunchRepository
  ) {}

  async handle() {
    try {
      const useCase = new getLatestLaunchesUseCase(this.repository)
      const response = await useCase.handle()
      return response
    } catch (error) {
      return error
      // create an error object  
    }
  }


}