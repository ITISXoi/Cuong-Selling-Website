import { Box, Stack, styled } from "@mui/material";
import Slider from "react-slick";

const BoxItem = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "10px",
  color: theme.palette.secondary.contrastText,
  padding: "30px",
  position: "relative",
  zIndex: 1,
  overflow: "hidden",
  boxShadow: "0px 0px 25px rgba(56, 152, 226, 0.3)",
  "&:hover": {
    "&::before": {
      transform: "scale(50)",
    },
  },
  "&::before": {
    content: '""',
    position: "absolute",
    zIndex: -1,
    bottom: "-32px",
    left: "-32px",
    backgroundColor: "#171d28",
    height: "32px",
    width: "32px",
    transform: "scale(1)",
    transformOrigin: "50% 50%",
    transition: "transform 1.5s ease-out",
    borderRadius: "32px",
  },
}));

const Image = styled("img")(({ theme }) => ({
  borderRadius: "10px",
  width: "90px",
  position: "relative",
  display: "block",
  aspectRatio: "1",
}));

const Label = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--green-color)",
  padding: "2px 12px",
  borderRadius: "5px",
  cursor: "pointer",
}));

const SliderStyled = styled(Slider)(() => ({
  "& .slick-track": {
    width: "4000px!important",
  },
  "& .slick-slide": {
    margin: "20px 20px 20px 20px",
  },
}));

const StackDesciptionBooth = styled(Stack)(({ theme }) => ({
  padding: "20px",
  borderRadius: "0 20px 20px 0",
  backgroundColor: "#ffffff",
  height: "200px",
  width: "350px",
}));

const ImageBooth = styled("img")(({ theme }) => ({
  width: "250px",
  height: "200px",
  borderRadius: "20px 0 0 20px",
}));

export {
  BoxItem,
  Image,
  Label,
  SliderStyled,
  StackDesciptionBooth,
  ImageBooth,
};
