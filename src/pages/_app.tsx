import { BasicLayout } from '@/components/features/generic/BasicLayout';
import type { AppProps } from 'next/app';
import 'ress';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  );
}

export default MyApp;
