import Moment from "react-moment";

const Comment = ({ comment }) => {
   return (
      <div key={comment.id} className="flex items-center space-x-2 mb-3">
         <img
            src={
               comment.data().userImage
                  ? comment.data().userImage
                  : "/avatar.jpg"
            }
            alt="Avatar"
            className="h-7 rounded-full"
         />
         <p className="text-sm flex-1">
            <span className="font-bold">{comment.data().username}</span>
            <span> {comment.data().comment}</span>
         </p>

         <Moment fromNow className="pr-5 text-xs" ago>
            {comment.data().timestamp?.toDate()}
         </Moment>
      </div>
   );
};

export default Comment;
