import { FC } from "react";
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Products from '/src/components/Products'

export const ArtView: FC = ({ }) => {

  const { publicKey } = useWallet()

  return (
    <div className="flex flex-col gap-8 max-w-4xl items-stretch m-auto pt-24">
      {/* We disable checking out without a connected wallet */}
      <Products submitTarget='/checkout' enabled={publicKey !== null} />
    </div>
  );
};
