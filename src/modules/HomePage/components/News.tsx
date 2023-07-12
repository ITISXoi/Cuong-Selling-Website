import { Typography } from "@mui/material";

const News = () => {
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
        UPDATE INFORMATION FROM NOWFOOD
      </Typography>
      <Typography
        variant={"h2"}
        sx={{ color: "secondary.main", textAlign: "center" }}
      >
        News
      </Typography>
    </>
  );
};

export default News;
