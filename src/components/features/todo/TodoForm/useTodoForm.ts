import { ChangeEventHandler, FormEvent, useCallback } from 'react';
import { usePostTodoAndCleanUp, useUpdateCurrentTodo } from '../store';

export const useTodoForm = (onSubmit?: () => void) => {
  const postTodo = usePostTodoAndCleanUp();
  const updateCurrentTodo = useUpdateCurrentTodo();

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => updateCurrentTodo({ title: e.currentTarget.value }),
    [updateCurrentTodo],
  );
  const handleDatePickerClick = useCallback(
    (date: Date) => updateCurrentTodo({ dueDate: date }),
    [updateCurrentTodo],
  );
  const handleMultiSelect = useCallback(
    (values: string[]) => updateCurrentTodo({ tags: values }),
    [updateCurrentTodo],
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      postTodo();
      onSubmit?.();
    },
    [onSubmit, postTodo],
  );

  return {
    handleInputChange,
    handleDatePickerClick,
    handleMultiSelect,
    handleSubmit,
  };
};
