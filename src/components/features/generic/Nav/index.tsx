import { Box, Flex, ScrollArea } from '@/components/ui';
import { memo } from 'react';
import { IoTodaySharp } from 'react-icons/io5';
import { MdTaskAlt, MdUpcoming } from 'react-icons/md';
import { NavItem } from './NavItem';
import { PostTagDialog } from './PostTagDialog';
import { SelectTags } from './SelectTags';

const navItems = [
  { href: '/', label: 'All', icon: <MdTaskAlt /> },
  { href: '/today', label: 'Today', icon: <IoTodaySharp /> },
  { href: '/upcoming', label: 'Upcoming', icon: <MdUpcoming /> },
];

export const Nav = memo(function Nav() {
  return (
    <Flex direction="column" css={{ p: '2rem', gap: '1rem' }}>
      <Box css={{ fontSize: '1.125rem', fontWeight: 'bold' }}>Menu</Box>
      <Box css={{ fontWeight: 'bold' }}>Tasks</Box>
      {navItems.map((item) => (
        <NavItem key={item.href} {...item} />
      ))}
      <Box css={{ fontWeight: 'bold' }}>Tags</Box>
      <ScrollArea css={{ maxHeight: 160 }}>
        <SelectTags />
      </ScrollArea>
      <PostTagDialog />
    </Flex>
  );
});
