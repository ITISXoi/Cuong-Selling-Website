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
            <CountUp end={208000} duration={3} /> +
          </span>{" "}
          Live Jobs
        </Typography>
        <Typography variant={width > 1024 ? "h1" : "h5"} fontWeight={500}>
          Your <Span>Dream Job</Span> in one place
        </Typography>
        <Typography variant="body2">
          Find jobs that match your interests with us. Sales IQ provides a place
          you to find your Job.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          style={{ fontWeight: 600 }}
          onClick={onClick}
        >
          Get Started
        </Button>
      </Stack>
    </Grid>
  );
};
