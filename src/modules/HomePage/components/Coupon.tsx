import { Typography } from "@mui/material";

const Coupon = () => {
  return (
    <>
      <Typography
        variant={"h5"}
        sx={{
          textAlign: "center",
          marginBottom: "20px",
          marginTop: "60px",
        }}
      >
        BUY HOT PRODUCTS FROM NOWFOOD
      </Typography>
      <Typography
        variant={"h2"}
        sx={{ color: "secondary.main", textAlign: "center" }}
      >
        Coupon
      </Typography>
    </>
  );
};

export default Coupon;
