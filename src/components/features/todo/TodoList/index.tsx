import { Flex } from '@/components/ui';
import { Empty } from '../Empty';
import { TodoItem } from '../TodoItem';
import { TodoItemProps } from '../types';
import { useTodoList } from './useTodoList';

type Props = {
  selector?: (todoList: TodoItemProps[]) => TodoItemProps[];
};

export const TodoList = (props: Props) => {
  const todoList = useTodoList(props.selector);

  return todoList.length ? (
    <Flex direction="column" css={{ gap: '1rem' }}>
      {todoList.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </Flex>
  ) : (
    <Empty />
  );
};
