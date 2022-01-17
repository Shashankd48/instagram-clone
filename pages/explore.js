import Feed from "../components/Feed";
import Modal from "../components/Modal";
import Page from "../components/Page";
import { Fragment } from "react";

const Explore = () => {
   return (
      <Fragment>
         <Page title="Instagram" />
         <Feed />
         <Modal />
      </Fragment>
   );
};

export default Explore;
