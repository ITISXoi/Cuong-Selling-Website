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
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Dispatch, SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import {
  getListProduct,
  getOrderStatus,
  setMyCart,
} from "@/store/ducks/cart/slice";
import { useLogin } from "hooks/useLogin";
import { toggleLoginModal } from "@/store/ducks/auth/slice";

interface Props {
  item: Product;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setItem: Dispatch<SetStateAction<Product>>;
}

const ItemProduct = (props: Props) => {
  const { item, setOpen, setItem } = props;
  const { isAuthenticator } = useLogin();
  const listProduct = useAppSelector(getListProduct);
  const status = useAppSelector(getOrderStatus);
  const dispatch = useAppDispatch();
  const onLogin = () => {
    dispatch(toggleLoginModal());
  };
  const handleAddToCart = () => {
    const existingItem = listProduct.find((record) => record.id === item.id);
    if (existingItem) {
      const newProduct = listProduct.map((record) =>
        record.id === item.id
          ? { ...record, quantity: record.quantity + 1 }
          : { ...record }
      );
      dispatch(setMyCart(newProduct));
    } else {
      const newProduct = [
        ...listProduct,
        {
          id: item.id,
          name: item.name,
          url: item.url,
          quantity: 1,
          price: item.price,
          rating: item.rating,
          amount: item.amount,
        },
      ];
      dispatch(setMyCart(newProduct));
    }
  };
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
            value={Number(item.rating)}
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
        <Stack padding={"10px 20px"} gap={1} marginTop={"-20px"}>
          <Typography fontWeight={600}>{item.name}</Typography>
          <Typography fontWeight={400}>Category: {item.category}</Typography>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography fontSize={"16px"}>Price: {item.price} đ</Typography>
            <Button
              disabled={["PENDING", "PACKING", "SHIPPING"].includes(status)}
              variant="contained"
              color="primary"
              startIcon={<AddShoppingCartIcon />}
              onClick={!isAuthenticator ? onLogin : handleAddToCart}
            >
              Add
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default ItemProduct;
