import { ILaunchRepository } from "@domain/interfaces/launch-repository";
import { getUpcomingLaunchesUseCase } from "@domain/use-cases/get-upcoming-launches";

export class getUpcomingLaunchesController {
// o ideal seria estender uma interface
  constructor(
    public repository: ILaunchRepository
  ) {}

  async handle() {
    try {
      const useCase = new getUpcomingLaunchesUseCase(this.repository)
      const response = await useCase.handle()
      return response
    } catch (error) {
      return error
      // create an error object  
    }
  }


}