export interface IPerson{
    id: number;
    username: string;
    img: string;
}

export interface IPersonResponse {
  users: IPerson[];
  total: number;
  skip: number;
  limit: number;
}