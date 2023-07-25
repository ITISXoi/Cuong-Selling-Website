/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { Container, Grid } from "@mui/material";
import { child, get, ref } from "firebase/database";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import { Product } from "../utils/type";
import Filters from "./Filters";
import ItemProduct from "./ItemProduct";
import PopUpDetail from "./PopUpDetail";

const AllVendors = () => {
  const [listProduct, setListProduct] = useState([]);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<Product>();
  const handleClose = () => {
    setOpen(false);
  };
  const dbRef = ref(db);
  useEffect(() => {
    get(child(dbRef, `product`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setListProduct(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Container sx={{ marginTop: "30px", minHeight: "80vh" }}>
      <Grid container spacing={2}>
        <Filters />
        <Grid item xs={9}>
          <Grid container spacing={2}>
            {listProduct.map((item: Product) => (
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

const styles = {
  item: {
    padding: "40px",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "15px",
    border: "1px solid #f3f5ff",
    width: "max-content",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#E0FFFF",
    },
  },
};
