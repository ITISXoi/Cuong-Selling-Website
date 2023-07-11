/* eslint-disable @next/next/no-img-element */
import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Container maxWidth="lg" sx={{ transform: "translateY(-30%)" }}>
      <Grid container sx={{ mt: 5, mb: 7 }}>
        <Grid item xs={4}>
          <Stack
            gap={2}
            sx={{
              borderRadius: " 20px 0 0 20px",
              backgroundColor: "#00CED1",
              height: "300px",
              alignItems: "center",
              justifyContent: " center",
            }}
          >
            <Typography variant="h3" textAlign="center" color={"white"}>
              Thử ngay các món ăn vặt nào!
            </Typography>
            <Typography
              fontSize={"18px"}
              textAlign="center"
              color={"white"}
              padding={"15px"}
            >
              Luôn tự hào với sứ mệnh mang đến những món ăn và đồ uống tốt nhất
              cho bạn và người thân!
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <img
              src="https://images.thinkgroup.vn/unsafe/1600x600/https://media-api-beta.thinkpro.vn/media/core/categories/2023/3/16/329409720_776699303816616_5609673989706713871_n.jpeg"
              alt=""
              width="100%"
              height="300px"
              style={{
                borderRadius: "0 20px 20px 0",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
