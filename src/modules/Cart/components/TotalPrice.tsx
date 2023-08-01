/* eslint-disable react-hooks/exhaustive-deps */
import { getListProduct } from "@/store/ducks/cart/slice";
import { formatPrice } from "@/utils/common";
import { Button, Stack, Typography } from "@mui/material";
import { useAppSelector } from "hooks/useRedux";
import { useEffect, useMemo } from "react";
interface IFormInput {
  name: string;
  minPrice: string;
  maxPrice: string;
}

interface Props {}

const TotalPrice = (props: Props) => {
  const {} = props;
  const listProduct = useAppSelector(getListProduct);
  const totalPrice = useMemo(() => {
    let totalQuantity = 0;
    listProduct.map((record) => {
      totalQuantity += record.quantity * record.price;
    });
    return totalQuantity;
  }, [listProduct]);
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
      {listProduct.map((item) => (
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
      <Button variant="contained" color="info">
        Order Now
      </Button>
    </Stack>
  );
};

export default TotalPrice;
