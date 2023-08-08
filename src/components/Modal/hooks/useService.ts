import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";
import { db } from "../../../../firebase";
import { COOKIES, getCookies } from "@/utils/cookies";
import { useAppDispatch } from "hooks/useRedux";
import { ICart, setMyOrder } from "@/store/ducks/order/slice";
import { setCart, setMyCart, setOrderStatus } from "@/store/ducks/cart/slice";

const useService = () => {
  const dispatch = useAppDispatch();
  const fetchAPI = () => {
    try {
      const queryEmail = query(
        ref(db, "user"),
        orderByChild("email"),
        equalTo(getCookies(COOKIES.email))
      );
      onValue(queryEmail, (snapshot) => {
        if (snapshot.val()) {
          const data: any[] = Object.values(snapshot.val());
          console.log("data", data);
          dispatch(setMyOrder(data));
          const currentCart = data.find((item: ICart) =>
            ["NEW", "PENDING", "PACKING", "SHIPING"].includes(item.status)
          );
          console.log("currentCart", currentCart);
          dispatch(setCart(currentCart));
          dispatch(setOrderStatus(currentCart?.status));
          dispatch(setMyCart(currentCart?.cart ? currentCart?.cart : []));
        }
        // else {
        //   const productKey = push(ref(db, "product")).key;
        //   const email = getCookies(COOKIES.email);
        //   set(ref(db, "user/" + productKey), {
        //     id: productKey,
        //     email: email,
        //     cart: [],
        //     totalPrice: 0,
        //     status: "NEW",
        //   });
        // }
      });
    } catch (error) {
      console.log("Errors", error);
    }
  };
  return { fetchAPI };
};

export default useService;
