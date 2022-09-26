import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../features/store";
import Layout from "../components/Layout";
import UserLayout from "../components/UserLayout";

function MyApp({ Component, pageProps }: AppProps) {
  switch (pageProps.layout) {
    case "user": {
      return (
        <UserLayout>
          <Component {...pageProps} />
        </UserLayout>
      );
    }
    default: {
      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      );
    }
  }
  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // );
}

export default wrapper.withRedux(MyApp);
