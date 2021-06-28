import { ILaunchRepository } from "@domain/interfaces/launch-repository";
import { IUseCase } from "@domain/interfaces/use-case";

export class getUpcomingLaunchesUseCase implements IUseCase{
  constructor(private repository: ILaunchRepository) {}

  async handle() {
    const response = await this.repository.upcoming()
    return response
  }
}