import { FC } from "react";
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Products from '/src/components/Products'

export const ArtView: FC = ({ }) => {

  const { publicKey } = useWallet()

  return (
    <div className="center px-10">

      {/* We disable checking out without a connected wallet */}
      <Products submitTarget='/checkout' enabled={publicKey !== null} />
    </div>
  );
};
