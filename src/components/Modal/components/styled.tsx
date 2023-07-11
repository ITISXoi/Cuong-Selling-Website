import { Box, Card, styled } from "@mui/material";

const BoxBackground = styled("div")(() => ({
  backgroundImage: "url(/images/jobs/banner.jpeg)",
  backgroundSize: "cover",
  height: "390px",
}));

const BoxCard = styled(Card)(() => ({
  padding: 2,
  display: "flex",
  position: "relative",
  minHeight: 130,
  overflow: "initial",
  flexDirection: "column",
  border: "none",
  borderShadow: "none",
  boxShadow: "none",
}));

const BoxImage = styled(Box)(() => ({
  borderRadius: "10px",
  padding: 10,
  boxShadow: "0px 0px 40px rgba(56, 152, 226, 0.3)",
  position: "absolute",
  background: "#fff",
  "@media (max-width:1024px)": {
    display: "none",
  },
}));

const Image = styled("img")(() => ({
  borderRadius: "10px",
  width: "100%",
  position: "relative",
  display: "block",
  aspectRatio: "1",
}));

export { BoxBackground, Image, BoxImage, BoxCard };
