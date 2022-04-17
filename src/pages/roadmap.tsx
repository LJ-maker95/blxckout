import type { NextPage } from "next";
import Head from "next/head";
import { RoadmapView } from "../views";

const Roadmap: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>BLXCKOUT NFT</title>
        <meta/>
        <script type="text/javascript" src="/static/roadmap.js"></script>
      </Head>
      <RoadmapView />
    </div>
  );
};

export default Roadmap;
