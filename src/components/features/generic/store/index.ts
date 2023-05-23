import { createAtom } from '@/lib/jotai';
import { useSetAtom } from 'jotai';
import { useCallback } from 'react';

type State = {
  isMobileFormOpen: boolean;
  isMobileMenuOpen: boolean;
};

export const isMobileFormOpenAtom = createAtom<State['isMobileFormOpen']>(
  'isMobileFormOpen',
  false,
);

export const useOpenMobileForm = () => {
  const setMobileFormOpen = useSetAtom(isMobileFormOpenAtom);
  return useCallback(() => setMobileFormOpen(true), [setMobileFormOpen]);
};

export const useCloseMobileForm = () => {
  const setMobileFormOpen = useSetAtom(isMobileFormOpenAtom);
  return useCallback(() => setMobileFormOpen(false), [setMobileFormOpen]);
};

export const isMobileMenuOpenAtom = createAtom<State['isMobileMenuOpen']>(
  'isMobileMenuOpen',
  false,
);

export const useOpenMobileMenu = () => {
  const setMobileMenuOpen = useSetAtom(isMobileMenuOpenAtom);
  return useCallback(() => setMobileMenuOpen(true), [setMobileMenuOpen]);
};

export const useCloseMobileMenu = () => {
  const setMobileMenuOpen = useSetAtom(isMobileMenuOpenAtom);
  return useCallback(() => setMobileMenuOpen(false), [setMobileMenuOpen]);
};
