import type { NextPage } from "next";
import Head from "next/head";
import { TeamView } from "../views";

const Team: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>BLXCKOUT</title>
        <meta/>
      </Head>
      <TeamView />
    </div>
  );
};

export default Team;
