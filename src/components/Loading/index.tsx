import { NoSsr } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";

interface Props {
  loading: boolean;
}

export const Loading: FC<PropsWithChildren<Props>> = (props) => {
  return <NoSsr>{props.loading ? null : <>{props.children}</>}</NoSsr>;
};
