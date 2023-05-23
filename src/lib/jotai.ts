import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const prefix = 'subt-todo-';

export const createAtom = <T>(key: string, initialValue: T) =>
  process.env.NODE_ENV === 'production'
    ? atomWithStorage<T>(prefix + key, initialValue)
    : atom<T>(initialValue);
