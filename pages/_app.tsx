import "../styles/globals.css";
import type { AppProps as NextAppProps } from "next/app";
import { wrapper } from "../features/store";
import PostsLayout from "../components/PostsLayout";
import UserLayout from "../components/UserLayout";

function MyApp({ Component, pageProps }: NextAppProps) {
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
        <PostsLayout>
          <Component {...pageProps} />
        </PostsLayout>
      );
    }
  }
}

export default wrapper.withRedux(MyApp);
