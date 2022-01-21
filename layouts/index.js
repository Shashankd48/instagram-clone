import { Fragment } from "react";
import Header from "../components/Header";
import Modal from "../components/Modal";

const Layouts = ({ children }) => {
   return (
      <Fragment>
         <Header />
         <div className="max-w-4xl mx-auto">{children}</div>

         <Modal />
      </Fragment>
   );
};

export default Layouts;
