import { routeEnums } from "@/types/routes";
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useWindowSize } from "hooks/useWindowSize";
import Link from "next/link";
import { CustomTypoFooter } from "./styled";

export const Footer = () => {
  const windowSize = useWindowSize();
  return (
    <Box bgcolor="#f0f6fe">
      <Container maxWidth="lg">
        <Grid container columns={12} spacing={5} mt={4} pb={5}>
          <Grid item md={4} xs={12}>
            <Stack spacing={2}>
              <Typography
                variant={windowSize.width > 1024 ? "h3" : "h5"}
                color="secondary.main"
              >
                Food & Drink
              </Typography>
              <Typography fontSize={14}>
                Many delicious dishes are waiting for you.
              </Typography>
              <Typography fontSize={14}>
                <strong>Address: </strong> 82 Duy Tan, Cau Giay, Ha Noi
              </Typography>
              <Typography fontSize={14}>
                <strong>Email: </strong> cuonghq.b19cn080@stu.ptit.edu.vn
              </Typography>
              <Typography fontSize={14}>
                <strong>Call: </strong> 0911439216
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={8} xs={12}>
            <Grid container columns={12}>
              <Grid item md={4} xs={6}>
                <CustomTypoFooter color="secondary.main" variant="h5">
                  Service
                </CustomTypoFooter>
                <Stack spacing={2} mt={3}>
                  <Link href={routeEnums.home}>
                    <Typography fontSize={14}>Home</Typography>
                  </Link>
                  <Link href={routeEnums.jobs}>
                    <Typography fontSize={14}>Jobs</Typography>
                  </Link>
                  <Link href={routeEnums.watchlist}>
                    <Typography fontSize={14}>Profile</Typography>
                  </Link>
                </Stack>
              </Grid>
              <Grid item md={4} xs={6}>
                <CustomTypoFooter color="secondary.main" variant="h5">
                  News
                </CustomTypoFooter>
                <Stack spacing={2} mt={3}>
                  <Link href={routeEnums.home}>
                    <Typography fontSize={14}>Home</Typography>
                  </Link>
                  <Link href={routeEnums.jobs}>
                    <Typography fontSize={14}>Jobs</Typography>
                  </Link>
                  <Link href={routeEnums.watchlist}>
                    <Typography fontSize={14}>Profile</Typography>
                  </Link>
                </Stack>
              </Grid>
              <Grid item md={4} xs={6}>
                <CustomTypoFooter color="secondary.main" variant="h5">
                  Support
                </CustomTypoFooter>
                <Stack spacing={2} mt={3}>
                  <Link href={routeEnums.home}>
                    <Typography fontSize={14}>Home</Typography>
                  </Link>
                  <Link href={routeEnums.jobs}>
                    <Typography fontSize={14}>Jobs</Typography>
                  </Link>
                  <Link href={routeEnums.watchlist}>
                    <Typography fontSize={14}>Profile</Typography>
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid container columns={12} mt={4} pb={4} alignItems="center">
          <Grid item md={6} xs={12}>
            <Typography fontSize={14} textAlign={{ md: "left", xs: "center" }}>
              Copyright © 2023 by KhiemLDK All Rights Reserved.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12} textAlign={{ md: "right", xs: "center" }}>
            <IconButton>
              <FacebookOutlined color="secondary" />
            </IconButton>
            <IconButton>
              <Instagram color="secondary" />
            </IconButton>
            <IconButton>
              <LinkedIn color="secondary" />
            </IconButton>
            <IconButton>
              <YouTube color="secondary" />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
