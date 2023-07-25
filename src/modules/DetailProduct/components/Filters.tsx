import TextField from "@/form-fields/TextField";
import CachedIcon from "@mui/icons-material/Cached";
import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
interface IFormInput {
  email: string;
  password: string;
}

function valuetext(value: number) {
  return 5000 * value;
}
function valuetextFormat(value: number) {
  return `${value} VNĐ`;
}

const Filters = () => {
  const router = useRouter();
  const methods = useForm<IFormInput>({
    mode: "onSubmit",
    defaultValues: {},
  });
  const [value1, setValue1] = useState<number[]>([0, 10]);
  console.log("value1", value1);
  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - 10), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + 10)]);
    }
  };
  const formSubmitHandler = async (e: any) => {};
  return (
    <Grid item xs={3} padding={"10px"}>
      <Stack flexDirection={"column"} gap={2}>
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <Typography variant="h4">Filters</Typography>

          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
          >
            <CachedIcon fontSize="small" sx={{ color: "#CCCC33" }} />
            <Typography variant="h6" fontWeight={500} color={"#CCCC33"}>
              Refresh
            </Typography>
          </Stack>
        </Stack>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(formSubmitHandler)}
            autoComplete="new-password"
          >
            <TextField
              sx={{ mt: 2, width: "100%" }}
              name="email"
              placeholder={"Search ..."}
            />
          </form>
        </FormProvider>
        <Stack
          flexDirection={"row"}
          marginTop={"20px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h4">Price</Typography>
          <Stack
            minWidth={"100px"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Typography>{valuetext(value1[0])}</Typography>-
            <Typography>{valuetext(value1[1])} VNĐ</Typography>
          </Stack>
        </Stack>

        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={value1}
          onChange={handleChange1}
          valueLabelDisplay="auto"
          scale={valuetext}
          getAriaValueText={valuetextFormat}
          valueLabelFormat={valuetextFormat}
          disableSwap
          color="secondary"
        />
        <FormControl sx={{ marginTop: 2 }}>
          <Typography variant="h4" marginBottom={"10px"}>
            Food Categories
          </Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="coffee"
              control={<Radio />}
              label="Coffee"
            />
            <FormControlLabel
              value="fast_food"
              control={<Radio />}
              label="Fast food"
            />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </Stack>
    </Grid>
  );
};

export default Filters;
