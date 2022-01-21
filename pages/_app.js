import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import Layouts from "../layouts";
import NProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
   Router.events.on("routeChangeStart", () => NProgress.start());
   Router.events.on("routeChangeComplete", () => NProgress.done());
   Router.events.on("routeChangeError", () => NProgress.done());

   return (
      <SessionProvider session={session}>
         <RecoilRoot>
            <Layouts>
               <Component {...pageProps} />
            </Layouts>
         </RecoilRoot>
      </SessionProvider>
   );
}

export default MyApp;
