/* eslint-disable @next/next/no-img-element */
import CachedIcon from "@mui/icons-material/Cached";
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { onValue, ref } from "firebase/database";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { FormProvider, useForm } from "react-hook-form";
import { db } from "../../../../firebase";
import SearchIcon from "@mui/icons-material/Search";
import { Product } from "../utils/type";
import StarIcon from "@mui/icons-material/Star";
interface IFormInput {
  name: string;
  minPrice: string;
  maxPrice: string;
}

interface Props {
  listProduct: Product[];
  setFilter: Dispatch<
    SetStateAction<{
      name: string;
      minPrice: number;
      maxprice: number;
      category: string;
    }>
  >;
  filter: {
    name: string;
    minPrice: number;
    maxprice: number;
    category: string;
  };
}

const Filters = (props: Props) => {
  const { listProduct, setFilter, filter } = props;
  const methods = useForm<IFormInput>({
    mode: "onSubmit",
    defaultValues: {},
  });
  const [value1, setValue1] = useState<number[]>([0, 100]);
  const [category, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
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
  useEffect(() => {
    const starCountRef = ref(db, "category");
    onValue(starCountRef, (snapshot) => {
      setCategory(Object.values(snapshot.val()));
    });
  }, []);
  const handleCategory = (id: string, category: string) => {
    setSelectCategory(id);
    setFilter({
      ...filter,
      category: category,
    });
  };
  const handleFilterName = (event: any) => {
    setFilter({
      ...filter,
      name: event.target.value,
    });
  };
  const handleFilterMinPrice = (event: any) => {
    setFilter({
      ...filter,
      minPrice: event.target.value,
    });
  };
  const handleFilterMaxPrice = (event: any) => {
    setFilter({
      ...filter,
      maxprice: event.target.value,
    });
  };
  return (
    <Grid item xs={3} padding={"10px"}>
      <Stack flexDirection={"column"} gap={4}>
        <FormProvider {...methods}>
          <form autoComplete="new-password">
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
              <Typography variant="h4">Filter</Typography>
              <Button
                variant="text"
                sx={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                }}
                type="reset"
              >
                <CachedIcon fontSize="small" sx={{ color: "#CCCC33" }} />
                <Typography variant="h6" fontWeight={500} color={"#CCCC33"}>
                  Refresh
                </Typography>
              </Button>
            </Stack>
            <TextField
              onChange={(e: any) => {
                console.log(e);
                handleFilterName(e);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ mt: 2, width: "100%" }}
              name="name"
              placeholder={"Search ..."}
            />
            <Typography marginTop={"60px"} variant="h4">
              Price Range
            </Typography>
            <Stack
              minWidth={"100px"}
              flexDirection={"row"}
              gap={2}
              justifyContent={"space-between"}
            >
              <TextField
                type="number"
                sx={{ mt: 2, width: "100%" }}
                name="minPrice"
                placeholder={"Min price"}
                onChange={(e: any) => handleFilterMinPrice(e)}
              />
              <TextField
                type="number"
                sx={{ mt: 2, width: "100%" }}
                name="maxPrice"
                placeholder={"Max price"}
                onChange={(e: any) => handleFilterMaxPrice(e)}
              />
            </Stack>
          </form>
        </FormProvider>
        <FormControl sx={{ marginTop: 2 }}>
          <Typography variant="h4" marginBottom={"20px"}>
            Category
          </Typography>
          <Stack sx={{ flexDirection: "row", flexWrap: "wrap" }} gap={2}>
            {category.map((item: any) => (
              <Button
                variant={selectCategory === item.id ? "contained" : "outlined"}
                color="primary"
                onClick={() => {
                  if (selectCategory === item.id) {
                    setSelectCategory("");
                    handleCategory("", "");
                  } else {
                    handleCategory(item.id, item.name);
                  }
                }}
                key={item.id}
              >
                {item.name}
              </Button>
            ))}
          </Stack>
        </FormControl>
        <Stack gap={4}>
          <Typography variant="h4" marginBottom={"10px"}>
            Popular Product
          </Typography>
          {listProduct.map((item, index: number) => {
            if (index < 3)
              return (
                <Stack flexDirection={"row"} gap={2}>
                  <img
                    alt=""
                    src={item.url}
                    style={{ width: "80px", borderRadius: "5px" }}
                  />
                  <Stack>
                    <Typography fontWeight={500}>{item.name}</Typography>
                    <Stack
                      flexDirection={"row"}
                      alignItems={"center"}
                      gap={"5px"}
                    >
                      <StarIcon fontSize="small" sx={{ color: "#c5cf06" }} />
                      <Typography marginTop={"5px"} fontSize={"14px"}>
                        {item.rating || 0}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              );
          })}
        </Stack>
      </Stack>
    </Grid>
  );
};

export default Filters;
