import { DotsHorizontalIcon, EmojiHappyIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
   addDoc,
   collection,
   deleteDoc,
   doc,
   onSnapshot,
   orderBy,
   query,
   serverTimestamp,
   setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import Comments from "./Comments";
import HeartOutlinedIcon from "./Icons/HeartOutlinedIcon";
import RedHeartIcon from "./Icons/RedHeartIcon";
import CommentIcon from "./Icons/CommentIcon";
import BookmarkOutlinedIcon from "./Icons/BookmarkOutlinedIcon";
import Image from "next/image";

const Post = ({ id, username, img, userImg, caption, location }) => {
   const { data: session } = useSession();
   const [comments, setComments] = useState([]);
   const [comment, setComment] = useState("");
   const [likes, setLikes] = useState([]);
   const [hasLiked, setHasLiked] = useState(false);

   useEffect(
      () =>
         onSnapshot(
            query(
               collection(db, "posts", id, "comments"),
               orderBy("timestamp", "desc")
            ),
            (snapshot) => setComments(snapshot.docs)
         ),
      [db]
   );

   useEffect(
      () =>
         onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
            setLikes(snapshot.docs)
         ),
      [db, id]
   );

   useEffect(
      () =>
         setHasLiked(
            likes.findIndex((like) => like.id === session?.user?.uid) !== -1
         ),
      [likes]
   );

   const likePost = async () => {
      if (hasLiked) {
         await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
      } else
         await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
            username: session.user.username,
         });
   };

   const addComment = async (e) => {
      e.preventDefault();

      const commentToSend = comment;
      setComment("");

      await addDoc(collection(db, "posts", id, "comments"), {
         comment: commentToSend,
         username: session.user.username,
         userImage: session.user.image,
         timestamp: serverTimestamp(),
      });
   };

   return (
      <div className="bg-white my-7 border rounded-sm">
         {/*Header */}

         <div className="flex items-center p-3">
            <img
               src={userImg}
               alt="user image"
               className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
            />
            <div className="flex-1">
               <p className="font-medium mb-0">{username}</p>
               <p className="text-xs">{location}</p>
            </div>

            <DotsHorizontalIcon className="h-5" />
         </div>
         {/*Img */}

         <div
            className="w-full"
            style={{
               minHeight: "500px",
               maxHeight: "600px",
               width: "100%",
               position: "relative",
               objectFit: "contain",
            }}
         >
            <Image
               src={img}
               alt="Post"
               // className="object-cover w-full"
               layout="fill"
               objectFit="contain"
            />
         </div>

         {/*Buttons*/}

         {session && (
            <div className="flex justify-between px-4 pt-4">
               <div className="flex space-x-4">
                  <div onClick={likePost} className="post-btn">
                     {hasLiked ? <RedHeartIcon /> : <HeartOutlinedIcon />}
                  </div>

                  <div className="post-btn">
                     <CommentIcon />
                  </div>

                  {/*<PaperAirplaneIcon className="post-btn" /> */}
               </div>
               <div className="post-btn">
                  <BookmarkOutlinedIcon />
               </div>
            </div>
         )}

         {/* Caption */}
         <p className="p-5 truncate">
            {likes.length > 1 && (
               <p className="font-medium mb-1 text-sm">{likes.length} likes</p>
            )}
            {likes.length === 1 && (
               <p className="font-medium mb-1 text-sm">
                  liked by {likes[0].data().username}
               </p>
            )}
            <span className="font-medium">{username}</span>
            <span className="ml-2">{caption}</span>
         </p>

         {/*Comments*/}
         {comments.length > 0 && <Comments comments={comments} />}

         {/*Comment input box*/}

         {session && (
            <form className="flex items-center p-4">
               <EmojiHappyIcon className="post-btn" />
               <input
                  type="text"
                  className="border-none flex-1 focus:ring-0 outline-none"
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
               />
               <button
                  className={`font-medium text-blue-400`}
                  disabled={!comment.trim()}
                  type="submit"
                  onClick={addComment}
               >
                  Post
               </button>
            </form>
         )}
      </div>
   );
};

export default Post;
