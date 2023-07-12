import { Layout } from "@/layout";
import { Container, Grid } from "@mui/material";
import useIsomorphicLayoutEffect from "hooks/useIsomorphicLayoutEffect";
import { useLogin } from "hooks/useLogin";
import { PageComponent } from "next";
import { useRouter } from "next/router";
import FeaturedBooth from "./components/FeaturedBooth";
import { Left } from "./components/Left";
import ListProduct from "./components/ListProduct";
import { Right } from "./components/Right";
import { BoxBackground } from "./styled";
import Coupon from "./components/Coupon";
import Images from "./components/Image";
import News from "./components/News";

export const HomePage: PageComponent = () => {
  const { onClick } = useLogin();
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    if (router.query.form === "login") {
      onClick();
    }
  }, [router]);

  return (
    <>
      <BoxBackground>
        <Container maxWidth="lg" style={{ padding: 0 }}>
          <Grid container columns={12}>
            <Left />
            <Right />
          </Grid>
        </Container>
      </BoxBackground>
      <ListProduct />
      <FeaturedBooth />
      <Coupon />
      <Images />
      <News />
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
