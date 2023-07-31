/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { Container, Grid } from "@mui/material";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import { Product } from "../utils/type";
import Filters from "./Filters";
import ItemProduct from "./ItemProduct";
import PopUpDetail from "./PopUpDetail";
import { useAppSelector } from "hooks/useRedux";
import { getListProduct } from "@/store/ducks/cart/slice";

const AllVendors = () => {
  const [listProduct, setListProduct] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const [listProductFilter, setListProductFilter] = useState<Product[]>([]);
  const [filter, setFilter] = useState({
    name: "",
    minPrice: 0,
    maxprice: Number.POSITIVE_INFINITY,
    category: "",
  });
  const [item, setItem] = useState<Product>({
    amount: 0,
    category: "",
    createdAt: "",
    description: "",
    id: "",
    name: "",
    price: 0,
    rating: "",
    updatedAt: "",
    url: "",
  });
  const handleClose = () => {
    setOpen(false);
  };
  const dbRef = ref(db);
  useEffect(() => {
    const starCountRef = ref(db, "product");
    onValue(starCountRef, (snapshot) => {
      setListProduct(Object.values(snapshot.val()));
      setListProductFilter(Object.values(snapshot.val()));
    });
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      let productFilterName = [...listProduct];
      if (filter.name) {
        productFilterName = listProduct.filter(
          (item) => item.name.toLowerCase() === filter.name.toLowerCase()
        );
      }
      let productFilterCategory = [...productFilterName];
      if (filter.category) {
        productFilterCategory = productFilterName.filter(
          (item) =>
            item.category.toLowerCase() === filter.category.toLowerCase()
        );
      }
      let productFilterMinPrice = [...productFilterCategory];
      if (filter.minPrice) {
        productFilterMinPrice = productFilterCategory.filter(
          (item) => item.price >= filter.minPrice
        );
      }
      let productFilterMaxPrice = [...productFilterMinPrice];
      if (filter.maxprice) {
        productFilterMaxPrice = productFilterMinPrice.filter(
          (item) => item.price <= filter.maxprice
        );
      }
      setListProductFilter(productFilterMaxPrice);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [filter, listProduct]);
  const listProductCart = useAppSelector(getListProduct);
  console.log("listProductCart", listProductCart);
  return (
    <Container sx={{ marginTop: "30px", minHeight: "80vh" }}>
      <Grid container spacing={2}>
        <Filters
          listProduct={listProduct}
          setFilter={setFilter}
          filter={filter}
        />
        <Grid item xs={9}>
          <Grid container spacing={2} rowSpacing={6}>
            {listProductFilter.map((item) => (
              <ItemProduct
                key={item.id}
                item={item}
                setOpen={setOpen}
                setItem={setItem}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
      <PopUpDetail open={open} item={item} handleClose={handleClose} />
    </Container>
  );
};

export default AllVendors;
