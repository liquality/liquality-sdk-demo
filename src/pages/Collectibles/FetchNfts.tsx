import { NftService } from "@liquality/wallet-sdk";
import { useState } from "react";
import { FetchNftsForm } from "../../components/Collectibles/FetchNftsForm";
import { NftImages } from "../../components/Collectibles/NftImages";
import "../../index.css";


export default function FetchNfts() {

  const [nfts, setNfts] = useState([]);

  const fetchNfts = async (address: string, chainId: string) => {

    const nfts: any = await NftService.getNfts(address,  +chainId);
    setNfts(nfts);
  }

  return (
    <div className="align-middle text-center text-banner mb-24">
      <div style={{ padding: 20 }} className="h-screen flex ">
        <div className="grow space-y-10 self-start">
          <FetchNftsForm onSubmit={fetchNfts}/>
          <NftImages nfts={nfts}/>
        </div>
      </div>
    </div>
  );
}
