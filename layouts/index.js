import { Fragment } from "react";
import Header from "../components/Header";

const Layouts = ({ children }) => {
   return (
      <Fragment>
         <Header />
         {children}
      </Fragment>
   );
};

export default Layouts;
