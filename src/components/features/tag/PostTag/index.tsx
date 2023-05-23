import { Button, Flex, Input } from '@/components/ui';
import { useAtomValue } from 'jotai';
import { currentTagAtom, isEditingAtom, useResetCurrentTag } from '../store';
import { usePostTag } from './usePostTag';

export const PostTag = () => {
  const currentTag = useAtomValue(currentTagAtom);
  const isEditing = useAtomValue(isEditingAtom);
  const resetCurrentTag = useResetCurrentTag();

  const { handleInputChange, handleSubmit } = usePostTag();

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
                <button type="button" onClick={resetCurrentTag}>
                  編集を解除する
                </button>
              </>
            ) : (
              'タグをクリックして編集する'
            )}
          </Flex>
          <Input
            name="name"
            id="name"
            value={currentTag.name}
            onChange={handleInputChange}
            required
            css={{ width: '100%' }}
          />
        </div>
        <Button>{isEditing ? '編集' : '作成'}</Button>
      </Flex>
    </form>
  );
};
