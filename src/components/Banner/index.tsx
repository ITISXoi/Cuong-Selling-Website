import { Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { BoxBackground } from "./styled";

interface Props {
  title: string;
  description: string;
  style?: any;
}

export const Banner: FC<PropsWithChildren<Props>> = ({
  title,
  description,
  children,
  style,
}) => {
  return (
    <BoxBackground style={style}>
      <Typography textAlign="center" variant="h5" pt="300px">
        {title}
      </Typography>
      <Typography textAlign="center" mt="2">
        {description}
      </Typography>
      {children}
    </BoxBackground>
  );
};
