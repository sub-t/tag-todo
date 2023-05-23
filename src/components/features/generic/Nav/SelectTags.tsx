import { MultiSelect } from '@/components/ui';
import { useAtom, useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { tagListAtom } from '../../tag/store';
import { selectedTagsAtom } from '../store/selectedTags';

export const SelectTags = () => {
  const tagList = useAtomValue(tagListAtom);
  const [selectedTags, setSelectedTags] = useAtom(selectedTagsAtom);

  const items = useMemo(
    () => tagList.map((tag) => ({ value: tag.id, label: tag.name })),
    [tagList],
  );

  return (
    <MultiSelect
      items={items}
      selectedItemValues={selectedTags}
      onSelect={setSelectedTags}
      fallback={undefined}
    />
  );
};
