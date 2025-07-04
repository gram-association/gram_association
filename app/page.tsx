import Head from "next/head";
import Home from "./home/page";

export default function page() {
  return (
    <>
      <Head>
        <title>GRAM Association</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
