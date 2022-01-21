import Feed from "../components/Feed";
import Modal from "../components/Modal";
import Page from "../components/Page";
import { Fragment } from "react";

export default function Home() {
   return (
      <Fragment>
         <Page title="Instagram" />
         <Feed />
      </Fragment>
   );
}
