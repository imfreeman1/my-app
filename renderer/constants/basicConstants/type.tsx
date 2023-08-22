export interface IStringType {
  [name: string]: string;
}

export interface INumberType {
  [name: string]: number;
}

export interface INavigateType<T> {
  list: Array<T>;
}
