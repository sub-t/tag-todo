import { Box, Flex, Link } from '@/components/ui';
import { ReactElement, ReactNode, cloneElement } from 'react';

type Props = {
  href: string;
  label: string;
  icon: ReactNode;
};

export const NavItem = (props: Props) => {
  const icon = cloneElement(props.icon as ReactElement, { size: 24 });

  return (
    <Link
      href={props.href}
      css={{
        p: '0.375rem 1rem',
        borderRadius: 999,
        transitionDuration: '200ms',
        '&:focus': {
          boxShadow: '0 0 0 2px currentColor',
        },
      }}
    >
      <Flex
        as="span"
        align="center"
        css={{
          gap: '0.5rem',
        }}
      >
        {icon}
        <Box as="span" css={{ fontWeight: 'bold' }}>
          {props.label}
        </Box>
      </Flex>
    </Link>
  );
};
