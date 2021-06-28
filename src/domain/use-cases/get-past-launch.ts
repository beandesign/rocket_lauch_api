import { Launch } from "@domain/entities/launch";
import { ILaunchRepository } from "@domain/interfaces/launch-repository";
import { IUseCase } from "@domain/interfaces/use-case";

export class getPastLaunchUseCase implements IUseCase{
  constructor(private repository: ILaunchRepository) {}

  async handle() {
    const response = await this.repository.past()
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