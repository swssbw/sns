import Header from "./Header";
import Head from "next/head";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div>
      <Head>
        <title>NextSNS</title>
      </Head>

      <Header />
      <div className="main">{children}</div>
    </div>
  );
};

export default Layout;
