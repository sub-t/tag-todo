import { useAtomValue, useSetAtom } from 'jotai';
import { useCallback } from 'react';
import { useRemoveTag } from '../../todo/store';
import { DeleteTagDTO, TagData, TagId } from '../types';
import {
  createTagItem,
  currentTagAtom,
  currentTagIdAtom,
  defaultCurrentTagData,
  defaultCurrentTagId,
  tagListAtom,
} from './atoms';

type Action = {
  setCurrentTag: (tagId?: TagId) => void;
  updateCurrentTag: (updateCurrentTagDTO: Partial<TagData>) => void;
  resetCurrentTag: () => void;
  postTag: () => void;
  deleteTag: (deleteTagDTO: DeleteTagDTO) => void;
};

export const useSetCurrentTag = (): Action['setCurrentTag'] => {
  const tagList = useAtomValue(tagListAtom);
  const setCurrentTag = useSetAtom(currentTagAtom);
  const setCurrentTagId = useSetAtom(currentTagIdAtom);

  return useCallback(
    (tagId) => {
      setCurrentTag(
        tagList.find((tag) => tag.id === tagId) ?? defaultCurrentTagData,
      );
      setCurrentTagId(tagId);
    },
    [setCurrentTag, setCurrentTagId, tagList],
  );
};

export const useUpdateCurrentTag = (): Action['updateCurrentTag'] => {
  const setCurrentTag = useSetAtom(currentTagAtom);

  return useCallback(
    (updateCurrentTagDTO) =>
      setCurrentTag((state) => ({ ...state, ...updateCurrentTagDTO })),
    [setCurrentTag],
  );
};

export const useResetCurrentTag = (): Action['resetCurrentTag'] => {
  const setCurrentTag = useSetAtom(currentTagAtom);
  const setCurrentTagId = useSetAtom(currentTagIdAtom);

  return useCallback(() => {
    setCurrentTag(defaultCurrentTagData);
    setCurrentTagId(defaultCurrentTagId);
  }, [setCurrentTag, setCurrentTagId]);
};

const usePostTag = (): Action['postTag'] => {
  const currentTag = useAtomValue(currentTagAtom);
  const currentTagId = useAtomValue(currentTagIdAtom);
  const setTagList = useSetAtom(tagListAtom);

  return useCallback(() => {
    setTagList((state) => {
      if (currentTagId) {
        return state.map((tag) =>
          tag.id === currentTagId
            ? createTagItem(currentTag, currentTagId)
            : tag,
        );
      }
      return [...state, createTagItem(currentTag)];
    });
  }, [currentTag, currentTagId, setTagList]);
};

export const usePostTagAndCleanUp = () => {
  const postTag = usePostTag();
  const resetCurrentTag = useResetCurrentTag();

  return useCallback(() => {
    postTag();
    resetCurrentTag();
  }, [postTag, resetCurrentTag]);
};

const useDeleteTag = (): Action['deleteTag'] => {
  const setTagList = useSetAtom(tagListAtom);

  return useCallback(
    (deleteTagDTO) =>
      setTagList((state) => state.filter((tag) => tag.id !== deleteTagDTO.id)),
    [setTagList],
  );
};

export const useDeleteTagCascade = () => {
  const deleteTag = useDeleteTag();
  const removeTag = useRemoveTag();

  return useCallback(
    (deleteTagDTO: DeleteTagDTO) => {
      deleteTag(deleteTagDTO);
      removeTag(deleteTagDTO);
    },
    [deleteTag, removeTag],
  );
};
