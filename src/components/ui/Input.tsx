import { styled } from 'stitches.config';

export const Input = styled('input', {
  flexGrow: 1,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '2.5rem',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: '1rem',
  lineHeight: 1,
  boxShadow: `0 0 0 1px currentColor`,

  '&:focus': { boxShadow: `0 0 0 2px currentColor` },
});
