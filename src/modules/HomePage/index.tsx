import { Layout } from "@/layout";
import { getLoginState } from "@/store/ducks/auth/slice";
import { Container, Grid } from "@mui/material";
import useIsomorphicLayoutEffect from "hooks/useIsomorphicLayoutEffect";
import { useLogin } from "hooks/useLogin";
import { useAppSelector } from "hooks/useRedux";
import { PageComponent } from "next";
import { useRouter } from "next/router";
import { Filter } from "./components/Filter";
import { Left } from "./components/Left";
import { Location } from "./components/Location";
import { Right } from "./components/Right";
import { BoxBackground } from "./styled";
import Banner from "./components/Banner";

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
      <BoxBackground onClick={onClick}>
        {/* <Container maxWidth="lg" style={{ padding: 0 }}>
          <Grid container columns={12}>
            <Left />
            <Right />
          </Grid>
        </Container> */}
      </BoxBackground>
      {/* <Filter /> */}
      <Banner />
      <Location />
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
