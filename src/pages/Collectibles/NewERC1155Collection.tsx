import { NftService } from "@liquality/wallet-sdk";
import { useState } from "react";
import "../../index.css";
import { setupSDK } from "../../setupSDK";
import { CreateERC1155CollectionRequest } from "@liquality/wallet-sdk/dist/src/types";
import { NewERC1155CollectionForm } from "../../components/Collectibles/NewERC1155CollectionForm";


export default function NewERC1155Collection() {

  setupSDK();

  const [transactionHash, setTransactionHash] = useState("");

  const createCollection = async (request: CreateERC1155CollectionRequest, chainId: number, pk: string) => {

    const hash: any = await NftService.createERC1155Collection(request, chainId, pk);
    setTransactionHash(hash);
  }

  return (
    <div className="align-middle text-center text-banner mb-24">
      <div style={{ padding: 20 }} className="h-screen flex ">
        <div className="grow space-y-10 self-start">
          <NewERC1155CollectionForm onSubmit={createCollection} transactionHash={transactionHash}/>
        </div>
      </div>
    </div>
  );
}
