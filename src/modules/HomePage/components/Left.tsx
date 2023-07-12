import { Button, Grid, Stack, Typography } from "@mui/material";
import { useLogin } from "hooks/useLogin";
import { useWindowSize } from "hooks/useWindowSize";
import CountUp from "react-countup";
import { Span } from "../styled";

export const Left = () => {
  const { width } = useWindowSize();
  const { onClick } = useLogin();

  return (
    <Grid item md={6} xs={12}>
      <Stack spacing={4} style={{ marginTop: "60%" }} display="block">
        <Typography
          color="secondary.main"
          borderRadius="10px"
          display="inline-block"
          padding="10px 20px"
          fontWeight={500}
          sx={{
            backgroundColor: "secondary.contrastText",
          }}
        >
          We Have{" "}
          <span style={{ color: "#2f2f2f" }}>
            <CountUp end={100} duration={3} /> +
          </span>{" "}
          Food & Drink
        </Typography>
        <Typography variant={width > 1024 ? "h1" : "h5"} fontWeight={500}>
          <Span>The Best Food</Span> you can be found here.
        </Typography>
        <Typography variant="body2">
          Search and order delicious food here. We are always ready to serve
          you.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          style={{ fontWeight: 600 }}
          onClick={onClick}
        >
          {"Let's start buying"}
        </Button>
      </Stack>
    </Grid>
  );
};
