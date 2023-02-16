import { NftService } from "@liquality/wallet-sdk";
import { useState } from "react";
import "../../index.css";
import { NewERC721CollectionForm } from "../../components/Collectibles/NewERC721CollectionForm";
import { CreateERC721CollectionRequest } from "@liquality/wallet-sdk/dist/src/nft/types";

export default function NewERC721Collection() {

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
