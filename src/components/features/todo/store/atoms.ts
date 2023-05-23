import { createAtom } from '@/lib/jotai';
import dayjs from 'dayjs';
import { selectAtom } from 'jotai/utils';
import { nanoid } from 'nanoid';
import { TodoData, TodoId, TodoItemProps } from '../types';

type State = {
  currentTodo: TodoData;
  currentTodoId?: TodoId;
  isEditing: boolean;
  todoList: TodoItemProps[];
};

export const defaultCurrentTodoData: TodoData = {
  title: '',
  dueDate: dayjs().toDate(),
};
export const defaultCurrentTodoId = undefined;
const defaultComplete = false;

export const createTodoItem = (
  todoData: TodoData,
  id?: TodoId,
): TodoItemProps => ({
  id: id ?? nanoid(),
  complete: defaultComplete,
  ...todoData,
});

export const currentTodoAtom = createAtom<State['currentTodo']>(
  'currentTodo',
  defaultCurrentTodoData,
);
export const currentTodoIdAtom = createAtom<State['currentTodoId']>(
  'currentTodo',
  defaultCurrentTodoId,
);
export const isEditingAtom = selectAtom<
  State['currentTodoId'],
  State['isEditing']
>(currentTodoIdAtom, (state) => !!state);

export const todoListAtom = createAtom<State['todoList']>('todoList', []);
export const todoDataListAtom = selectAtom(todoListAtom, (state) =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  state.map(({ complete, ...todo }) => todo),
);
