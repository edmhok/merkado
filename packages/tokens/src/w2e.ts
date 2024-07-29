import { Token } from "@w2e/swap-sdk";
import { TokenInfo } from "@w2e/types";
import { TOKEN_STANDARD, W2E_CANISTER_ID } from "@w2e/constants";

export const WASTE2EARN_TOKEN_INFO: TokenInfo = {
  symbol: "W2E",
  name: "Waste2Earn",
  decimals: 18,
  canisterId: W2E_CANISTER_ID,
  transFee: BigInt(10),
  totalSupply: BigInt(51000000),
  standardType: TOKEN_STANDARD.ICRC2,
  logo: "data:image/png;base64,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",
};

export const WASTE2EARN = new Token({
  address: WASTE2EARN_TOKEN_INFO.canisterId,
  decimals: WASTE2EARN_TOKEN_INFO.decimals,
  symbol: WASTE2EARN_TOKEN_INFO.symbol,
  name: WASTE2EARN_TOKEN_INFO.name,
  logo: WASTE2EARN_TOKEN_INFO.logo,
  standard: TOKEN_STANDARD.ICRC2,
  transFee: Number(WASTE2EARN_TOKEN_INFO.transFee),
});
