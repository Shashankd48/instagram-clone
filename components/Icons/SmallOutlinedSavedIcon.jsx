import { Fragment } from "react";

export const SmallOutlinedSavedIcon = ({ active = false }) => {
   return (
      <Fragment>
         <svg
            aria-label=""
            color={active ? "#262626" : "#8e8e8e"}
            fill={active ? "#262626" : "#8e8e8e"}
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
         >
            <polygon
               fill="none"
               points="20 21 12 13.44 4 21 4 3 20 3 20 21"
               stroke="currentColor"
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
            ></polygon>
         </svg>
      </Fragment>
   );
};
