import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import Layouts from "../layouts";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
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
