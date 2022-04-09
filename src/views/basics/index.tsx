import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';

export const BasicsView: FC = ({ }) => {

  return (
        <div className="md:hero mx-auto p-4">
        <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-6xl font-bold text-white py-5 bg-clip-text">
          "BLXCKOUT"
        </h1>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="covid.png" className="max-w-sm rounded-lg shadow-1xl" />
          <div className="items-center py-10">
            <h1 className="text-4xl px-15 font-bold">How the fuck did we get here? Busy flipping JPEGs.</h1>
            <p className="py-4 text-2xl px-15"> A collection of 5000 satirical and thought-provoking illustration PFP NFT’s on the Solana blockchain and a team of experienced technology and marketing professionals trying to change the status quo and perception of nfts.</p>
            <a href="/roadmap">
            <button className="btn btn-primary">Check Roadmap</button>
            </a>
        </div>
        </div>
        <h1 className="font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">About Us</h1>
        <div className="flex-co py-5 px-15">
        <p className="text-2xl py-5 px-15">BLXCKOUT was formed by NFT fans working in corporate jobs for Big Tech and Fortune 500 companies. We saw the power of community building online and the ability that NFTs have to rapidly acquire new user bases. We're super excited to bring operational integrity from the best talent in Web2 over to Web3 and we're passionate about linking physical products with the crypto space. Our initial drop in May is the genesis project and will act solely as a Pfp with staking capability.</p>
        <p className="text-2xl py-5 px-15">The rest of this projects time on the planet will be dedicated to working only on functionality that we believe will help to onboard the next billion people to crypto. Our roadmap details what our plans are for the short and long term future, this includes developing various products and apps and moving into DAO tooling in the long term future.</p>
        </div>
        <h1 className="font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">Our Art</h1>
        <div className="flex-col text-2xl py-5 px-15">
        <p>Our genesis project looks to make light of the challenges that we face in the 21st Century. We hope that the art completed by our local artist El Davo is thought provoking - as we actively put a focus on topics such as global warming, populism, pandemics and anything inbetween. Pay close attention to our attributes, you'll recognise them from many events seen in the media. Our art puts the spotlight on a variety of things, from scandalous behaviour from the elite social classes to pure tragedies.</p>
        </div>
        <div className="container mx-auto px-6 p-6 bg-black">
            <div className="mb-16 text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                    Features
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    A better way to live
                </p>
            </div>
            <div className="flex flex-wrap my-12 dark:text-white">
                <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                    <div className="flex items-center mb-6">
                        <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                            </path>
                        </svg>
                        <div className="ml-4 text-xl">
                            Increase sales
                        </div>
                    </div>
                    <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                        Receive more sales by selling across multple sales channels instead of just having a single point of entry.
                    </p>
                </div>
                <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                    <div className="flex items-center mb-6">
                        <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                            </path>
                        </svg>
                        <div className="ml-4 text-xl">
                            Overlays
                        </div>
                    </div>
                    <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                        Apply beautiful overlays to every product image distributed through our platform. A visual touch.
                    </p>
                </div>
                <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                    <div className="flex items-center mb-6">
                        <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                            </path>
                        </svg>
                        <div className="ml-4 text-xl">
                            Control
                        </div>
                    </div>
                    <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                        Apply filters and control which products to sell on each sales channel. E.g. exclude products with low margins.
                    </p>
                </div>
                <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
                    <div className="flex items-center mb-6">
                        <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                            </path>
                        </svg>
                        <div className="ml-4 text-xl">
                            Mapping
                        </div>
                    </div>
                    <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                        Map product categories with each sales channels&#x27; own categories and achieve better results and lower costs.
                    </p>
                </div>
                <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
                    <div className="flex items-center mb-6">
                        <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                            </path>
                        </svg>
                        <div className="ml-4 text-xl">
                            Fill the missing
                        </div>
                    </div>
                    <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                        Modify products with extra properties and achieve the maximum output for each installed sales channel.
                    </p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                    <div className="flex items-center mb-6">
                        <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                            </path>
                        </svg>
                        <div className="ml-4 text-xl">
                            Dynamic Texts
                        </div>
                    </div>
                    <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                        Build unique product titles and descriptions instead of spending days manually editing each product.
                    </p>
                </div>
            </div>
        </div>
        <section className="m-4 md:m-8 text-center">
        <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col px-8 py-4">
            <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">TBA</h2>
            <p className="flex-1 mb-4 text-base leading-relaxed dark:text-coolGray-400">Mint Price</p>
          </div>
          <div className="flex flex-col px-8 py-4 lg:border-none xl:border-solid">
            <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">TBA</h2>
            <p className="flex-1 mb-4 text-base leading-relaxed dark:text-coolGray-400">Supply</p>
             </div>
          <div className="flex flex-col px-8 py-4">
            <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">TBA</h2>
            <p className="flex-1 mb-4 text-base leading-relaxed dark:text-coolGray-400">Date</p>
          </div>
        </div>
        </section>
        <div className="bg-lightblue py-20 px-4">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
                <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
                    Frequently-asked questions
                </h2>
                <dl className="w-full md:w-2/3">
                    <dt className="mb-4">
                        <h3 className="text-xl font-semibold">
                            What is the mission?
                        </h3>
                    </dt>
                    <dd className="mb-16">
                        <p>
                           To bring high quality art to the Solana NFT scene coupled with unmatched utility in real life. We have one physical product under development that we'd like to keep under wraps for the moment, as well as a pipeline and vision for building a product brand.
                        </p>
                    </dd>
                    <dt className="mb-4">
                        <h3 className="text-xl font-semibold">
                            When is the mint exactly?
                        </h3>
                    </dt>
                    <dd className="mb-16">
                        <p>
                          As it stands, we will be minting on the 2nd May 2022 at 8pm UTC. This may be impacted by a variety of factors including state and availability of the Solana blockchain, ME launchpad availability and any art delays.
                        </p>
                    </dd>
                    <dt className="mb-4">
                        <h3 className="text-xl font-semibold">
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
