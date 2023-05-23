import dayjs from 'dayjs';
import { TodoItemProps } from '../../types';

export const initialTodoList: TodoItemProps[] = [
  {
    id: '1',
    title: 'title1',
    dueDate: dayjs().toDate(),
    tags: ['tag1', 'tag2'],
    complete: false,
  },
  {
    id: '2',
    title: 'title2',
    dueDate: dayjs().toDate(),
    tags: ['tag1', 'tag2'],
    complete: false,
  },
  {
    id: '3',
    title: 'title3',
    dueDate: dayjs().toDate(),
    tags: ['tag1', 'tag2'],
    complete: false,
  },
];
