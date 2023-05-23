import { styled } from 'stitches.config';

export const IconButton = styled('button', {
  userSelect: 'none',
  flexShrink: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '2.5rem',
  width: '2.5rem',
  borderRadius: '100%',
  color: 'Black',
  backgroundColor: 'white',
  boxShadow: `0 0 0 1px currentColor`,

  '&:focus': { boxShadow: `0 0 0 2px currentColor` },
});
