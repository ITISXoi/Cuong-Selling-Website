/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Button,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Product } from "../utils/type";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Dispatch, SetStateAction } from "react";

interface Props {
  item: Product;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setItem: Dispatch<SetStateAction<Product | undefined>>;
}

const ItemProduct = (props: Props) => {
  const { item, setOpen, setItem } = props;
  return (
    <Grid item xs={4} key={item.id}>
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
            onClick={() => {
              setItem(item), setOpen(true);
            }}
          />
          <Rating
            name="half-rating-read"
            defaultValue={item.rating}
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
        <Stack padding={"10px 20px"} gap={2} marginTop={"-20px"}>
          <Typography fontWeight={600}>{item.name}</Typography>
          <Typography fontSize={"16px"}>Price: {item.price} VNĐ</Typography>
        </Stack>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 1,
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            startIcon={<AddShoppingCartIcon />}
          >
            {"Add to cart"}
          </Button>
        </Box>
      </Stack>
    </Grid>
  );
};

export default ItemProduct;
