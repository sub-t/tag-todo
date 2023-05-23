import { Flex, ScrollArea } from '@/components/ui';
import { WithChildren } from '@/types/common';
import { Controller } from './Controller';
import { FORM_WIDTH, Form } from './Form';
import { SELECTOR_WIDTH, Selector } from './Selector';
import { styled } from '/stitches.config';

type Props = WithChildren;

export const BasicLayout = (props: Props) => {
  return (
    <Flex css={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Selector />
      <MainWrapper width={{ '@md': 'md', '@lg': 'lg' }}>
        <ScrollArea>{props.children}</ScrollArea>
        <Controller />
      </MainWrapper>
      <Form />
    </Flex>
  );
};

const MainWrapper = styled('div', {
  position: 'relative',
  width: '100%',
  p: '2rem',

  variants: {
    width: {
      md: {
        maxWidth: `calc(100% - ${FORM_WIDTH})`,
      },
      lg: {
        maxWidth: `calc(100% - ${FORM_WIDTH} - ${SELECTOR_WIDTH})`,
      },
    },
  },
});
