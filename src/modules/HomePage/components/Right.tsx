/* eslint-disable @next/next/no-img-element */
import { Avatar, AvatarGroup, Box, Grid, Typography } from "@mui/material";
import CountUp from "react-countup";
import {
  BoxJobCompanies,
  BoxJobCountries,
  BoxJobDone,
  BoxManImage,
  BoxFoodImage,
} from "../styled";

export const Right = () => {
  return (
    <Grid
      item
      md={6}
      xs={0}
      position="relative"
      display={{ md: "flex", xs: "none" }}
    >
      <BoxManImage>
        <img src="/images/home/1606709279-poster-do-an-3.jpg" alt="drink" />
      </BoxManImage>
      <BoxFoodImage>
        <img src="/images/home/chup-hinh-mon-an-Han-Quoc_2020.png" alt="food" />
      </BoxFoodImage>
      <Box>
        <BoxJobCountries>
          <Typography color="var(--pink-color)" variant="h5">
            <CountUp end={20} duration={3} />+
          </Typography>
          <Typography>Attractive Promotion</Typography>
        </BoxJobCountries>
      </Box>

      <Box>
        <BoxJobCompanies>
          <Typography color="secondary.main" variant="h5">
            <CountUp end={70} duration={3} />+
          </Typography>
          <Typography>Delicious Food</Typography>
        </BoxJobCompanies>
      </Box>
      <Box>
        <BoxJobDone>
          {/* <AvatarGroup max={4}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Avatar
                style={{ width: 32, height: 32 }}
                alt="Remy Sharp"
                src="/images/home/woman-pic.jpg"
                key={item}
              />
            ))}
          </AvatarGroup> */}
          <Typography color="secondary.main" variant="h5">
            <CountUp end={30} duration={3} />+
          </Typography>
          <Typography>Attractive Drink</Typography>
        </BoxJobDone>
      </Box>
    </Grid>
  );
};
