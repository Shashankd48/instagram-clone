import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import {
   HeartIcon as HeartIconOutlined,
   BookmarkIcon,
   ChatIcon,
   DotsHorizontalIcon,
   EmojiHappyIcon,
   PaperAirplaneIcon,
} from "@heroicons/react/outline";

const Post = ({ id, username, img, userImg, caption }) => {
   return (
      <div className="bg-white my-7 border rounded-sm">
         {/*Header */}

         <div className="flex items-center p-5">
            <img
               src={userImg}
               alt="user image"
               className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
            />
            <p className="flex-1 font-medium">{username}</p>
            <DotsHorizontalIcon className="h-5" />
         </div>
         {/*Img */}

         <img src={img} alt="Post" className="object-cover w-full" />

         {/*Buttons*/}

         <div className="flex justify-between px-4 pt-4">
            <div className="flex space-x-4">
               <HeartIconOutlined className="post-btn" />
               <ChatIcon className="post-btn" />
               <PaperAirplaneIcon className="post-btn" />
            </div>
            <BookmarkIcon className="post-btn" />
         </div>

         {/* Caption */}
         <p className="p-5 truncate">
            <span className="font-medium">{username}</span>
            <span className="ml-2">{caption}</span>
         </p>

         {/*Comments*/}

         {/*input box*/}
         <form className="flex items-center p-4">
            <EmojiHappyIcon className="post-btn" />
            <input type="text" className="" />
            <button>Post</button>
         </form>
      </div>
   );
};

export default Post;
