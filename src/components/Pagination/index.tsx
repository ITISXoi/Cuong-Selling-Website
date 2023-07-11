import { FC } from "react";
import Pagination from "@mui/material/Pagination";
import { BoxWrap } from "./styled";

interface Props {
  color?: "primary" | "secondary" | "standard";
  size?: "small" | "medium" | "large";
  shape?: "circular" | "rounded";
  count: number;
  page?: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const BasicPagination: FC<Props> = ({
  color,
  count,
  page,
  onChange,
  size,
  shape,
  ...props
}) => {
  return (
    <BoxWrap {...props}>
      <Pagination
        shape={shape}
        count={count}
        color={color}
        size={size}
        page={page}
        onChange={onChange}
      />
    </BoxWrap>
  );
};
