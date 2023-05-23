import { useAtomValue } from 'jotai';
import { useCallback } from 'react';
import { useOpenMobileForm } from '../../generic/store';
import { tagDictAtom } from '../../tag/store';
import { useSetCurrentTodo, useToggleTodoCompletion } from '../store';

export const useTodoItem = (id: string) => {
  const tagDict = useAtomValue(tagDictAtom);
  const toggleTodoCompletetion = useToggleTodoCompletion();
  const setCurrentTodo = useSetCurrentTodo();
  const openMobileTodoForm = useOpenMobileForm();

  const handleCompleteButtonClick = useCallback(
    () => toggleTodoCompletetion(id),
    [id, toggleTodoCompletetion],
  );

  const handleEditButtonClick = useCallback(() => {
    setCurrentTodo(id);
    openMobileTodoForm();
  }, [openMobileTodoForm, id, setCurrentTodo]);

  return {
    tagDict,
    handleCompleteButtonClick,
    handleEditButtonClick,
  };
};
