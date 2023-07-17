import { ReactFCWithChildren } from "@/types/react";
import { routeEnums } from "@/types/routes";
import { LoginModal } from "components/Modal";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SignupModal } from "@/components/Modal/components/SignupModal";

export const Layout: ReactFCWithChildren = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Header />
      <div style={{ overflowX: "hidden" }}>{children}</div>
      <Footer />
      <LoginModal />
      <SignupModal />
      <Toaster />
    </>
  );
};
