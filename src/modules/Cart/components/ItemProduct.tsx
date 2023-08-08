/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { getListProduct, setMyCart } from "@/store/ducks/cart/slice";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Button, Rating, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import { useEffect, useState } from "react";

interface Props {
  item: Product;
}

const ItemProduct = (props: Props) => {
  const { item } = props;
  const [amount, setAmount] = useState(item.quantity);
  const listProduct = useAppSelector(getListProduct);
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    const existingItem = listProduct.find((record) => record.id === item.id);
    if (existingItem) {
      const newProduct = listProduct.map((record) =>
        record.id === item.id ? { ...record, quantity: amount } : { ...record }
      );
      dispatch(setMyCart(newProduct));
    }
  };
  const handleRemoveToCart = () => {
    const existingItem = listProduct.find((record) => record.id === item.id);
    if (existingItem) {
      const newProduct = listProduct.filter((record) => record.id !== item.id);
      dispatch(setMyCart(newProduct));
    }
  };
  const handleRemove = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  const handleAdd = () => {
    if (amount < item.amount) {
      setAmount(amount + 1);
    }
  };
  useEffect(() => {
    handleAddToCart();
  }, [amount]);
  return (
    <Stack
      sx={{
        padding: "12px 16px",
        borderRadius: "5px",
        backgroundColor: "#F5F5F5",
        flexDirection: "row",
        gap: "20px",
        justifyContent: "space-between",
      }}
    >
      <Stack flexDirection={"row"} gap={2}>
        <img
          src={item.url}
          alt=""
          style={{
            height: "100px",
            width: "100px",
            borderRadius: "5px",
          }}
        />
        <Stack gap={0.5}>
          <Typography fontWeight={600}>{item.name}</Typography>
          <Typography fontWeight={400}>Category: {item.category}</Typography>
          <Rating
            name="half-rating-read"
            value={Number(item.rating)}
            precision={0.5}
            readOnly
            size="small"
          />
          <Typography fontSize={"16px"}>Price: {item.price} đ</Typography>
        </Stack>
      </Stack>
      <Stack gap={2} justifyContent={"center"} alignItems={"center"}>
        <Stack flexDirection={"row"} gap={1}>
          <Button
            variant="contained"
            color="error"
            onClick={handleRemoveToCart}
          >
            Remove
          </Button>
        </Stack>

        <Stack flexDirection={"row"} sx={{ alignItems: "center" }} gap={2}>
          <RemoveCircleOutlineIcon
            sx={{ cursor: "pointer" }}
            onClick={handleRemove}
          />
          <Typography sx={{ fontSize: "24px" }}>{amount}</Typography>
          <ControlPointIcon sx={{ cursor: "pointer" }} onClick={handleAdd} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ItemProduct;
