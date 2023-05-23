import { renderJotaiHooks } from '@/tests/jotai';
import dayjs from 'dayjs';
import { useAtomValue } from 'jotai';
import { currentTodoAtom, currentTodoIdAtom, todoListAtom } from '../atoms';
import { useSetCurrentTodo } from '../hooks';
import { initialTodoList } from './fixtures';

test('should not increment on max (100)', () => {
  const { result } = renderJotaiHooks(
    () => ({
      setCurrentTodo: useSetCurrentTodo(),
      currentTodo: useAtomValue(currentTodoAtom),
      currentTodoId: useAtomValue(currentTodoIdAtom),
    }),
    [todoListAtom, initialTodoList],
  );

  result.current.setCurrentTodo('1');

  expect(result.current.currentTodo).toStrictEqual({
    title: 'title1',
    dueDate: dayjs().toDate(),
    tags: ['tag1', 'tag2'],
  });

  expect(result.current.currentTodoId).toBe('1');
});
