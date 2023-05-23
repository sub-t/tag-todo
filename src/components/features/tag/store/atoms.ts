import { createAtom } from '@/lib/jotai';
import { selectAtom } from 'jotai/utils';
import { nanoid } from 'nanoid';
import { TagData, TagId, TagItemProps } from '../types';

export const defaultCurrentTagData: TagData = {
  name: '',
};
export const defaultCurrentTagId = undefined;

const toDict = (list: TagItemProps[]) => {
  return Object.fromEntries(list.map((tag) => [tag.id, tag.name]));
};

type State = {
  currentTag: TagData;
  currentTagId?: TagId;
  isEditing: boolean;
  tagList: TagItemProps[];
  tagDict: Record<TagId, TagData['name']>;
};

export const currentTagAtom = createAtom<State['currentTag']>(
  'currentTag',
  defaultCurrentTagData,
);
export const currentTagIdAtom = createAtom<State['currentTagId']>(
  'currentTagId',
  defaultCurrentTagId,
);
export const isEditingAtom = selectAtom<
  State['currentTagId'],
  State['isEditing']
>(currentTagIdAtom, (state) => !!state);

export const createTagItem = (tagData: TagData, id?: TagId): TagItemProps => ({
  id: id ?? nanoid(),
  ...tagData,
});

export const tagListAtom = createAtom<State['tagList']>('tagList', [
  { name: 'name', id: '1' },
  { name: 'short name', id: '2' },
  { name: 'very long name name', id: '3' },
  { name: 'name', id: '4' },
  { name: 'vs', id: '5' },
  { name: 'name', id: '6' },
]);
export const tagDictAtom = selectAtom(tagListAtom, (state) => toDict(state));
