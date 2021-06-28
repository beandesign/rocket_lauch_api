import { Launch } from "@domain/entities/launch";
import { AxiosResponse } from "axios";

export interface ILaunchRepository {
  next(): Promise<AxiosResponse>
  latest(): Promise<AxiosResponse>
  upcoming(): Promise<AxiosResponse>
  past(): Promise<AxiosResponse>
}