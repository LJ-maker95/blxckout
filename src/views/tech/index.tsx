import { FC } from "react";

export const TechView: FC = ({ }) => {

  return (
      <div>
        <h1 className="text-5xl text-center py-2 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">SOLANA 101</h1>
        <p className="text-center py-5 px-20">Solana is a decentralized blockchain built to enable scalable, user-friendly apps for the world. Solana is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with thousands of projects spanning DeFi, NFTs, Web3 and more. Integrate once and never worry about scaling again. Solana ensures composability between ecosystem projects by maintaining a single global state as the network scales.</p>
        <p className="text-center py-5 px-20">Never deal with fragmented Layer 2 systems or sharded chains. Solana's scalability ensures transactions remain less than $0.01 for both developers and users. Solana is all about speed, with 400 millisecond block times and as hardware gets faster, so does the network. Not only is Solana ultra-fast and low cost, it is censorship resistant. Meaning, the network will remain open for applications to run freely and transactions will never be stopped. </p>
        <h1 className="text-5xl text-center py-2 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">NFT 101</h1>
        <p className="text-center py-5 px-20">Right, sorry. “Non-fungible” more or less means that it’s unique and can’t be replaced with something else. For example, a bitcoin is fungible — trade one for another bitcoin, and you’ll have exactly the same thing. A one-of-a-kind trading card, however, is non-fungible. If you traded it for a different card, you’d have something completely different. NFTs can really be anything digital (such as drawings, music, your brain downloaded and turned into an AI), but a lot of the current excitement is around using the tech to sell digital art.</p>
      </div>
  );
};
