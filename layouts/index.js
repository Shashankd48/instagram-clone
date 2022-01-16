import { Fragment } from "react";
import Head from "next/head";
import Header from "../components/Header";

const Layouts = ({ children }) => {
   return (
      <Fragment>
         <Head>
            <title>Instagram</title>
            <link rel="icon" href="/favicon.png" />
         </Head>
         <Header />
         {children}
      </Fragment>
   );
};

export default Layouts;
