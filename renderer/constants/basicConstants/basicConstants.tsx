import { INavigateType, INumberType, IStringType } from './type';

export const STRING_CONSTANT: IStringType = {
  zero: '0',
  dot: '.',
  empty: '',
  equal: '=',
};

export const NUMBER_CONSTANT: INumberType = {
  one: 1,
  six: 6,
};

export const NAVIGATOR_CONSTANT: INavigateType<string> = {
  list: ['Calculator', 'TodoList', 'Board'],
};
