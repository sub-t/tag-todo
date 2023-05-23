import { Badge, Flex } from '@/components/ui';
import { ReactNode, memo, useCallback, useMemo } from 'react';

type Item = {
  label: string;
  value: string;
};

type Props = {
  items: Item[];
  selectedItemValues?: string[];
  onSelect: (values: string[]) => void;
  fallback: ReactNode;
};

export const MultiSelect = memo(function MultiSelect(props: Props) {
  const { items, selectedItemValues = [], onSelect, fallback } = props;

  const selectedItemValueSet = useMemo(
    () => new Set(selectedItemValues),
    [selectedItemValues],
  );

  const handleSelect = useCallback(
    (selected: string) => {
      const newSelectedItemValues = selectedItemValueSet.has(selected)
        ? selectedItemValues.filter((item) => item != selected)
        : [...selectedItemValues, selected];
      onSelect(newSelectedItemValues);
    },
    [onSelect, selectedItemValueSet, selectedItemValues],
  );

  return (
    <Flex
      direction="column"
      css={{ userSelect: 'none', gap: '1rem', p: '1rem' }}
    >
      {items.length ? (
        <Flex wrap="wrap" css={{ gap: '0.5rem' }}>
          {items.map((item) => {
            return (
              <Badge
                key={item.value}
                as="button"
                type="button"
                onClick={() => {
                  handleSelect(item.value);
                }}
                variant={
                  selectedItemValueSet.has(item.value) ? 'highlight' : 'default'
                }
              >
                {item.label}
              </Badge>
            );
          })}
        </Flex>
      ) : (
        <>{fallback}</>
      )}
    </Flex>
  );
});
