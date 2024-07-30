import { Typography, Box } from "@mui/material";
import { t } from "@lingui/macro";
// import AddToken from "components/Wallet/AddToken";

type Item = {
  name: string;
  pageName: "nft";
};

const DISPLAY_ITEMS: Item[] = [
  {
    name: t`NFT`,
    pageName: "nft",
  }
];

export default function WalletPageToggle() {


  return (
    <Box sx={{ display: "flex", gap: "0 24px", alignItems: "center" }}>
      {DISPLAY_ITEMS.map((item) => (
        <Typography
          key={item.pageName}
          variant="h3"
          color="textPrimary"
          onClick={() => (item)}
          sx={{ cursor: "pointer" }}
        >
          {item.name}
        </Typography>
      ))}
      {/* <AddToken /> */}
    </Box>
  );
}
