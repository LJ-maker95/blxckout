import { FC } from "react";

export const TechView: FC = ({ }) => {

  return (
      <div>
      <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">SOLANA & NFT'S</h1>
      <div class="flex flex-col w-full lg:flex-row">
      <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><p className="py-6 px-20 text-center">Solana is a decentralized blockchain built to enable scalable, user-friendly apps for the world. Solana is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with thousands of projects spanning DeFi, NFTs, Web3 and more. Solana's scalability ensures transactions remain less than $0.01 for both developers and users. Solana is all about speed, with 400 millisecond block times. And as hardware gets faster, so does the network. Not only is Solana ultra-fast and low cost, it is censorship resistant. Meaning, the network will remain open for applications to run freely and transactions will never be stopped.</p>
      </div>
      </div>
      <h1 className="text-center text-5xl py-5 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">SOLANA 101</h1>

      <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">NFT 101</h1>
      </div>
  );
};
