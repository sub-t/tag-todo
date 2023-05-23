import { createAtom } from '@/lib/jotai';
import { TagId } from '../../tag/types';

export const selectedTagsAtom = createAtom<TagId[]>('selectedTags', []);
