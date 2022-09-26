import Header from "../components/Header";
import Head from "next/head";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  // const firstName = children[0]?.props.userInfo.firstName;
  // const username = children[0]?.props.userInfo.username;

  return (
    <div>
      <Head>
        <title>
          {/* {firstName} (@{username}) */}
          짹쨱이
        </title>
      </Head>

      <Header />
      <div className="userlayout">{children}</div>
    </div>
  );
};

export default Layout;
