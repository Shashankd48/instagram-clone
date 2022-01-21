import { Fragment } from "react";
import Header from "../components/Header";
import Modal from "../components/Modal";

const Layouts = ({ children }) => {
   return (
      <Fragment>
         <Header />
         {children}
         <Modal />
      </Fragment>
   );
};

export default Layouts;
