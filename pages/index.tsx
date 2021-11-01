import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';
import MainView from '../components/MainView';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Addinex Case Study</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Platform for Preventing Prescription Drug Addiction & Misuse | Addinex Technologies"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <MainView />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.addinextech.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src="/addinexlogo.webp"
              alt="Addinex Logo"
              width={144}
              height={32}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
