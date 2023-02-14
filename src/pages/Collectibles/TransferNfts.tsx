import { NftService } from "@liquality/wallet-sdk";
import { useState } from "react";
import "../../index.css";
import { setupSDK } from "../../setupSDK";
import { TransferRequest } from "@liquality/wallet-sdk/dist/src/types";
import { TransferNftsForm } from "../../components/Collectibles/TransferNftsForm";


export default function TransferNfts() {

  setupSDK();

  const [transactionHash, setTransactionHash] = useState("");

  const transferNfts = async (transferRequest: TransferRequest, chainId: number, pk: string) => {

    const hash: any = await NftService.transferNft(transferRequest, chainId, pk);
    setTransactionHash(hash);
  }

  return (
    <div className="align-middle text-center text-banner mb-24">
      <div style={{ padding: 20 }} className="h-screen flex ">
        <div className="grow space-y-10 self-start">
          <TransferNftsForm onSubmit={transferNfts} transactionHash={transactionHash}/>
        </div>
      </div>
    </div>
  );
}
