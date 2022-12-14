import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Content from "./components/Content";
import Header from "./components/Header";
import LeftNavbar from "./components/LeftNavbar";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Dashboard One</title>
        <meta name="description" content="Created by Batanai jr Gwanyanya" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <div className={styles.container}>
        <LeftNavbar />
        <Header/>
        <Content/>
      </div>
    </div>
  );
}
