import TextField from "@/form-fields/TextField";
import { getCart } from "@/store/ducks/cart/slice";
import { routeEnums } from "@/types/routes";
import { COOKIES, getCookies } from "@/utils/cookies";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { push, ref, set, update } from "firebase/database";
import { useAppSelector } from "hooks/useRedux";
import moment from "moment";
import router from "next/router";
import { Dispatch, SetStateAction } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import { db } from "../../../../firebase";

interface IFormInput {
  address: string;
  city: string;
  state: string;
  phoneNumber: string;
}

const schema = yup.object().shape({
  address: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  phoneNumber: yup.string().required(),
});

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  listProductCart: Product[];
  totalPrice: number;
}

export const OrderModal = (props: Props) => {
  const { open, setOpen, listProductCart, totalPrice } = props;
  const currentCart = useAppSelector(getCart);
  const onClose = () => {
    setOpen(false);
  };

  const methods = useForm<IFormInput>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {},
  });
  const formSubmitHandler = async (e: any) => {
    const email = getCookies(COOKIES.email);
    if (currentCart.status) {
      update(ref(db, "user/" + currentCart.cartId), {
        email,
        address: e.address,
        state: e.state,
        city: e.city,
        id: currentCart.cartId,
        status: "PENDING",
        cart: listProductCart,
        totalPrice: totalPrice,
        createdAt: currentCart.createdAt,
        updatedAt: moment(new Date()).format("DD-MM-YYYY HH:mm:ss"),
        phoneNumber: e.phoneNumber,
      })
        .then(() => {
          router.push(routeEnums.cart);
          toast.success("Order success!");
          setOpen(false);
        })
        .catch(() => {
          toast.error("Order fail!");
          setOpen(false);
        });
    } else {
      const productKey = push(ref(db, "user")).key;
      set(ref(db, "user/" + productKey), {
        email,
        address: e.address,
        state: e.state,
        city: e.city,
        id: productKey,
        status: "PENDING",
        cart: listProductCart,
        totalPrice: totalPrice,
        createdAt: moment(new Date()).format("DD-MM-YYYY HH:mm:ss"),
        updatedAt: moment(new Date()).format("DD-MM-YYYY HH:mm:ss"),
        phoneNumber: e.phoneNumber,
      })
        .then(() => {
          router.push(routeEnums.cart);
          toast.success("Order success!");
          setOpen(false);
        })
        .catch(() => {
          toast.error("Order fail!");
          setOpen(false);
        });
    }
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: { borderRadius: 10, padding: 5, width: "500px" },
      }}
    >
      <DialogTitle textAlign="center" id="alert-dialog-title">
        <Typography variant="h4" fontWeight={500} color="primary.main">
          Your order
        </Typography>
        <Typography my={1}>
          Complete your order to receive our amazing food and drinks.
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(formSubmitHandler)}
              autoComplete="new-password"
            >
              <Stack>
                <TextField
                  sx={{ mt: 4 }}
                  name="address"
                  label={"Address"}
                  placeholder={"Address"}
                />
                <TextField
                  sx={{ mt: 4 }}
                  name="state"
                  label={"State"}
                  placeholder={"State"}
                />
                <TextField
                  sx={{ mt: 4 }}
                  name="city"
                  label={"City"}
                  placeholder={"City"}
                />
                <TextField
                  sx={{ mt: 4 }}
                  name="phoneNumber"
                  label={"Phone Number"}
                  placeholder={"Phone Number"}
                />
              </Stack>
            </form>
          </FormProvider>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => methods.handleSubmit(formSubmitHandler)()}
          autoFocus
          type="button"
        >
          Complete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
