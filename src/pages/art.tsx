import type { NextPage } from "next";
import Head from "next/head";
import { ArtView } from "../views";

const Art: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>"BLXCKOUT"</title>
        <meta/>
      </Head>
      <ArtView />
    </div>
  );
};

export default Art;
