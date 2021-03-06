import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {session && session.user ? (
        <div>
          <p>{session.user.name}</p>
          <p>{session.user.email}</p>
          <img
            src={session.user.image}
            width={100}
            height={100}
            style={{ borderRadius: "500px" }}
          />
        </div>
      ) : (
        <p>Home page</p>
      )}
    </div>
  );
}
