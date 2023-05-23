import { WithCss } from '@/types/common';
import NextLink from 'next/link';
import { ElementRef, forwardRef } from 'react';
import { styled } from '/stitches.config';

type Props = Omit<React.ComponentPropsWithoutRef<typeof NextLink>, 'href'> &
  WithCss & {
    href: string;
  };

export const Link = forwardRef<ElementRef<typeof NextLink>, Props>(
  function Link({ children, href, ...props }, ref) {
    return href.startsWith('http') ? (
      <StyledLink
        {...props}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
      >
        {children}
      </StyledLink>
    ) : (
      <StyledLink {...props} href={href} ref={ref}>
        {children}
      </StyledLink>
    );
  },
);

const StyledLink = styled(NextLink, {
  textDecoration: 'none',
  color: 'Black',
});
