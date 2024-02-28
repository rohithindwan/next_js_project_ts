'use client'
import Link from 'next/link'
import styles from "./page.module.css";

export default function Home() {


  return (
    <main className={styles.main}>

      <div>tis is home page </div>
      <Link href={{
        pathname: '/about',
        query: { name: 'test' },
      }}>About</Link>
      <Link href="/login">login </Link>
      <Link href="/deshboard">deshboard </Link>
    </main>
  );
}
