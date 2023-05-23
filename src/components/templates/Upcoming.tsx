import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { useCallback } from 'react';
import { TodoList } from '../features/todo/TodoList';
import { TodoItemProps } from '../features/todo/types';

dayjs.extend(isBetween);

export const Upcoming = () => {
  const selector = useCallback(
    (todoList: TodoItemProps[]) =>
      todoList.filter((todo) =>
        dayjs(todo.dueDate).isBetween(
          dayjs(),
          dayjs().add(7, 'day'),
          'day',
          '(]',
        ),
      ),
    [],
  );
  return <TodoList selector={selector} />;
};
