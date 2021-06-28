import { Launch } from "@domain/entities/launch";
import { ILaunchRepository } from "@domain/interfaces/launch-repository";
import { IUseCase } from "@domain/interfaces/use-case";

export class getLatestLaunchesUseCase implements IUseCase{
  constructor(private repository: ILaunchRepository) {}

  async handle() {
    const response = await this.repository.latest()
    return response.map(
      function(item: any) {
        return new Launch(
          item.id, 
          item.name, 
          item.date_local, 
          item.links.patch.small
        )
      }
    )
  }
}