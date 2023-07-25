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
import { listProduct } from "../utils/common";
import { Product } from "../utils/type";
import { useRouter } from "next/router";
import { routeEnums } from "@/types/routes";

const AllVendors = () => {
  const router = useRouter();
  const handleDetail = (id: number) => {
    router.push(`product/${id}`);
  };
  return (
    <Container sx={{ marginTop: "30px", minHeight: "80vh" }}>
      <Grid container spacing={2}>
        <Filters />
        <Grid item xs={9}>
          <Grid container spacing={2}>
            {listProduct.map((item: Product) => (
              <Grid
                item
                xs={4}
                key={item.id}
                onClick={() => handleDetail(item.id)}
              >
                <Stack
                  sx={{
                    borderRadius: "5px",
                    backgroundColor: "#F5F5F5",
                  }}
                >
                  <Stack>
                    <img
                      src={item.url}
                      alt=""
                      style={{
                        height: "200px",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                        cursor: "pointer",
                      }}
                    />
                    <Rating
                      name="half-rating-read"
                      defaultValue={item.rating}
                      precision={0.1}
                      readOnly
                      sx={{
                        position: "relative",
                        bottom: "30px",
                        marginLeft: "20px",
                      }}
                      size="small"
                    />
                  </Stack>
                  <Stack padding={"10px 20px"} gap={2} marginTop={"-20px"}>
                    <Typography>{item.name}</Typography>
                    <Typography fontSize={"16px"}>{item.price} VNĐ</Typography>
                  </Stack>
                  <Divider />
                  <Typography
                    padding={"10px 20px"}
                    fontSize={"14px"}
                    color={"red"}
                    sx={{ cursor: "pointer" }}
                  >
                    Add to cart
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
