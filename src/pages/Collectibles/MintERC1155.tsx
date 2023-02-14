import { NftService } from "@liquality/wallet-sdk";
import { useState } from "react";
import "../../index.css";
import { setupSDK } from "../../setupSDK";
import { MintERC1155Request } from "@liquality/wallet-sdk/dist/src/types";
import { MintERC1155Form } from "../../components/Collectibles/MintERC1155Form";


export default function MintERC1155() {

  setupSDK();

  const [transactionHash, setTransactionHash] = useState("");

  const mintNft = async (request: MintERC1155Request, chainId: number, pk: string) => {

    const hash: any = await NftService.mintERC1155Token(request, chainId, pk);
    setTransactionHash(hash);
  }

  return (
    <div className="align-middle text-center text-banner mb-24">
      <div style={{ padding: 20 }} className="h-screen flex ">
        <div className="grow space-y-10 self-start">
          <MintERC1155Form onSubmit={mintNft} transactionHash={transactionHash}/>
        </div>
      </div>
    </div>
  );
}
