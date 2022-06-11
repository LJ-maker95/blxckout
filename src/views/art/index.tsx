import { FC } from "react";
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export const ArtView: FC = ({ }) => {

  const { publicKey } = useWallet()

        return (
          <div>
          <section>
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
            <div className="max-w-3xl">
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-2">
              <div className="relative">
                <img
                  className="absolute object-cover w-full h-full"
                  src="165.png"
                  alt="Man using a computer"
                />
              </div>

              <div className="lg:py-16">
                <article className="space-y-2">
                  <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-600 mx-auto py-5">
                  Art that is designed to mock the events around the world.
                  </h2>
                  <p className="text-2xl">
                    Our genesis project looks to make light of the challenges that we face in the 21st Century. We hope that the art completed by our local artist is thought provoking - as we actively put a focus on topics such as global warming, populism, pandemics and anything inbetween. Pay close attention to our attributes, you'll recognise them from many events seen in the media. Our art puts the spotlight on a variety of things, from scandalous behaviour from the elite social classes to pure tragedies.
                  </p>

                  <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-600 mx-auto py-4">
                  NFT Features
                  </h2>
                  <p className="text-2xl">
                    1. Stake your pfp and earn our SPL token to purchase from a dynamic and constantly evolving catalogue of attributes related to the most popular news story of the time.
                  </p>
                  <p className="text-2xl">
                    2. Revenue share from Oracle services built out from the UK registered company Blockout that will interface with web2 companies, central and local government entities.
                  </p>
                  <p className="text-2xl">
                    3. Governance rights and input into the direction of the formal company's revenues.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

    </div>
  );
};
