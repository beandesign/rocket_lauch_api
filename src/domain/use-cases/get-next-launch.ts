import { Launch } from "@domain/entities/launch";
import { ILaunchRepository } from "@domain/interfaces/launch-repository";
import { IUseCase } from "@domain/interfaces/use-case";

export class getNextLaunchUseCase implements IUseCase{
  constructor(private repository: ILaunchRepository) {}

  async handle() {
    const response = await this.repository.next()
    return new Launch(
      response.id, 
      response.name, 
      response.date_local, 
      response.links.patch.small,
      response.links.webcast
    )
  }
}