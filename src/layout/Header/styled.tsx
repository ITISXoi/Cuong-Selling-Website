import { AppBar, Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const StyledAppBar = styled(AppBar)(({ theme, position }) => ({
  width: "100%",
  background: "transparent",
  color: theme.palette.primary.main,
  height: "var(--navbar-height)",
  display: "flex",
  justifyContent: "center",
  left: "0",
  top: "0",
  zIndex: "100%",
  boxShadow: "none",
}));

const ContainerHeader = styled(Container)(() => ({
  height: "100%",
}));

const Logo = styled(Image)(() => ({
  width: "auto",
  height: "32px",
  opacity: 0.9,
}));

export { StyledAppBar, Logo, ContainerHeader };
