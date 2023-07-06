import { ReactNode } from "react";
import { Navbar } from "..";
import { Footer } from "../footer/Footer";



const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
