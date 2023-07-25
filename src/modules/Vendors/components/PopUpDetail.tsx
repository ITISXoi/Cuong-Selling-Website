/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  Rating,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import { Product } from "../utils/type";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

interface Props {
  open: boolean;
  item: Product | undefined;
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
  console.log("item", item);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <Stack flexDirection={"row"} gap={4} sx={{ padding: 2 }}>
        <Stack gap={2}>
          <img
            alt=""
            src={item?.url}
            style={{ borderRadius: "10px", width: "350px" }}
          />
          <Rating defaultValue={item?.rating} precision={0.5} readOnly />
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
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <Stack flexDirection={"row"} sx={{ alignItems: "center" }} gap={2}>
              <RemoveCircleOutlineIcon sx={{ cursor: "pointer" }} />
              <Typography sx={{ fontSize: "24px" }}>10</Typography>
              <ControlPointIcon sx={{ cursor: "pointer" }} />
            </Stack>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<AddShoppingCartIcon />}
            >
              {"Add to cart"}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default PopUpDetail;
