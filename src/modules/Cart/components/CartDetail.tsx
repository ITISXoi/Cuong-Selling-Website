/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { COOKIES, getCookies } from "@/utils/cookies";
import { Container, Grid, Stack } from "@mui/material";
import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import ItemProduct from "./ItemProduct";
import TotalPrice from "./TotalPrice";
import { useAppSelector } from "hooks/useRedux";
import { getListProduct } from "@/store/ducks/cart/slice";

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
            <TotalPrice listProductCart={listProductCart} />
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
