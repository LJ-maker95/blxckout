import type { NextPage } from "next";
import Head from "next/head";
import { AboutView } from "../views";

const About: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>BLXCKOUT NFT</title>
        <meta
          name="description"
          content="Home"
        />
      </Head>
      <AboutView />
    </div>
  );
};

export default About;
