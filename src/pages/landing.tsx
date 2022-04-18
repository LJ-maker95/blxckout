import type { NextPage } from "next";
import Head from "next/head";
import { LandingView } from "../views";

const Landing: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>BLXCKOUT NFT</title>
        <meta/>
      </Head>
      <LandingView />
    </div>
  );
};

export default Landing;
