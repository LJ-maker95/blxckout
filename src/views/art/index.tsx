import { FC } from "react";
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export const ArtView: FC = ({ }) => {

  const { publicKey } = useWallet()

  return (
    <div className="center px-10">

    </div>
  );
};
