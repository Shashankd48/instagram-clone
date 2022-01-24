import { Fragment } from "react";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { ToastContainer } from "react-toastify";

const Layouts = ({ children }) => {
   return (
      <Fragment>
         <Header />
         <div className="max-w-4xl mx-auto">{children}</div>

         <Modal />
         <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
      </Fragment>
   );
};

export default Layouts;
