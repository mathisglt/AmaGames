import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import styles from './index.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mon Portfolio',
  description: 'Portfolio de Gaultier Mathis',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mon Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <nav className={styles.navbar}>
          <ul className={styles.liens}>
            <li>
              <Link href="/portfolio" className={styles.lien}>Projets</Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
        <footer className={styles.footer}>Made by Ama</footer>
      </body>
    </html>
  );
};

export default Layout;
