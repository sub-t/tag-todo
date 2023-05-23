import { useAtomValue } from 'jotai';
import { selectAtom } from 'jotai/utils';
import { useCallback } from 'react';
import { selectedTagsAtom } from '../../generic/store/selectedTags';
import { todoListAtom } from '../store';
import { TodoItemProps } from '../types';

const baseSelector = (todoList: TodoItemProps[]) => todoList;

export const useTodoList = (selector = baseSelector) => {
  const selectedTags = useAtomValue(selectedTagsAtom);
  const tagsSelector = useCallback(
    (todoList: TodoItemProps[]) =>
      selector(todoList).filter((todo) => {
        const todoTagSet = new Set(todo.tags);
        return selectedTags.every((selectedTag) => todoTagSet.has(selectedTag));
      }),
    [selectedTags, selector],
  );

  const todoList = useAtomValue(selectAtom(todoListAtom, tagsSelector));

  return todoList;
};
