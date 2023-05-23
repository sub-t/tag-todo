import {
  Box,
  Calendar,
  Flex,
  ScrollArea,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui';
import { MultiSelect } from '@/components/ui/MultiSelect';
import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { tagListAtom } from '../../tag/store';
import { currentTodoAtom } from '../store';

const fallback = <Box css={{ fontSize: '0.85rem' }}>現在タグがありません</Box>;

type Props = {
  onDatePickerClick: (date: Date) => void;
  onMultiSelect: (values: string[]) => void;
};

export const FormTabs = (props: Props) => {
  const currentTodo = useAtomValue(currentTodoAtom);
  const tagList = useAtomValue(tagListAtom);

  const items = useMemo(
    () => tagList.map((tag) => ({ value: tag.id, label: tag.name })),
    [tagList],
  );

  return (
    <Tabs defaultValue="calendar">
      <TabsList>
        <TabsTrigger value="calendar">Due Date</TabsTrigger>
        <TabsTrigger value="tags">Tags</TabsTrigger>
      </TabsList>
      <TabsContent value="calendar">
        <Flex justify="center" align="center" css={{ height: 320 }}>
          <Calendar
            date={currentTodo.dueDate}
            onClick={props.onDatePickerClick}
          />
        </Flex>
      </TabsContent>
      <TabsContent value="tags">
        <ScrollArea css={{ height: 320 }}>
          <MultiSelect
            items={items}
            selectedItemValues={currentTodo.tags}
            onSelect={props.onMultiSelect}
            fallback={fallback}
          />
        </ScrollArea>
      </TabsContent>
    </Tabs>
  );
};
