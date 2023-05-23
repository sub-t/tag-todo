import dayjs from 'dayjs';
import { useCallback } from 'react';
import { TodoList } from '../features/todo/TodoList';
import { TodoItemProps } from '../features/todo/types';

export const Today = () => {
  const selector = useCallback(
    (todoList: TodoItemProps[]) =>
      todoList.filter((todo) => dayjs(todo.dueDate).isSame(dayjs(), 'day')),
    [],
  );
  return <TodoList selector={selector} />;
};
