/* eslint-disable react-hooks/exhaustive-deps */
import { toggleLoginModal } from "@/store/ducks/auth/slice";
import {
  getListProduct,
  setCart,
  setCartId,
  setMyCart,
  setOrderStatus,
} from "@/store/ducks/cart/slice";
import { ICart, getListOrder, setMyOrder } from "@/store/ducks/order/slice";
import { routeEnums } from "@/types/routes";
import { COOKIES, getCookies } from "@/utils/cookies";
import { LoginOutlined, LogoutOutlined } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";
import { useHeader } from "hooks/useHeader";
import { useLogin } from "hooks/useLogin";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import { useWindowSize } from "hooks/useWindowSize";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { db } from "../../../firebase";
import { ContainerHeader, StyledAppBar } from "./styled";

export const Header = () => {
  const windowSize = useWindowSize();
  const dispatch = useAppDispatch();
  const listProduct = useAppSelector(getListProduct);
  const listOrder = useAppSelector(getListOrder);
  const { isAuthenticator, logout } = useLogin();
  const router = useRouter();
  const { scroll } = useHeader();
  const fetchAPI = async () => {
    try {
      const queryEmail = query(
        ref(db, "user"),
        orderByChild("email"),
        equalTo(getCookies(COOKIES.email))
      );
      onValue(queryEmail, (snapshot) => {
        if (snapshot.val()) {
          const data: any[] = Object.values(snapshot.val());
          dispatch(setMyOrder(data));
          const currentCart = data.find((item: ICart) =>
            ["NEW", "PENDING", "PACKING", "SHIPPING"].includes(item.status)
          );
          console.log("currentCart", currentCart);
          dispatch(setCart(currentCart));
          dispatch(setMyCart(currentCart?.cart ? currentCart?.cart : []));
        }
      });
    } catch (error) {
      console.log("Errors", error);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  const totalItem = useMemo(() => {
    let totalQuantity = 0;
    listProduct.map((record) => {
      totalQuantity += record.quantity;
    });
    return totalQuantity;
  }, [listProduct]);
  const onLogin = () => {
    dispatch(toggleLoginModal());
  };
  const listOldOrder = useMemo(() => {
    return listOrder.filter((item) => item.status === "DONE");
  }, [listOrder]);

  const onLogout = () => {
    logout();
    dispatch(setMyCart([]));
    dispatch(setOrderStatus(""));
    dispatch(setCartId(""));
    dispatch(
      setCart({
        listProduct: [],
        totalPrice: 0,
        email: "",
        status: "",
        cartId: "",
      })
    );
    dispatch(setMyCart([]));
    dispatch(setMyOrder([]));
    router.push(routeEnums.home);
  };

  const onVendros = () => {
    router.push(routeEnums.vendors);
  };

  const onHomePage = () => {
    router.push(routeEnums.home);
  };

  const onCart = () => {
    router.push(routeEnums.cart);
  };
  const onOldOder = () => {
    router.push(routeEnums.allOrder);
  };
  return (
    <>
      <StyledAppBar position={scroll ? "fixed" : "absolute"}>
        <ContainerHeader maxWidth="lg" className="container-header">
          <Toolbar sx={{ height: "100%" }}>
            <Stack
              display="flex"
              justifyContent="space-between"
              direction="row"
              alignItems="center"
              width="100%"
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <Link href={routeEnums.home}>
                  <Typography
                    variant={windowSize.width > 1024 ? "h2" : "h5"}
                    color="secondary.main"
                  >
                    Food & Drink
                  </Typography>
                </Link>
              </Box>
              <Stack
                spacing={1.5}
                display="flex"
                justifyContent="center"
                alignItems="center"
                direction="row"
              >
                <Button variant="outlined" color="primary" onClick={onHomePage}>
                  {"Home"}
                </Button>
                <Button variant="outlined" color="primary" onClick={onVendros}>
                  {"All Product"}
                </Button>
                {listOldOrder?.length ? (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={onOldOder}
                  >
                    {"Old Order"}
                  </Button>
                ) : null}
                <Stack flexDirection={"row"} sx={{ marginRight: "20px" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<ShoppingCartIcon />}
                    onClick={onCart}
                  >
                    {"Cart"}
                  </Button>
                  {totalItem ? (
                    <Box
                      sx={{
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "15px",
                        backgroundColor: "blue",
                        width: "25px",
                        height: "25px",
                        top: "15px",
                        right: "135px",
                      }}
                    >
                      <Typography color={"white"}>{totalItem}</Typography>
                    </Box>
                  ) : null}
                </Stack>
                {!isAuthenticator ? (
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<LoginOutlined />}
                    onClick={onLogin}
                  >
                    {windowSize.width > 1024 ? "Sign In" : ""}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<LogoutOutlined />}
                    onClick={onLogout}
                  >
                    {windowSize.width > 1024 ? "Logout" : ""}
                  </Button>
                )}
              </Stack>
            </Stack>
          </Toolbar>
        </ContainerHeader>
      </StyledAppBar>
    </>
  );
};
