/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { getListProduct, getOrderStatus } from "@/store/ducks/cart/slice";
import { getListOrder } from "@/store/ducks/order/slice";
import { formatPrice } from "@/utils/common";
import { Container, Stack, Typography } from "@mui/material";
import { useAppSelector } from "hooks/useRedux";
import { useMemo } from "react";
import ItemProduct from "./ItemProduct";

const CartDetail = () => {
  const listOrder = useAppSelector(getListOrder);
  const listOldOrder = useMemo(() => {
    return listOrder.filter((item) => item.status === "DONE");
  }, [listOrder]);
  console.log("listOldOrder", listOldOrder);

  return (
    <Container
      sx={{ marginTop: "30px", minHeight: `calc(100vh - ${455}px - ${100}px)` }}
    >
      {listOldOrder.length ? (
        <Stack gap={4}>
          {listOldOrder.map((item) => (
            <Stack
              key={item.id}
              sx={{
                padding: "12px 16px",
                borderRadius: "5px",
                backgroundColor: "#F5F5F5",
                gap: "20px",
              }}
            >
              <Typography>
                Address: {item.address} - {item.state} - {item.city}
              </Typography>
              <Typography>Phone Number: {item.phoneNumber}</Typography>
              {item?.cart.map((record) => (
                <ItemProduct key={item.id} item={record} />
              ))}
              <Stack justifyContent={"end"} alignItems={"end"}>
                <Typography fontSize={"18px"} fontWeight={600} color={"red"}>
                  Total Price: {formatPrice(item.totalPrice)} VNĐ
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      ) : null}
    </Container>
  );
};

export default CartDetail;
