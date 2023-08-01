/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { getListProduct } from "@/store/ducks/cart/slice";
import { Container, Grid, Stack } from "@mui/material";
import { useAppSelector } from "hooks/useRedux";
import ItemProduct from "./ItemProduct";
import TotalPrice from "./TotalPrice";

interface Product {
  id: string;
  url: string;
  name: string;
  price: number;
  category: string;
  rating: number | string;
  description: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
}

const CartDetail = () => {
  const listProductCart = useAppSelector(getListProduct);
  return (
    <Container
      sx={{ marginTop: "30px", minHeight: `calc(100vh - ${455}px - ${100}px)` }}
    >
      {listProductCart.length ? (
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stack gap={4}>
              {listProductCart.map((item) => (
                <ItemProduct key={item.id} item={item} />
              ))}
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <TotalPrice />
          </Grid>
        </Grid>
      ) : (
        <Stack>
          <img alt="" src="/images/jobs/empty-cart.png" />
        </Stack>
      )}
    </Container>
  );
};

export default CartDetail;
