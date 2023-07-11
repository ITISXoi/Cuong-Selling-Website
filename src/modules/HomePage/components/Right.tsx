/* eslint-disable @next/next/no-img-element */
import { Avatar, AvatarGroup, Box, Grid, Typography } from "@mui/material";
import CountUp from "react-countup";
import {
  BoxJobCompanies,
  BoxJobCountries,
  BoxJobDone,
  BoxManImage,
  BoxWomanImage,
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
        <img src="/images/home/man-pic.jpg" alt="man" />
      </BoxManImage>
      <BoxWomanImage>
        <img src="/images/home/woman-pic.jpg" alt="man" />
      </BoxWomanImage>
      <Box>
        <BoxJobCountries>
          <Typography color="var(--pink-color)" variant="h5">
            <CountUp end={100} duration={3} />+
          </Typography>
          <Typography>Job For Countries</Typography>
        </BoxJobCountries>
      </Box>

      <Box>
        <BoxJobCompanies>
          <Typography color="secondary.main" variant="h5">
            <CountUp end={12000} duration={3} />+
          </Typography>
          <Typography>Companies Jobs</Typography>
        </BoxJobCompanies>
      </Box>

      <Box>
        <BoxJobDone>
          <AvatarGroup max={4}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Avatar
                style={{ width: 32, height: 32 }}
                alt="Remy Sharp"
                src="/images/home/woman-pic.jpg"
                key={item}
              />
            ))}
          </AvatarGroup>
          <Typography>
            <CountUp end={30} duration={3} />+ Jobs Done
          </Typography>
        </BoxJobDone>
      </Box>
    </Grid>
  );
};
