import Link from 'next/link';

import styles from './layout.module.css';
import SeoHead from './seoHead';
import Header from './header';

export default function Layout({ children, home }) {
  return (
    <div className={styles.wrapper}>
      <SeoHead />
      <Header />
      <div className={styles.container}>
        <main>{children}</main>
      </div>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}
    </div>
  );
}
