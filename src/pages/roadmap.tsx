import type { NextPage } from "next";
import Head from "next/head";
import { RoadmapView } from "../views";

const Roadmap: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>"BLXCKOUT"</title>
        <meta/>
      </Head>
      <RoadmapView />
    </div>
  );
};

export default Roadmap;
