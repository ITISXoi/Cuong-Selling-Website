import { FC, memo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Box,
  Select,
  SelectProps,
  InputLabel,
  FormControl,
} from "@mui/material";

type SelectFieldProps = SelectProps & {
  name: string;
  defaultValue?: any;
  label?: any;
  formControlProps?: any;
};

const SelectField: FC<SelectFieldProps> = ({
  name,
  label,
  defaultValue = "",
  children,
  formControlProps = {},
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl {...formControlProps}>
          <InputLabel>{label}</InputLabel>
          <Select
            {...field}
            value={field.value || ""}
            fullWidth
            label={label}
            {...props}
            error={!!errors[name]}
          >
            {children}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default memo(SelectField);
