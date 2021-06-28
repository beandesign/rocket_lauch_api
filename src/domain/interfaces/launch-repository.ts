import { Launch } from "@domain/entities/launch";
export interface ILaunchRepository {
  next(): Promise<any>
  latest(): Promise<any>
  upcoming(): Promise<any>
  past(): Promise<any>
}