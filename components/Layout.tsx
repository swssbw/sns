import Header from "../components/Header";
import Head from "next/head";
import { useState, useEffect, PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div>
      <Head>
        <title>짹짹이</title>
      </Head>

      <Header />
      <div className="main">{children}</div>
    </div>
  );
};

export default Layout;
