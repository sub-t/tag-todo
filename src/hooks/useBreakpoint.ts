import { breakpoints } from '@/configs';
import { useCallback, useState } from 'react';
import { useEventListener } from './useEventListener';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export function useBreakpoint(breakpoint: keyof typeof breakpoints) {
  const [windowSize, setWindowSize] = useState(false);

  const handleSize = useCallback(() => {
    setWindowSize(window.innerWidth >= breakpoints[breakpoint]);
  }, [breakpoint]);

  useEventListener('resize', handleSize);

  useIsomorphicLayoutEffect(() => {
    handleSize();
  }, []);

  return windowSize;
}
