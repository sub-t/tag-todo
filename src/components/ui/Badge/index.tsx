import { mauve, violet } from '@radix-ui/colors';
import { styled } from '/stitches.config';

export const Badge = styled('span', {
  userSelect: 'none',
  padding: '1px 8px',
  borderRadius: 4,
  fontSize: '0.8rem',
  color: 'White',

  variants: {
    variant: {
      default: {
        backgroundColor: mauve.mauve10,
      },
      highlight: {
        backgroundColor: violet.violet9,
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
