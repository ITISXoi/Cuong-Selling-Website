/* eslint-disable react-hooks/exhaustive-deps */
import TextField from "@/form-fields/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Rating,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { child, get, ref, update } from "firebase/database";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import { db } from "../../../../firebase";

interface IFormInput {
  quanlity: string;
}

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  item: Product;
}

export const OrderModal = (props: Props) => {
  const { open, setOpen, item } = props;
  const onClose = () => {
    setOpen(false);
  };
  const [value, setValue] = useState<number | null>(0);
  const [product, setProduct] = useState<any>();
  const [success, setSucces] = useState(false);
  const methods = useForm<IFormInput>({
    mode: "onSubmit",
    defaultValues: {},
  });
  useEffect(() => {
    get(child(ref(db), `product/${item.id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct(snapshot.val());
          setSucces(true);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const formSubmitHandler = async (e: any) => {
    if (value && success) {
      update(ref(db, "product/" + product.id), {
        id: product.id,
        amount: product.amount,
        category: product.category,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        description: product.description,
        name: product.name,
        price: product.price,
        rating: product.rating,
        url: product.url,
        comment: product?.comment?.length
          ? [...product.comment, { rating: value, quanlity: e.quanlity }]
          : [{ rating: value, quanlity: e.quanlity }],
      })
        .then(() => {
          toast.success("Success!");
          setOpen(false);
        })
        .catch(() => {
          toast.error("Fail!");
          setOpen(false);
        });
    } else {
      toast.error("You must rate this product!");
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
          Your Review about {item.name}
        </Typography>
        <Typography my={1}>
          Rate the product so that we can improve the quality of the product
          better.
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
                <Typography component="legend">Controlled</Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <TextField
                  sx={{ mt: 4 }}
                  name="quanlity"
                  label={"Review"}
                  placeholder={"Your Review"}
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
