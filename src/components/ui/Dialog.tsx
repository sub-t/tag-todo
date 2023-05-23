import { CommonProps } from '@/types/common';
import { blackA } from '@radix-ui/colors';
import {
  Content,
  Overlay,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dialog';
import { ElementRef, ReactNode, forwardRef } from 'react';
import { keyframes, styled } from '/stitches.config';

type Props = CommonProps & {
  open?: boolean;
  onClose?: () => void;
  trigger?: ReactNode;
};

export const Dialog = forwardRef<ElementRef<typeof Content>, Props>(
  function Dialog({ children, open, onClose, trigger, css }, ref) {
    return (
      <Root open={open}>
        {trigger && <Trigger asChild>{trigger}</Trigger>}
        <Portal>
          <StyledOverlay onClick={onClose} />
          <StyledContent ref={ref} css={css}>
            {children}
          </StyledContent>
        </Portal>
      </Root>
    );
  },
);

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const StyledOverlay = styled(Overlay, {
  zIndex: '$overlay',
  position: 'fixed',
  inset: 0,
  backgroundColor: blackA.blackA9,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const StyledContent = styled(Content, {
  zIndex: '$modal',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'max-content',
  borderRadius: 6,
  backgroundColor: 'white',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
});
