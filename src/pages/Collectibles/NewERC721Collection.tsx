import { NftService } from "@liquality/wallet-sdk";
import { useState } from "react";
import "../../index.css";
import { setupSDK } from "../../setupSDK";
import { CreateERC721CollectionRequest } from "@liquality/wallet-sdk/dist/src/types";
import { NewERC721CollectionForm } from "../../components/Collectibles/NewERC721CollectionForm";


export default function NewERC721Collection() {

  setupSDK();

  const [transactionHash, setTransactionHash] = useState("");

  const createCollection = async (request: CreateERC721CollectionRequest, chainId: number, pk: string) => {

    const hash: any = await NftService.createERC721Collection(request, chainId, pk);
    setTransactionHash(hash);
  }

  return (
    <div className="align-middle text-center text-banner mb-24">
      <div style={{ padding: 20 }} className="h-screen flex ">
        <div className="grow space-y-10 self-start">
          <NewERC721CollectionForm onSubmit={createCollection} transactionHash={transactionHash}/>
        </div>
      </div>
    </div>
  );
}
