import { ReactNode } from "react";
import { Navbar } from "..";
import { Footer } from "../footer/Footer";



const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
