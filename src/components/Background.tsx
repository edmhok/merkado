import { Box } from "@mui/material";

export default function Background() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        pointerEvents: "none",
        transform: "unset",
        background: "linear-gradient(to top, rgb(235, 55, 0, 1), rgb(231, 85, 1, 1), rgb(245, 148, 13, 1))",
        width: "100vw",
        height: "100vh",
        zIndex: "-1",
      }}
    />
  );
}
