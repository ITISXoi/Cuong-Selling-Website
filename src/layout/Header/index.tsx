import { toggleLoginModal } from "@/store/ducks/auth/slice";
import { routeEnums } from "@/types/routes";
import { LoginOutlined, LogoutOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import { useHeader } from "hooks/useHeader";
import { useLogin } from "hooks/useLogin";
import { useAppDispatch } from "hooks/useRedux";
import { useWindowSize } from "hooks/useWindowSize";
import Link from "next/link";
import { useRouter } from "next/router";
import { ContainerHeader, StyledAppBar } from "./styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Header = () => {
  const windowSize = useWindowSize();
  const dispatch = useAppDispatch();
  const { isAuthenticator, logout } = useLogin();
  const router = useRouter();

  const { scroll } = useHeader();

  const onLogin = () => {
    dispatch(toggleLoginModal());
  };

  const onLogout = () => {
    logout();
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
                  {"All Vendors"}
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<ShoppingCartIcon />}
                  onClick={onCart}
                >
                  {"Cart"}
                </Button>
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
