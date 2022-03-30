import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';

export const BasicsView: FC = ({ }) => {

  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          "BLXCKOUT"
        </h1>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="covid.png" className="max-w-sm rounded-lg shadow-1xl" />
          <div className="items-center">
            <h1 className="text-4xl text-center px-15">We're building a world class community of <span className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">art lovers</span>.</h1>
            <p className="py-6 text-center px-15"> A collection of 2222 satirical and thought-provoking fine art PFP NFT’s on the Solana blockchain. We're a team of experienced technology and marketing professionals trying to change the status quo and perception of nfts.</p>
            <button className="btn btn-primary">Check Roadmap</button>
          </div>
        </div>
        </div>
        <div className="py-6 text-4xl text-center px-15">
        <h1 className="font-bold text-center text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">About Us</h1>
        </div>
        <div className="flex-co text-center px-15">
        <p>BLXCKOUT was formed by NFT fans working in corporate jobs for Big Tech and Fortune 500 companies. We saw the power of community building online and the ability that NFTs have to rapidly acquire new user bases. We're super excited to bring operational integrity from the best talent in Web2 over to Web3 and we're passionate about linking physical products with the crypto space. Our initial drop in May is the genesis project and will act solely as a Pfp with staking capability.</p>
        <p className="py-5">The rest of this projects time on the planet will be dedicated to working only on functionality that we believe will help to onboard the next billion people to crypto. Our roadmap details what our plans are for the short and long term future, this includes developing various products and apps and moving into DAO tooling in the long term future.</p>
        </div>
        <div className="text-4xl py-5 px-15">
        <h1 className="font-bold text-center text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">The Art</h1>
        </div>
        <div className="flex-col text-center px-15">
        <p>Our genesis project looks to make light of the challenges that we face in the 21st Century. We hope that the art completed by our local artist El Davo is thought provoking - as we actively put a focus on topics such as global warming, populism, pandemics and anything inbetween. Pay close attention to our attributes, you'll recognise them from many events seen in the media. Our art puts the spotlight on a variety of things, from scandalous behaviour from the elite social classes to pure tragedies.</p>
        </div>
        <section className="m-4 md:m-8 text-center">
      	<div className="container p-4 mx-auto my-6 space-y-1 text-center">
        <h1 className=" text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">Magic Eden Launchpad</h1>
      	</div>
      	<div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
      		<div className="flex flex-col px-8 py-4">
      			<h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">TBA</h2>
      			<p className="flex-1 mb-4 text-base leading-relaxed dark:text-coolGray-400">Mint Price</p>
      		</div>
      		<div className="flex flex-col px-8 py-4 lg:border-none xl:border-solid">
      			<h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">TBA</h2>
      			<p className="flex-1 mb-4 text-base leading-relaxed dark:text-coolGray-400">Supply</p>
      		   </div>
      		<div className="flex flex-col px-8 py-4">
      			<h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">TBA</h2>
      			<p className="flex-1 mb-4 text-base leading-relaxed dark:text-coolGray-400">Date</p>
      		</div>
      	</div>
      </section>
        <div className="divider"></div>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          What is the mission?
        </div>
        <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          When is the mint exactly?
        </div>
        <div className="collapse-content">
          <p>As it stands, we will be minting on the 2nd May 2022 at 8pm UTC. This may be impacted by a variety of factors including state and availability of the Solana blockchain, ME launchpad availability and any art delays. </p>
        </div>
        </div>
        <div className="collapse-content">
          <p>To bring high quality art to the Solana NFT scene coupled with unmatched utility in real life. We have one physical product under development that we'd like to keep under wraps for the moment, as well as a pipeline and vision for building a product brand.</p>
        </div>
      </div>
      <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
      <div className="collapse-title text-xl font-medium">
        How will we get there?
      </div>
      <div className="collapse-content">
        <p>We believe we have the expertise within our team and their connections to build against our vision. We have in-house development capability, marketing expertise and the best artist of all time (in our opinion) on the internal team.</p>
      </div>
    </div>
    </div>
  </div>
  );
};
