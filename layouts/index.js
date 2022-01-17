import { Fragment } from "react";
import Head from "next/head";
import Header from "../components/Header";

const Layouts = ({ children }) => {
   return (
      <div className="">
         <Header />

         {children}
      </div>
   );
};

export default Layouts;
