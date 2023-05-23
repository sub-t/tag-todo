import { useAtomValue, useSetAtom } from 'jotai';
import { useCallback } from 'react';
import { DeleteTagDTO } from '../../tag/types';
import { TodoData, TodoId } from '../types';
import {
  createTodoItem,
  currentTodoAtom,
  currentTodoIdAtom,
  defaultCurrentTodoData,
  defaultCurrentTodoId,
  todoDataListAtom,
  todoListAtom,
} from './atoms';

type Action = {
  setCurrentTodo: (todoId?: TodoId) => void;
  updateCurrentTodo: (updateCurrentTodoDTO: Partial<TodoData>) => void;
  resetCurrentTodo: () => void;
  postTodo: () => void;
  deleteTodos: () => void;
  removeTag: (deleteTagDTO: DeleteTagDTO) => void;
  toggleTodoCompletion: (todoId: TodoId) => void;
};

export const useSetCurrentTodo = (): Action['setCurrentTodo'] => {
  const todoDataList = useAtomValue(todoDataListAtom);
  const setCurrentTodo = useSetAtom(currentTodoAtom);
  const setCurrentTodoId = useSetAtom(currentTodoIdAtom);

  return useCallback(
    (todoId) => {
      setCurrentTodo(
        todoDataList.find((todo) => todo.id === todoId) ??
          defaultCurrentTodoData,
      );
      setCurrentTodoId(todoId);
    },
    [setCurrentTodo, setCurrentTodoId, todoDataList],
  );
};

export const useUpdateCurrentTodo = (): Action['updateCurrentTodo'] => {
  const setCurrentTodo = useSetAtom(currentTodoAtom);

  return useCallback(
    (updateCurrentTodoDTO: Partial<TodoData>) =>
      setCurrentTodo((state) => ({ ...state, ...updateCurrentTodoDTO })),
    [setCurrentTodo],
  );
};

export const useResetCurrentTodo = (): Action['resetCurrentTodo'] => {
  const setCurrentTodo = useSetAtom(currentTodoAtom);
  const setCurrentTodoId = useSetAtom(currentTodoIdAtom);

  return useCallback(() => {
    setCurrentTodo(defaultCurrentTodoData);
    setCurrentTodoId(defaultCurrentTodoId);
  }, [setCurrentTodo, setCurrentTodoId]);
};

const usePostTodo = (): Action['postTodo'] => {
  const currentTodo = useAtomValue(currentTodoAtom);
  const currentTodoId = useAtomValue(currentTodoIdAtom);
  const setTodoList = useSetAtom(todoListAtom);

  return useCallback(() => {
    setTodoList((state) => {
      if (currentTodoId) {
        return state.map((todo) =>
          todo.id === currentTodoId
            ? createTodoItem(currentTodo, currentTodoId)
            : todo,
        );
      }
      return [...state, createTodoItem(currentTodo)];
    });
  }, [currentTodo, currentTodoId, setTodoList]);
};

export const usePostTodoAndCleanUp = () => {
  const postTodo = usePostTodo();
  const resetCurrentTodo = useResetCurrentTodo();

  return useCallback(() => {
    postTodo();
    resetCurrentTodo();
  }, [postTodo, resetCurrentTodo]);
};

export const useDeleteTodos = (): Action['deleteTodos'] => {
  const setTodoList = useSetAtom(todoListAtom);

  return useCallback(
    () => setTodoList((state) => state.filter((todo) => !todo.complete)),
    [setTodoList],
  );
};

export const useRemoveTag = (): Action['removeTag'] => {
  const setTodoList = useSetAtom(todoListAtom);

  return useCallback(
    (deleteTagDTO) =>
      setTodoList((state) =>
        state.map((todo) => ({
          ...todo,
          tags: todo.tags?.filter((tag) => tag != deleteTagDTO.id),
        })),
      ),
    [setTodoList],
  );
};

export const useToggleTodoCompletion = (): Action['toggleTodoCompletion'] => {
  const setTodoList = useSetAtom(todoListAtom);

  return useCallback(
    (todoId) =>
      setTodoList((state) =>
        state.map((todo) =>
          todo.id === todoId ? { ...todo, complete: !todo.complete } : todo,
        ),
      ),
    [setTodoList],
  );
};
