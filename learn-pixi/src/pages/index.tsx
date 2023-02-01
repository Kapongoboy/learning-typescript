import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Learning Pixi</title>
        <meta name="description" content="Learning pixi using next server" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#E9E8E8] to-[#913175]">
        <h1>Hello PixiJS</h1>
      </main>
    </>
  );
};

export default Home;
