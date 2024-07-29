import { useTheme } from "@mui/material/";
import { Theme } from "@mui/material/styles";
import logoDark from "../assets/images/logo-dark.png";
import logoWhite from "../assets/images/logo-white.png";

export default function Logo() {
  const theme = useTheme() as Theme;

  return <img src={theme.palette.mode === "dark" ? logoDark : logoWhite} alt="" width="110" />;
}
