import { Badge, Button, Dialog, Flex, ScrollArea } from '@/components/ui';
import { useAtomValue } from 'jotai';
import { PostTag } from '../../tag/PostTag';
import {
  currentTagIdAtom,
  tagListAtom,
  useSetCurrentTag,
} from '../../tag/store';

export const PostTagDialog = () => {
  const tagList = useAtomValue(tagListAtom);
  const currentTagId = useAtomValue(currentTagIdAtom);
  const setCurrentTag = useSetCurrentTag();

  return (
    <Dialog trigger={<Button>タグを編集する</Button>}>
      <ScrollArea css={{ width: 360, maxHeight: 160, p: '2rem', pb: 0 }}>
        <Flex wrap="wrap" css={{ gap: '1rem' }}>
          {tagList.map((tag) => (
            <Badge
              as="button"
              key={tag.id}
              onClick={() => setCurrentTag(tag.id)}
              variant={currentTagId === tag.id ? 'highlight' : 'default'}
            >
              {tag.name}
            </Badge>
          ))}
        </Flex>
      </ScrollArea>
      <PostTag />
    </Dialog>
  );
};
