import type { NextPage } from "next";
import Head from "next/head";
import { StakingView } from "../views";

const Staking: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>BLXCKOUT NFT</title>
        <meta/>
      </Head>
      <StakingView />
    </div>
  );
};

export default Staking;
