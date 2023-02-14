import * as React from "react";
import { useState, useEffect } from "react";
//import { AuthService } from "@liquality/wallet-sdk";
import { Nft } from "@liquality/wallet-sdk";


type Props = {
  nfts: Array<Nft>;
};

export const NftImages: React.FC<Props> = (props) => {
  const { nfts } = props;
  const  imagePlaceholder = 'https://flowbite.com/docs/images/examples/image-4@2x.jpg'; 
  const _renderImages = () => {
    let rows = [];
    if (nfts) {
      rows = nfts.map((nft, index) => {
        return (
          <div className="rounded  p-4 h-64">
            <img
              src={nft.metadata?.image?.replace('ipfs://', 'https://ipfs.io/ipfs/') || imagePlaceholder }
              alt={nft.metadata?.name}
              className="rounded-full w-full h-full object-cover"
            />
            
            <div className="pt-2">
              <p className="text-xs">
                {" "}
                <b>Title:</b> {nft.metadata?.name}
              </p>
              <p className="text-xs">
                {" "}
                <b>Collection:</b> {nft.contract.name}
              </p>
              <p className="text-xs">
                <b>Description:</b> {nft.metadata?.description}
              </p>
            </div>
          </div>
        );
      });
    } else {
      return <p>No images available</p>;
    }

    return rows;
  };

  //https://flowbite.com/docs/images/examples/image-4@2x.jpg
  return (
    <div className="grid grid-cols-5 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {_renderImages()}
    </div>
  );
};
