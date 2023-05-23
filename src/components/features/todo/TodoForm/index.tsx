import { Button, Flex, Input } from '@/components/ui';
import { useAtomValue } from 'jotai';
import { currentTodoAtom, isEditingAtom, useResetCurrentTodo } from '../store';
import { FormTabs } from './FormTabs';
import { useTodoForm } from './useTodoForm';

type Props = {
  onSubmit?: () => void;
};

export const TodoForm = (props: Props) => {
  const currentTodo = useAtomValue(currentTodoAtom);
  const isEditing = useAtomValue(isEditingAtom);
  const resetCurrentTodo = useResetCurrentTodo();

  const {
    handleInputChange,
    handleDatePickerClick,
    handleMultiSelect,
    handleSubmit,
  } = useTodoForm(props.onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" css={{ p: '2rem', gap: '2rem' }}>
        <div>
          <Flex
            align="center"
            css={{
              gap: '1rem',
              height: 32,
              fontSize: '0.85rem',
              fontWeight: 'bold',
            }}
          >
            {isEditing ? (
              <>
                編集中
                <button type="button" onClick={resetCurrentTodo}>
                  編集を解除する
                </button>
              </>
            ) : (
              'タスクを追加する'
            )}
          </Flex>
          <Input
            name="title"
            id="title"
            value={currentTodo.title}
            onChange={handleInputChange}
            required
            css={{ width: '100%' }}
          />
        </div>
        <FormTabs
          onDatePickerClick={handleDatePickerClick}
          onMultiSelect={handleMultiSelect}
        />
        <Button>{isEditing ? '編集' : '作成'}</Button>
      </Flex>
    </form>
  );
};
