import Header from "../components/Header";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div>
      <Header />
      <div className="userlayout">{children}</div>
    </div>
  );
};

export default Layout;
