import { Dialog, ScrollArea, Sheet } from '@/components/ui';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useAtomValue } from 'jotai';
import { TodoForm } from '../../todo/TodoForm';
import { isMobileFormOpenAtom, useCloseMobileForm } from '../store';
import { styled } from '/stitches.config';

export const Form = () => {
  const isMobileFormOpen = useAtomValue(isMobileFormOpenAtom);
  const closeMobileForm = useCloseMobileForm();
  const isGeMd = useBreakpoint('md');
  const isGeSm = useBreakpoint('sm');

  return (
    <>
      <Wrapper display={{ '@md': true }}>
        <TodoForm />
      </Wrapper>
      {isGeSm && !isGeMd && (
        <Dialog
          open={isMobileFormOpen}
          onClose={closeMobileForm}
          css={{ height: 'max-content' }}
        >
          <ScrollArea
            css={{ width: FORM_WIDTH, height: '90vh', maxHeight: 640 }}
          >
            <TodoForm onSubmit={closeMobileForm} />
          </ScrollArea>
        </Dialog>
      )}
      {isGeSm || (
        <Sheet
          side="bottom"
          open={isMobileFormOpen}
          onClose={closeMobileForm}
          css={{ height: 'max-content' }}
        >
          <ScrollArea css={{ height: '90vh', maxHeight: 640 }}>
            <TodoForm onSubmit={closeMobileForm} />
          </ScrollArea>
        </Sheet>
      )}
    </>
  );
};

export const FORM_WIDTH = '360px';

const Wrapper = styled('div', {
  width: FORM_WIDTH,
  height: '100vh',

  variants: {
    display: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },
  defaultVariants: {
    display: false,
  },
});
