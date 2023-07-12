/* eslint-disable @next/next/no-img-element */
import { Box, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { SliderStyled } from "./styled";

const ListProduct = () => {
  const router = useRouter();
  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
  };

  return (
    <Container>
      <Typography
        variant={"h2"}
        sx={{
          color: "secondary.main",
          textAlign: "center",
          marginTop: "60px",
          marginBottom: "40px",
        }}
      >
        Product portfolio
      </Typography>
      <SliderStyled {...settings}>
        {[1, 2, 3, 4, 5, , 6, 7, 8, 9, 10, 11, 12, 13].map(
          (item: any, index: number) => (
            <Stack gap={1} sx={styles.item} key={index} textAlign={"center"}>
              <img src="/images/home/logo-1.png" alt="" width={"100%"} />
              <Typography
                sx={{
                  width: "100%",
                  marginTop: "20px",
                  fontSize: "17px",
                  fontWeight: 600,
                }}
              >
                Food & Drink
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Food & Drink
              </Typography>
            </Stack>
          )
        )}
      </SliderStyled>
    </Container>
  );
};

export default ListProduct;

const styles = {
  item: {
    padding: "40px",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "15px",
    border: "1px solid #f3f5ff",
    width: "max-content",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#E0FFFF",
    },
  },
};
