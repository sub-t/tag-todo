/* eslint-disable @typescript-eslint/no-explicit-any */
import { Queries, queries, renderHook } from '@testing-library/react';
import { Provider } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';

type Props = {
  initialValues: any;
  children: any;
};

const HydrateAtoms = ({ initialValues, children }: Props) => {
  useHydrateAtoms(initialValues);
  return children;
};

export const TestProvider = ({ initialValues, children }: Props) => {
  useHydrateAtoms(initialValues);
  return (
    <Provider>
      <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
    </Provider>
  );
};

export const renderJotaiHooks = <
  Result,
  Props,
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container,
>(
  render: (initialProps: Props) => Result,
  initialValues: any,
) =>
  renderHook<Result, Props, Q, Container, BaseElement>(render, {
    wrapper: ({ children }: { children: any }) => (
      <TestProvider initialValues={initialValues}>{children}</TestProvider>
    ),
  });
