import { useState } from "react";
import Comment from "./Comment";

const Comments = ({ comments = [] }) => {
   const [commentHeight, setCommentHeight] = useState({
      more: false,
      value: "h-20",
   });
   return (
      <div>
         <div
            className={`ml-8 ${commentHeight.value} overflow-y-scroll scrollbar-thumb-black scrollbar-thin`}
         >
            {comments.map((comment) => (
               <Comment comment={comment} key={comment.id} />
            ))}
         </div>
         <p
            className="ml-8 cursor-pointer"
            onClick={() =>
               setCommentHeight({
                  more: !commentHeight.more,
                  value: commentHeight.more ? "h-20" : "h-36",
               })
            }
         >
            <span className="text-bold text-gray-700 text-lg">... </span>
            <span className="text-sm text-gray-500">
               {commentHeight.more ? "less" : "more"}
            </span>
         </p>
      </div>
   );
};

export default Comments;
