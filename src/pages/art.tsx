import type { NextPage } from "next";
import Head from "next/head";
import { ArtView } from "../views";
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Art: NextPage = (props) => {
  const { publicKey } = useWallet()

  return (
    <div>
      <Head>
      <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
      <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
        <title>BLXCKOUT NFT</title>
        <meta/>
      </Head>
      <ArtView />
      <div className="flex flex-col gap-8 max-w-4xl items-stretch m-auto pt-24">
      {/* disable checking out without a connected wallet */}
      </div>
    </div>
  );
};

export default Art;
