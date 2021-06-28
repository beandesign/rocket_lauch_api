import { Launch } from "@domain/entities/launch";
import { ILaunchRepository } from "@domain/interfaces/launch-repository";
import { AxiosInstance, AxiosResponse } from "axios";

export class SpacexRepository implements ILaunchRepository {
  constructor(
    public fetcher: AxiosInstance // O ideal seria ter uma interface generica aqui
  ) {}

  async next() {
    const response = await this.fetcher.get('/launches/next')
    return response.data
  }

  async latest() {
    const response = await this.fetcher.get('/launches/latest')
    return response.data
  }

  async upcoming() {
    const response = await this.fetcher.get('/launches/upcoming')
    return response.data
  }

  async past() {
    const response = await this.fetcher.get('/launches/past')
    return response.data
  }

}