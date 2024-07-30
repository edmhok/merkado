import { lazy } from "react";
import Loadable from "../components/Loading/Loadable";

const Home = Loadable(lazy(() => import("../views/home")));
const Collection = Loadable(lazy(() => import("../views/collection/index")));

const Swap = Loadable(lazy(() => import("../views/swap-liquidity-v3/Swap")));
const Liquidity = Loadable(lazy(() => import("../views/swap-liquidity-v3/liquidity/index")));
const AddLiquidity = Loadable(lazy(() => import("../views/swap-liquidity-v3/liquidity/AddLiquidity")));
const IncreaseLiquidity = Loadable(lazy(() => import("../views/swap-liquidity-v3/liquidity/IncreaseLiquidity")));
const DecreaseLiquidity = Loadable(lazy(() => import("../views/swap-liquidity-v3/liquidity/DecreaseLiquidity")));
const SwapReclaim = Loadable(lazy(() => import("../views/swap-liquidity-v3/Reclaim")));
const SwapFindMisTransferToken = Loadable(lazy(() => import("../views/swap-liquidity-v3/MisTransferTokens")));
const SwapRevokeApprove = Loadable(lazy(() => import("../views/swap-liquidity-v3/RevokeApprove")));
const PCMReclaim = Loadable(lazy(() => import("../views/swap-liquidity-v3/PCMReclaim")));

const LiquidityV2 = Loadable(lazy(() => import("../views/swap-v2/liquidity/index")));
const AddLiquidityV2 = Loadable(lazy(() => import("../views/swap-v2/liquidity/AddLiquidity")));
const IncreaseLiquidityV2 = Loadable(lazy(() => import("../views/swap-v2/liquidity/IncreaseLiquidity")));
const DecreaseLiquidityV2 = Loadable(lazy(() => import("../views/swap-v2/liquidity/DecreaseLiquidity")));
const Wrap = Loadable(lazy(() => import("../views/swap-v2/wrap/index")));

const NFTView = Loadable(lazy(() => import("../views/nft/View")));
const WalletNFTView = Loadable(lazy(() => import("../views/nft/WalletNFTView")));
const NFTMint = Loadable(lazy(() => import("../views/nft/Mint")));

const NFTCanisterList = Loadable(lazy(() => import("../views/nft/CanisterList")));
const NFTCanisterCreate = Loadable(lazy(() => import("../views/nft/CanisterCreate")));
const NFTCanisterDetails = Loadable(lazy(() => import("../views/nft/CanisterDetails")));

const NFTMarket = Loadable(lazy(() => import("../views/nft")));
const NFTCollectMarket = Loadable(lazy(() => import("../views/nft/Collection")));
const NFTMarketCollections = Loadable(lazy(() => import("../views/nft/MarketplaceCollections")));

export const routeConfigs: { [path: string]: (props: any) => JSX.Element } = {
  "/home": Home,
  "/collection": Collection,

  "/wallet/nft/view/:canisterId/:tokenId": WalletNFTView,
  "/wallet/nft/canister/details/:id": NFTCanisterDetails,

  "/swap": Swap,
  "/swap/liquidity": Liquidity,
  "/swap/liquidity/add/:currencyIdA?/:currencyIdB?/:feeAmount?": AddLiquidity,
  "/swap/liquidity/decrease/:positionId/:pool": DecreaseLiquidity,
  "/swap/liquidity/increase/:positionId/:pool": IncreaseLiquidity,
  "/swap/reclaim": SwapReclaim,
  "/swap/find-mis-transferred-token": SwapFindMisTransferToken,
  "/swap/revoke-approve": SwapRevokeApprove,
  "/swap/pcm/reclaim": PCMReclaim,

  "/swap/v2/liquidity": LiquidityV2,
  "/swap/v2/liquidity/add/:currencyIdA?/:currencyIdB?/:feeAmount?": AddLiquidityV2,
  "/swap/v2/liquidity/decrease/:positionId?": DecreaseLiquidityV2,
  "/swap/v2/liquidity/increase/:positionId?": IncreaseLiquidityV2,
  "/swap/v2/wrap": Wrap,

  "/marketplace/NFT": NFTMarket,
  "/marketplace/NFT/:canisterId": NFTCollectMarket,
  "/marketplace/NFT/view/:canisterId/:tokenId": NFTView,
  "/marketplace/collections": NFTMarketCollections,

  "/console/nft/canister/create": NFTCanisterCreate,
  "/console/nft/mint": NFTMint,
  "/console/nft/canister/list": NFTCanisterList,
};
