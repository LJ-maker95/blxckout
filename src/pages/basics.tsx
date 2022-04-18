import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView } from "../views";

const Basics: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>BLXCKOUT NFT</title>
        <meta
          name="description"
          content="Home"
        />
      </Head>
      <BasicsView />
    </div>
  );
};

export default Basics;
