import { Box, Flex } from '@/components/ui';
import { mauve } from '@radix-ui/colors';
import { memo } from 'react';
import { CgSmileNoMouth } from 'react-icons/cg';

export const Empty = memo(function Empty() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      css={{
        gap: '1rem',
        width: '100%',
        height: '100%',
        color: mauve.mauve8,
      }}
    >
      <CgSmileNoMouth size={256} />
      <Flex direction="column" align="center" css={{ gap: '0.5rem' }}>
        <Box css={{ fontSize: '2rem', fontWeight: 'bold' }}>Empty List!</Box>
        <Box css={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
          タスクがありません
        </Box>
      </Flex>
    </Flex>
  );
});
