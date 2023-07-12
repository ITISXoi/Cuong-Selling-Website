import { Box, Card, styled } from "@mui/material";

const BoxBackground = styled("div")(() => ({
  backgroundImage: "url(/images/home/home-banner.jpg)",
  backgroundSize: "cover",
  height: "800px",
  "@media (max-width:1024px)": {
    padding: "0 10px",
  },
}));

const ManPic = styled("img")(() => ({
  width: "75%",
  verticalAlign: "middle",
  borderRadius: "30px",
  zIndex: 2,
  position: "relative",
}));

const BoxManImage = styled(Box)(() => ({
  marginTop: "25%",
  textAlign: "right",
  position: "relative",
  right: "-80px",
  img: {
    width: "80%",
    verticalAlign: "middle",
    borderRadius: "30px",
    zIndex: 2,
    position: "relative",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    left: "calc(28% - 80px)",
    top: "-30px",
    zIndex: 1,
    height: "90%",
    width: "78%",
    backgroundColor: "#eac87c",
    borderRadius: "30px",
  },
}));

const BoxFoodImage = styled(Box)(() => ({
  position: "absolute",
  top: "400px",
  right: "-190px",
  bottom: "70px",
  textAlign: "right",
  img: {
    width: "55%",
    borderRadius: "50%",
    position: "relative",
    zIndex: 2,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    right: "-20px",
    top: "-30px",
    zIndex: 1,
    height: "450px",
    width: "300px",
    borderRadius: "0px 220px 220px 0px",
    backgroundColor: " rgba(255, 255, 255, 0.6)",
  },
}));

const BoxJobCountries = styled(Card)(() => ({
  display: "inline-block",
  padding: "15px",
  position: "absolute",
  bottom: "70px",
  left: "140px",
  zIndex: 3,
}));

const BoxJobCompanies = styled(Card)(() => ({
  display: "inline-block",
  padding: "15px",
  position: "absolute",
  left: "50px",
  top: "25%",
  zIndex: 3,
}));

const BoxJobDone = styled(Card)(() => ({
  display: "inline-block",
  padding: "15px",
  position: "absolute",
  top: "50%",
  left: "100px",
  zIndex: 3,
}));

const Span = styled("span")(() => ({
  color: "#1967d2",
  fontSize: "66px",
  lineHeight: "72px",
  fontWeight: 500,
  textDecoration: "underline",
  "@media (max-width:1024px)": {
    fontSize: "20px",
    lineHeight: "25px",
  },
}));

const BoxFeatureBooth = styled("div")(() => ({
  backgroundColor: "#f2f2f2",
  backgroundSize: "cover",
  height: "600px",
  marginTop: "50px",
  padding: "50px 10px",
  justifyContent: "center",
  alignItems: "center",
}));

const BoxImage = styled("div")(() => ({
  backgroundColor: "#f2f2f2",
  backgroundSize: "cover",
  marginTop: "50px",
  padding: "50px 220px",
  justifyContent: "center",
  alignItems: "center",
}));

export {
  BoxBackground,
  ManPic,
  BoxManImage,
  BoxFoodImage,
  BoxJobCountries,
  BoxJobCompanies,
  BoxJobDone,
  Span,
  BoxFeatureBooth,
  BoxImage,
};
