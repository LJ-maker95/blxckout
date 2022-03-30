import type { NextPage } from "next";
import Head from "next/head";
import { TerminalView } from "../views";

const Terminal: NextPage = (props) => {
  return (
  <div>
    <div>
      <Head>
        <title>"BLXCKOUT"</title>
        <meta/>
      </Head>
      <TerminalView />
    </div>
  </div>
  );
};

export default Terminal;
