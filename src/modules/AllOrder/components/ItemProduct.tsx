/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Button, Rating, Stack, Typography } from "@mui/material";
import { useAppDispatch } from "hooks/useRedux";
import { OrderModal } from "./OrderModal";
import { useState } from "react";

interface Props {
  item: Product;
}

const ItemProduct = (props: Props) => {
  const { item } = props;
  const [open, setOpen] = useState(false);

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
        <Button variant="contained" color="error" onClick={() => setOpen(true)}>
          Review
        </Button>
        <Stack flexDirection={"row"} sx={{ alignItems: "center" }} gap={2}>
          <RemoveCircleOutlineIcon sx={{ cursor: "pointer" }} />
          <Typography sx={{ fontSize: "24px" }}>{item.quantity}</Typography>
          <ControlPointIcon sx={{ cursor: "pointer" }} />
        </Stack>
      </Stack>
      <OrderModal open={open} setOpen={setOpen} item={item} />
    </Stack>
  );
};

export default ItemProduct;
