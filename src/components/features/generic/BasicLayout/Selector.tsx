import { Sheet } from '@/components/ui';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Nav } from '../Nav';
import { isMobileMenuOpenAtom, useCloseMobileMenu } from '../store';
import { styled } from '/stitches.config';

export const Selector = () => {
  const router = useRouter();
  const isMobileMenuOpen = useAtomValue(isMobileMenuOpenAtom);
  const closeMobileMenu = useCloseMobileMenu();
  const isGeLg = useBreakpoint('lg');

  useEffect(() => {
    const handleRouteChange = () => {
      closeMobileMenu();
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Wrapper display={{ '@lg': true }}>
        <Nav />
      </Wrapper>
      {isGeLg || (
        <Sheet
          side="left"
          open={isMobileMenuOpen}
          onClose={closeMobileMenu}
          css={{ width: SELECTOR_WIDTH }}
        >
          <Nav />
        </Sheet>
      )}
    </>
  );
};

export const SELECTOR_WIDTH = '280px';

const Wrapper = styled('div', {
  width: SELECTOR_WIDTH,
  hegith: '100vh',

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
