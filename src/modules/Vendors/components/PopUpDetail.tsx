/* eslint-disable @next/next/no-img-element */
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
  Button,
  Dialog,
  DialogContentText,
  Rating,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import {
  getListProduct,
  getOrderStatus,
  setMyCart,
} from "@/store/ducks/cart/slice";
import { useLogin } from "hooks/useLogin";
import { toggleLoginModal } from "@/store/ducks/auth/slice";

interface Props {
  open: boolean;
  item: Product;
  handleClose: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PopUpDetail = (props: Props) => {
  const { open, item, handleClose } = props;
  const [amount, setAmount] = useState(1);
  const { isAuthenticator } = useLogin();
  const listProduct = useAppSelector(getListProduct);
  const status = useAppSelector(getOrderStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setAmount(1);
  }, [item]);
  const handleRemove = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };
  const handleAdd = () => {
    if (amount < item.amount) {
      setAmount(amount + 1);
    }
  };
  const onLogin = () => {
    dispatch(toggleLoginModal());
  };
  const handleAddToCart = () => {
    const existingItem = listProduct.find((record) => record.id === item.id);
    if (existingItem) {
      const newProduct = listProduct.map((record) =>
        record.id === item.id
          ? { ...record, quantity: record.quantity + amount }
          : { ...record }
      );
      dispatch(setMyCart(newProduct));
    } else {
      const newProduct = [
        ...listProduct,
        {
          category: item.category,
          id: item.id,
          name: item.name,
          url: item.url,
          quantity: amount,
          price: item.price,
          rating: item.rating,
          amount: item.amount,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
          description: item.description,
          comment: item?.comment.length ? [...item.comment] : [],
        },
      ];
      dispatch(setMyCart(newProduct));
    }
    handleClose();
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <Stack>
        <Stack
          flexDirection={"row"}
          gap={4}
          sx={{ padding: 2, minWidth: "770px" }}
        >
          <Stack gap={2}>
            <img
              alt=""
              src={item?.url}
              style={{ borderRadius: "10px", width: "350px" }}
            />
            <Rating value={Number(item.rating)} precision={0.5} readOnly />
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: 500,
              }}
            >
              Price: {item?.price} VNĐ
            </Typography>
          </Stack>
          <Stack gap={2}>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: 700,
              }}
            >
              {item?.name}
            </Typography>
            <DialogContentText color={"black"}>
              {item?.description}
            </DialogContentText>
            <Typography
              sx={{
                color: "#bd803e",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              Order now:
            </Typography>
            <Stack
              sx={{ width: "350px" }}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Stack
                flexDirection={"row"}
                sx={{ alignItems: "center" }}
                gap={2}
              >
                <RemoveCircleOutlineIcon
                  sx={{ cursor: "pointer" }}
                  onClick={handleRemove}
                />
                <Typography sx={{ fontSize: "24px" }}>{amount}</Typography>
                <ControlPointIcon
                  sx={{ cursor: "pointer" }}
                  onClick={handleAdd}
                />
              </Stack>
              <Button
                disabled={
                  !amount || ["PENDING", "PACKING", "SHIPPING"].includes(status)
                }
                variant="contained"
                color="primary"
                onClick={!isAuthenticator ? onLogin : handleAddToCart}
                startIcon={<AddShoppingCartIcon />}
              >
                {"Add to cart"}
              </Button>
            </Stack>
          </Stack>
        </Stack>
        {item.comment?.length ? (
          <Stack sx={{ padding: "20px" }}>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: 500,
                mb: "10px",
              }}
            >
              Review
            </Typography>
            {item?.comment?.map((record, index) => (
              <Stack
                key={index}
                sx={{
                  padding: "12px 16px",
                  borderRadius: "5px",
                  backgroundColor: "#F5F5F5",
                  mb: "10px",
                  gap: "10px",
                  justifyContent: "space-between",
                }}
              >
                <Rating
                  name="half-rating-read"
                  value={Number(record.rating)}
                  precision={0.5}
                  readOnly
                  size="small"
                />
                <Typography
                  sx={{
                    ml: "10px",
                    fontSize: "20px",
                    fontWeight: 400,
                  }}
                >
                  {record.quanlity}
                </Typography>
              </Stack>
            ))}
          </Stack>
        ) : null}
      </Stack>
    </Dialog>
  );
};

export default PopUpDetail;
