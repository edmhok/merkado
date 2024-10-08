import Nft1 from "../../../../assets/NFTs/1.webp";
import Nft2 from "../../../../assets/NFTs/VirungaCyberKongz.png";
import Nft3 from "../../../../assets/NFTs/bybit.jpeg";
import Nft4 from "../../../../assets/NFTs/cyptopunk.webp";
import Nft5 from "../../../../assets/NFTs/RockinTuna.gif";
import Nft6 from "../../../../assets/NFTs/pssssd.gif";
import Nft7 from "../../../../assets/NFTs/io-nfts.gif";
import Nft8 from "../../../../assets/NFTs/Dogs.gif";
import PFP from "../../../../assets/NFTs/pfp.jpg";

interface TrendingNFT {
  id: number;
  banner: string;
  NFtName: string;
  ownerName: string;
  ownerPfp: string;
  price: number;
}

export const NftsData: TrendingNFT[] = [
  {
    id: 1,
    banner: Nft1,
    NFtName: "Bored Ape",
    ownerName: "SeriousArt",
    ownerPfp: PFP,
    price: 15,
  },
  {
    id: 2,
    banner: Nft2,
    NFtName: "CyberKongz",
    ownerName: "ArtLover123",
    ownerPfp: PFP,
    price: 30,
  },
  {
    id: 3,
    banner: Nft3,
    NFtName: "Lady Ape# 5049",
    ownerName: "CreativeCollector",
    ownerPfp: PFP,
    price: 18,
  },
  {
    id: 4,
    banner: Nft4,
    NFtName: "Lady Ape# 5049",
    ownerName: "NFTEnthusiast",
    ownerPfp: PFP,
    price: 22,
  },
  {
    id: 5,
    banner: Nft5,
    NFtName: "Lady Ape# 5049",
    ownerName: "DigitalDreamer",
    ownerPfp: PFP,
    price: 25,
  },
  {
    id: 6,
    banner: Nft6,
    NFtName: "Lady Ape# 5049",
    ownerName: "GalleryGuru",
    ownerPfp: PFP,
    price: 40,
  },
  {
    id: 7,
    banner: Nft7,
    NFtName: "Lady Ape# 5049",
    ownerName: "AestheticAdmirer",
    ownerPfp: PFP,
    price: 16,
  },
  {
    id: 8,
    banner: Nft8,
    NFtName: "Lady Ape# 5049",
    ownerName: "CuratorCool",
    ownerPfp: PFP,
    price: 28,
  },
];
