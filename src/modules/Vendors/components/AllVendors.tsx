/* eslint-disable @next/next/no-img-element */
import {
  Container,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Filters from "./Filters";
import { BoxBackground } from "../styled";

const AllVendors = () => {
  return (
    <Container sx={{ marginTop: "30px", minHeight: "80vh" }}>
      <Grid container spacing={2}>
        <Filters />
        <Grid item xs={9}>
          <Grid container spacing={2}>
            {[1, 2, 3, 4].map((item: any, index: number) => (
              <Grid item xs={4} key={index}>
                <Stack
                  sx={{
                    borderRadius: "5px",
                    backgroundColor: "#F5F5F5",
                  }}
                >
                  <Stack>
                    <img
                      src="/images/home/Arcadian.jpg"
                      alt=""
                      style={{
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    />
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                      sx={{
                        position: "relative",
                        bottom: "30px",
                        marginLeft: "20px",
                      }}
                      size="small"
                    />
                  </Stack>
                  <Stack padding={"10px 20px"} marginTop={"-20px"}>
                    <Typography>Ăn vặt Nowfood</Typography>
                    <Typography fontSize={"16px"}>
                      Ngõ 82 Duy Tân, Dịch Vọng Hậu
                    </Typography>
                  </Stack>
                  <Divider />
                  <Typography
                    padding={"10px 20px"}
                    fontSize={"14px"}
                    color={"red"}
                  >
                    12:01 sáng - 11:59 chiều
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AllVendors;

const styles = {
  item: {
    padding: "40px",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "15px",
    border: "1px solid #f3f5ff",
    width: "max-content",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#E0FFFF",
    },
  },
};
