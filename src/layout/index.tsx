import { ReactFCWithChildren } from "@/types/react";
import { routeEnums } from "@/types/routes";
import { LoginModal } from "components/Modal";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: ReactFCWithChildren = ({ children }) => {
  const router = useRouter();
  return (
    <>
      {router.pathname !== routeEnums.jobs && <Header />}
      <div style={{ overflowX: "hidden", paddingBottom: 50 }}>{children}</div>
      {router.pathname !== routeEnums.jobs && <Footer />}
      <LoginModal />
      <Toaster />
    </>
  );
};
