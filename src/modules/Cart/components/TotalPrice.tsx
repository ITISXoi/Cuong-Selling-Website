/* eslint-disable react-hooks/exhaustive-deps */
import { getCart, getOrderStatus } from "@/store/ducks/cart/slice";
import { formatPrice } from "@/utils/common";
import { COOKIES, getCookies } from "@/utils/cookies";
import { Button, Stack, Typography } from "@mui/material";
import { push, ref, set, update } from "firebase/database";
import { useAppSelector } from "hooks/useRedux";
import moment from "moment";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { db } from "../../../../firebase";
import { OrderModal } from "./OrderModal";

interface Props {
  listProductCart: Product[];
}

const TotalPrice = (props: Props) => {
  const { listProductCart } = props;
  const currentCart = useAppSelector(getCart);
  const status = useAppSelector(getOrderStatus);
  const [open, setOpen] = useState(false);

  const totalPrice = useMemo(() => {
    let totalQuantity = 0;
    listProductCart.map((record) => {
      totalQuantity += record.quantity * record.price;
    });
    return totalQuantity;
  }, [listProductCart]);
  const handleCreatNew = () => {
    const productKey = push(ref(db, "user")).key;
    const email = getCookies(COOKIES.email);
    set(ref(db, "user/" + productKey), {
      id: productKey,
      email: email,
      cart: listProductCart,
      totalPrice: totalPrice,
      status: "NEW",
      createdAt: moment(new Date()).format("DD-MM-YYYY HH:mm:ss"),
      updatedAt: "",
    })
      .then(() => {
        toast.success("Order success!");
      })
      .catch(() => {
        toast.error("Order fail!");
      });
  };
  const handleUpdate = () => {
    const email = getCookies(COOKIES.email);
    update(ref(db, "user/" + currentCart.cartId), {
      email,
      id: currentCart.cartId,
      status: currentCart.status,
      cart: listProductCart,
      totalPrice: totalPrice,
      createdAt: currentCart.createdAt,
      updatedAt: moment(new Date()).format("DD-MM-YYYY HH:mm:ss"),
    })
      .then(() => {
        toast.success("Update new product success!");
      })
      .catch(() => {
        toast.error("Update new product fail!");
      });
  };
  const handleDoneOrder = () => {
    const email = getCookies(COOKIES.email);
    update(ref(db, "user/" + currentCart.cartId), {
      email,
      id: currentCart.cartId,
      status: "DONE",
      cart: listProductCart,
      totalPrice: totalPrice,
      createdAt: currentCart.createdAt,
      updatedAt: moment(new Date()).format("DD-MM-YYYY HH:mm:ss"),
    })
      .then(() => {
        toast.success("Complete success!");
      })
      .catch(() => {
        toast.error("Complete fail!");
      });
  };

  return (
    <Stack
      gap={2}
      sx={{
        padding: "12px 16px",
        borderRadius: "5px",
        backgroundColor: "#F5F5F5",
        gap: "20px",
        justifyContent: "space-between",
      }}
    >
      {listProductCart.map((item) => (
        <Stack
          flexDirection={"row"}
          key={item.id}
          justifyContent={"space-between"}
        >
          <Typography fontWeight={600} fontSize={"18px"}>
            {item.name}
          </Typography>
          <Stack flexDirection={"row"} gap={1}>
            <Typography fontWeight={400} fontSize={"18px"}>
              {item.price}
            </Typography>{" "}
            x
            <Typography fontWeight={400} fontSize={"18px"}>
              {item.quantity}
            </Typography>
          </Stack>
        </Stack>
      ))}
      <Stack flexDirection={"row"} justifyContent={"space-between"}>
        <Typography fontWeight={600} fontSize={"18px"} color={"green"}>
          Total Price
        </Typography>
        <Typography fontWeight={600} fontSize={"18px"} color={"green"}>
          {formatPrice(totalPrice)} VNĐ
        </Typography>
      </Stack>
      {status === "NEW" ? (
        <Stack flexDirection={"column"} gap={2}>
          <Button variant="contained" color="info" onClick={handleUpdate}>
            Update your cart
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={() => setOpen(true)}
          >
            Order Now
          </Button>
        </Stack>
      ) : !status ? (
        <Stack flexDirection={"column"} gap={2}>
          <Button variant="contained" color="info" onClick={handleCreatNew}>
            Create new cart
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={() => setOpen(true)}
          >
            Order Now
          </Button>
        </Stack>
      ) : status === "SHIPPING" ? (
        <Button variant="contained" color="success" onClick={handleDoneOrder}>
          Received Order
        </Button>
      ) : null}
      <OrderModal
        open={open}
        setOpen={setOpen}
        listProductCart={listProductCart}
        totalPrice={totalPrice}
      />
    </Stack>
  );
};

export default TotalPrice;
