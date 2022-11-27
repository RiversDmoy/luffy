import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1>Monkey D. Luffy</h1>
      <img src="https://giffiles.alphacoders.com/215/215753.gif" />
    </div>
  );
}
