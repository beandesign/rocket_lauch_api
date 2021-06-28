export interface IUseCase {
  handle(): Promise<any>;
}
