import Head from 'next/head';
import { FC, ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children, title = 'Mantine' }) => {
  return (
    <div className=''>
      <Head>
        <title>{title}</title>
      </Head>
      <header></header>
      <main className='p-4'>{children}</main>
      <footer></footer>
    </div>
  );
};
