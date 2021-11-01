import Link from 'next/link';

import TabView from './TabView';
import styles from '../styles/MainView.module.css';

export default function MainView() {
  return (
    <div className={styles.mainContainer}>
      <Link href="/inputs">
        <a role="button" className={styles.button}>
          Add
        </a>
      </Link>
      <TabView />
    </div>
  );
}
