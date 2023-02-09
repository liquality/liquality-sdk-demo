import * as React from "react";
import { useState, useEffect } from "react";
//import { AuthService } from "@liquality/wallet-sdk";

const dummyNftList = [
  {
    title: "NFT nr 1",
    collectionName: "Numero 1",
    imgUrl: "https://flowbite.com/docs/images/examples/image-4@2x.jpg",
  },
  {
    title: "NFT nr 2",
    collectionName: "Numero 2",
    imgUrl: "https://flowbite.com/docs/images/examples/image-4@2x.jpg",
  },
  {
    title: "NFT nr 3",
    collectionName: "Numero 3",
    imgUrl: "https://flowbite.com/docs/images/examples/image-4@2x.jpg",
  },
  {
    title: "NFT nr 4",
    collectionName: "Numero 4",
    imgUrl: "https://flowbite.com/docs/images/examples/image-4@2x.jpg",
  },
  {
    title: "NFT nr 5",
    collectionName: "Numero 5",
    imgUrl: "https://flowbite.com/docs/images/examples/image-4@2x.jpg",
  },
];

type Props = {
  nftImages: any;
};

export const NftImages: React.FC<Props> = (props) => {
  const { nftImages } = props;

  const _renderImages = () => {
    let rows = [];
    if (dummyNftList) {
      rows = dummyNftList.map((item, index) => {
        return (
          <div className="rounded  p-4 h-64">
            <img
              src={item.imgUrl}
              alt={item.title}
              className="rounded-full w-full h-full object-cover"
            />
            <div className="pt-2">
              <p className="text-xs">
                {" "}
                <b>Title:</b> {item.title}
              </p>
              <p className="text-xs">
                {" "}
                <b>Collection:</b> {item.collectionName}
              </p>
              <p className="text-xs">
                <b>Description:</b> {item.collectionName}
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
