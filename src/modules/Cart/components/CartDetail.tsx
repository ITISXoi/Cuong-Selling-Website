/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { getListProduct, getOrderStatus } from "@/store/ducks/cart/slice";
import {
  Box,
  Container,
  Grid,
  Stack,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { useAppSelector } from "hooks/useRedux";
import ItemProduct from "./ItemProduct";
import TotalPrice from "./TotalPrice";

const CartDetail = () => {
  const listProductCart = useAppSelector(getListProduct);
  const status = useAppSelector(getOrderStatus);
  const steps = ["Confirming", "Packing", "Shipping", "Done"];
  const checkStep = (status: string) => {
    switch (status) {
      case "PENDING":
        return 0;
      case "PACKING":
        return 1;
      case "SHIPPING":
        return 2;
      case "DONE":
        return 4;
    }
  };

  return (
    <Container
      sx={{ marginTop: "30px", minHeight: `calc(100vh - ${455}px - ${100}px)` }}
    >
      {listProductCart.length ? (
        <Stack>
          {!status || status === "NEW" ? null : (
            <Box sx={{ width: "100%", mb: "50px" }}>
              <Stepper activeStep={checkStep(status)} alternativeLabel>
                {steps.map((label, index) => (
                  <Step key={index}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          )}

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
        </Stack>
      ) : (
        <Stack>
          <img alt="" src="/images/jobs/empty-cart.png" />
        </Stack>
      )}
    </Container>
  );
};

export default CartDetail;
