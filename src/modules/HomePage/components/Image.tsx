/* eslint-disable @next/next/no-img-element */
import { Grid } from "@mui/material";
import { BoxImage } from "../styled";

const listImage = [
  { url: "/images/home/1-.jpg" },
  { url: "/images/home/4.jpg" },
  { url: "/images/home/3.jpg" },
  { url: "/images/home/2-1.jpg" },
];

const Images = () => {
  return (
    <div style={{ position: "relative" }}>
      <BoxImage>
        <img
          style={{
            position: "absolute",
            top: "50%",
            left: "-60px",
          }}
          src="/images/home/6-2-burger-png-image-thumb.png"
          alt=""
        />
        <img
          style={{
            position: "absolute",
            top: "10%",
            right: "0px",
          }}
          src="/images/home/tomatto.png"
          alt=""
        />
        <Grid container sx={{ justifyContent: "center", alignItems: "center" }}>
          {listImage.map((item: { url: string }, index: number) => (
            <Grid item xs={6} key={index}>
              <img
                src={item.url}
                alt=""
                width={"97%"}
                style={{ marginRight: "10px" }}
                height={"650px"}
              />
            </Grid>
          ))}
        </Grid>
      </BoxImage>
    </div>
  );
};

export default Images;
