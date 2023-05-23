import { blackA, mauve, violet } from '@radix-ui/colors';
import { Content, List, Root, Trigger } from '@radix-ui/react-tabs';
import { styled } from '@stitches/react';

export const Tabs = styled(Root, {
  display: 'flex',
  flexDirection: 'column',
  boxShadow: `0 2px 10px ${blackA.blackA4}`,
});

export const TabsList = styled(List, {
  flexShrink: 0,
  display: 'flex',
  borderBottom: `1px solid ${mauve.mauve6}`,
});

export const TabsTrigger = styled(Trigger, {
  userSelect: 'none',
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 45,
  padding: '0 20px',
  backgroundColor: 'white',
  fontSize: 15,
  lineHeight: 1,
  color: mauve.mauve11,
  '&:first-child': { borderTopLeftRadius: 6 },
  '&:last-child': { borderTopRightRadius: 6 },
  '&:hover': { color: violet.violet11 },
  '&[data-state="active"]': {
    color: violet.violet11,
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px black` },
});

export const TabsContent = styled(Content, {
  flexGrow: 1,
  backgroundColor: 'white',
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: 'none',
  '&:focus': { boxShadow: `0 0 0 2px black` },
});
