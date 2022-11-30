import Head from 'next/head';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';
import { Main } from 'src/components/Main';
import styles from 'src/styles/Home.module.css';
import { useCallback } from 'react';



console.log(11123123123)

export default function Home() {

  const handelClick = useCallback((e) => {
    console.log(e.target.href)
    e.preventDefault;
    console.log(1233)
    alert(321)}, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      {/* <button onClick={() => alert(123)}>Button</button> */}
      <a href="/about" onClick={handelClick}>Button</a>
      <Main page='index' />
      <Footer />
    </div>
  );
}
