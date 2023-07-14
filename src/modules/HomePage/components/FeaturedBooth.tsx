/* eslint-disable @next/next/no-img-element */
import { Box, Button, Stack, Typography } from "@mui/material";
import { BoxFeatureBooth } from "../styled";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";

const FeaturedBooth = () => {
  return (
    <div style={{ position: "relative" }}>
      <BoxFeatureBooth>
        <Typography
          variant={"h2"}
          sx={{
            color: "secondary.main",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Feature Booth
        </Typography>
        <img
          style={{
            position: "absolute",
            top: "-30%",
            right: "0px",
          }}
          src="/images/home/pizza33.png"
          alt=""
        />
        <Stack flexDirection={"row"} gap={5} justifyContent={"center"}>
          <Banner1 />
          <Banner2 />
        </Stack>
        <Stack sx={{ justifyItems: "center", alignItems: "center", mt: 8 }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: "150px", height: "50px" }}
          >
            <Typography fontSize={"20px"}>See more</Typography>
          </Button>
        </Stack>
      </BoxFeatureBooth>
    </div>
  );
};

export default FeaturedBooth;
