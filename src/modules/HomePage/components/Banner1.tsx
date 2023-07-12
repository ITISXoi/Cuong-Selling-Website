/* eslint-disable @next/next/no-img-element */
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { ImageBooth, StackDesciptionBooth } from "./styled";

const Banner1 = () => {
  return (
    <Stack sx={{ mt: 10, width: "600px", flexDirection: "row" }}>
      <Grid item xs={4}>
        <Box>
          <ImageBooth src="/images/home/Arcadian.jpg" alt="" />
        </Box>
      </Grid>
      <Grid item xs={8}>
        <StackDesciptionBooth gap={2}>
          <Typography fontSize={"26px"} fontWeight={400}>
            Ăn vặt Nowfood
          </Typography>
          <Typography fontSize={"16px"}>
            Ngõ 82 Duy Tân, Dịch Vọng Hậu
          </Typography>
          <Divider />
          <Typography fontSize={"16px"} color={"red"}>
            12:01 sáng - 11:59 chiều
          </Typography>
        </StackDesciptionBooth>
      </Grid>
    </Stack>
  );
};

export default Banner1;
