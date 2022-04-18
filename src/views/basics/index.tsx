import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';

export const BasicsView: FC = ({ }) => {

  return (

        <div className="md:hero mx-auto py-50 p-4">
        <div className="md:hero-content flex flex-col">

        <section>
        <div className="max-w-screen-xl py-10 mx-auto lg:px-8">
          <div className="typewriter">
            <h1 className="flex max-w-screen-xltext-center md:hero mx-auto text-9xl text-bold ">BLXCKOUT</h1>
          </div>
          <div className="max-w-screen-xl text-center py-20">
            <p className="text-2xl pb-20" >Mint date: July 2022</p>
            <div />
            <a href="/roadmap">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#eacda3] to-[#d6ae7b] group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0">
                  Check the roadmap
              </span>
            </button>
            </ a>
            <a href="/team">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#eacda3] to-[#d6ae7b] group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0">
                  Check out the team
              </span>
            </button>
            </ a>
          </div>
        </div>
        </section>

        <section>
        <div className="flex-co py-5 px-4">
          <h1 className="font-bold text-leading text-6xl pt-10 text-transparent bg-clip-text bg-gradient-to-tr from-[#eacda3] to-[#d6ae7b]">About Us</h1>
          <p className="text-2xl py-5">BLXCKOUT was formed by NFT fans working in corporate jobs for Big Tech and Fortune 500 companies. We saw the power of community building online and the ability that NFTs have to rapidly acquire new user bases. We're super excited to bring operational integrity from the best talent in Web2 over to Web3 and we're passionate about linking physical products with the crypto space. Our initial drop in May is the genesis project and will act solely as a Pfp with staking capability initially, but as we build out our business it will also provide our holders with significant discounts on our products,a share of revenues and access to limited edition product auctions. This projects time on the planet will be dedicated to working only on functionality that we believe will help to onboard the next billion people to crypto. Our roadmap details what our plans are for the short and long term future, this includes developing various products and apps.</p>
        </div>
        <div className="flex-col text-2xl px-4">
          <h1 className="font-bold text-6xl text-transparent py-5 bg-clip-text bg-gradient-to-tr from-[#eacda3] to-[#d6ae7b]">Our Art</h1>
          <p>Our genesis project looks to make light of the challenges that we face in the 21st Century. We hope that the art completed by our local artist El Davo is thought provoking - as we actively put a focus on topics such as global warming, populism, pandemics and anything inbetween. Pay close attention to our attributes, you'll recognise them from many events seen in the media. Our art puts the spotlight on a variety of things, from scandalous behaviour from the elite social classes to pure tragedies.</p>
        </div>
        </section>

        <section className="text-white bg-black">
        <div className="max-w-screen-xl mx-auto py-5 px-4">
          <div className="mx-auto">
            <h1 className="font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-tr py-5 from-[#eacda3] to-[#d6ae7b]">Building...</h1>

            <p className="mt-4 text-2xl pb-5 text-gray-300">
              We operate in the hardware space, building hardware products with integrated NFT and crypto support. We believe there is a gap between hardware products and NFTs that if filled will help increase crypto adoption and awareness of the market as a whole. Starting with Digital Photo Displays and NFT integrated furniture for personal use and expanding into more commercial use cases such as NFT Vending Machines.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="lightblue"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h3 className="mt-4 text-xl font-bold text-white">Image to NFT iOS App</h3>

              <p className="mt-1 text-sm text-gray-300">
                Take pictures with any iOS device and instantly transform them into an NFT on the Solana blockchain for distribution.
              </p>
            </a>

            <a
              className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="lightblue"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h3 className="mt-4 text-xl font-bold text-white">NFT Digital Photo Frame</h3>

              <p className="mt-1 text-sm text-gray-300">
                  Link major Solana wallets with our digital photo display using our existing iOS application.
              </p>
            </a>

            <a
              className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="lightblue"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <h3 className="mt-4 text-xl font-bold text-white">NFT Furniture</h3>

              <p className="mt-1 text-sm text-gray-300">
                Limited edition, custom hand made British furniture with integrated NFT display support available for purchase with our token.
              </p>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              className="inline-flex items-center px-8 py-3 mt-8 text-black bg-white border border-blue-600 rounded active:text-blue-500 focus:outline-none focus:ring"
              href="/roadmap"
            >
              <span className="text-sm font-medium"> CHECK ROADMAP </span>

              <svg
                className="w-5 h-5 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="blue"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
        <section className="m-4 md:m-8 text-center">
        <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col px-8 py-4">
            <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#eacda3] to-[#d6ae7b]">1.5 SOL</h2>
            <p className="flex-1 mb-4 text-base leading-relaxed dark:text-coolGray-400">Mint Price</p>
          </div>
          <div className="flex flex-col px-8 py-4 lg:border-none xl:border-solid">
            <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#eacda3] to-[#d6ae7b]">5000</h2>
            <p className="flex-1 mb-4 text-base leading-relaxed dark:text-coolGray-400">Supply</p>
             </div>
          <div className="flex flex-col px-8 py-4">
            <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#eacda3] to-[#d6ae7b]">TBC</h2>
            <p className="flex-1 mb-4 text-base leading-relaxed dark:text-coolGray-400">Date</p>
          </div>
        </div>
        </section>
        <div className="bg-lightblue py-5 px-4">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
                <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
                    Frequently-asked questions
                </h2>
                <dl className="w-full md:w-2/3">
                    <dt className="mb-4">
                        <h3 className="text-2xl font-semibold">
                            What is the mission?
                        </h3>
                    </dt>
                    <dd className="mb-16">
                        <p>
                           To bring high quality art to the Solana NFT scene coupled with unmatched utility in real life. We have one physical product under development that we'd like to keep under wraps for the moment, as well as a pipeline and vision for building a product brand.
                        </p>
                    </dd>
                    <dt className="mb-4">
                        <h3 className="text-2xl font-semibold">
                            When is the mint exactly?
                        </h3>
                    </dt>
                    <dd className="mb-16">
                        <p>
                          As it stands, we will be minting on the 2nd May 2022 at 8pm UTC. This may be impacted by a variety of factors including state and availability of the Solana blockchain, ME launchpad availability and any art delays.
                        </p>
                    </dd>
                    <dt className="mb-4">
                        <h3 className="text-2xl font-semibold">
                            How will we get there?
                        </h3>
                    </dt>
                    <dd className="mb-16">
                        <p>
                          We believe we have the expertise within our team and their connections to build against our vision. We have in-house development capability, marketing expertise and the best artist of all time (in our opinion) on the internal team.
                        </p>
                    </dd>
                </dl>
            </div>
      </div>
    </div>
  </div>
  );
};
