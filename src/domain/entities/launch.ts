export class Launch {
  [x: string]: string;
  constructor(
    public _id: string,
    public name: string,
    public date: string,
    public patch: string,
    public video: string
  ) {}
}