import { Launch } from "@domain/entities/launch";
import { ILaunchRepository } from "@domain/interfaces/launch-repository";
import { AxiosInstance, AxiosResponse } from "axios";

export class SpacexRepository implements ILaunchRepository {
  constructor(
    public fetcher: AxiosInstance // O ideal seria ter uma interface generica aqui
  ) {}

  async next() {
    return await this.fetcher.get('/launches/next')
  }

  async latest() {
    return await this.fetcher.get('/launches/latest')
  }

  async upcoming() {
    return await this.fetcher.get('/launches/upcoming')
  }

  async past() {
    return await this.fetcher.get('/launches/past')
  }

}