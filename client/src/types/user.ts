export type TUser = {
  id: number;
  name: number;
  icon: any; // TODO:型が未定のため一旦any
  password: string;
  email: string;
};
export type PartialUser = Partial<TUser>;
