import { Badge, Box, Flex } from '@/components/ui';
import { formatDate } from '@/utils/formatDate';
import { slate } from '@radix-ui/colors';
import { memo } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { TodoItemProps } from '../types';
import { useTodoItem } from './useTodoItem';
import { styled } from '/stitches.config';

type Props = TodoItemProps;

export const TodoItem = memo(function TodoItem(props: Props) {
  const { tagDict, handleCompleteButtonClick, handleEditButtonClick } =
    useTodoItem(props.id);

  return (
    <Flex
      justify="between"
      css={{
        userSelect: 'none',
        borderRadius: 8,
        border: '1px solid black',
      }}
    >
      <Flex align="center">
        <Flex justify="center" align="center" css={{ p: '1rem' }}>
          <CompleteButton onClick={handleCompleteButtonClick}>
            {props.complete && <AiOutlineCheck size={20} />}
          </CompleteButton>
        </Flex>
        <Flex direction="column" css={{ gap: '0.5rem', p: '1rem' }}>
          <div>
            <Box css={{ fontWeight: 'bold' }}>{props.title}</Box>
            {props.dueDate && (
              <Box
                css={{
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  color: slate.slate10,
                }}
              >
                {formatDate(props.dueDate)}
              </Box>
            )}
          </div>
          {props.tags && (
            <Flex wrap="wrap" css={{ gap: '1rem' }}>
              {props.tags.map((tag) => (
                <Badge key={tag}>{tagDict[tag]}</Badge>
              ))}
            </Flex>
          )}
        </Flex>
      </Flex>
      <Flex justify="center" align="center" css={{ p: '1rem' }}>
        <EditButton onClick={handleEditButtonClick}>
          <MdEdit size={20} />
        </EditButton>
      </Flex>
    </Flex>
  );
});

const CompleteButton = styled('button', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  size: '2rem',
  borderRadius: '100%',
  border: '1px solid currentColor',
  '&:focus': {
    boxShadow: '0 0 0 2px currentColor',
  },
});

const EditButton = styled('button', {
  zIndex: '$docked',
  color: slate.slate10,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  size: '2rem',
  borderRadius: '100%',
  '&:focus': {
    boxShadow: '0 0 0 2px currentColor',
  },
});
