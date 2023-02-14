import { NftService } from "@liquality/wallet-sdk";
import { useState } from "react";
import "../../index.css";
import { setupSDK } from "../../setupSDK";
import { MintERC721Request } from "@liquality/wallet-sdk/dist/src/types";
import { MintERC721Form } from "../../components/Collectibles/MintERC721Form";


export default function MintERC721() {

  setupSDK();

  const [transactionHash, setTransactionHash] = useState("");

  const mintNft = async (request: MintERC721Request, chainId: number, pk: string) => {

    const hash: any = await NftService.mintERC721Token(request, chainId, pk);
    setTransactionHash(hash);
  }

  return (
    <div className="align-middle text-center text-banner mb-24">
      <div style={{ padding: 20 }} className="h-screen flex ">
        <div className="grow space-y-10 self-start">
          <MintERC721Form onSubmit={mintNft} transactionHash={transactionHash}/>
        </div>
      </div>
    </div>
  );
}
