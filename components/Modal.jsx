import { Dialog, Transition } from "@headlessui/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";
import { Fragment, useRef, useState } from "react";
import { CameraIcon } from "@heroicons/react/outline";
import { db, storage } from "../firebase";
import {
   addDoc,
   collection,
   doc,
   serverTimestamp,
   updateDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const Modal = () => {
   const { data: session } = useSession();
   const [open, setOpen] = useRecoilState(modalState);
   const filePickerRef = useRef(null);
   const captionRef = useRef("");
   const locationRef = useRef("");
   const [selectedFile, setSelectedFile] = useState(null);
   const [loading, setLoading] = useState(false);

   const addImageToPost = (event) => {
      const reader = new FileReader();
      if (event.target.files[0]) {
         reader.readAsDataURL(event.target.files[0]);
      }

      reader.onload = (readerEvent) => {
         setSelectedFile(readerEvent.target.result);
      };
   };

   const uploadPost = async () => {
      if (loading) return;

      setLoading(true);

      // Create a post and add to firestore 'posts' collection
      // TODO: Update post count
      const docRef = await addDoc(collection(db, "posts"), {
         username: session.user.username,
         caption: captionRef.current.value,
         profileImg: session.user.image,
         timestamp: serverTimestamp(),
         location: locationRef.current.value,
      });

      const imageRef = ref(storage, `posts/${docRef.id}/image`);

      await uploadString(imageRef, selectedFile, "data_url").then(
         async (snapshot) => {
            const downloadURL = await getDownloadURL(imageRef);
            await updateDoc(doc(db, "posts", docRef.id), {
               image: downloadURL,
            });

            await updateDoc(doc(db, "users", session.user.id), {
               postCount: session.user.postCount + 1,
            });

            session.user.postCount = session.user.postCount + 1;
         }
      );

      setOpen(false);
      setLoading(false);
      setSelectedFile(null);
   };

   return (
      <Transition.Root show={open} as={Fragment}>
         <Dialog
            as="div"
            className="fixed z-10 inset-0 overflow-y-auto"
            onClose={setOpen}
         >
            <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 text-center sm:block sm:p-0">
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transitation-opacity" />
               </Transition.Child>

               {/* Center element */}
               <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
               >
                  &#8203
               </span>

               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 sm:translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 sm:translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
               >
                  <div className="inline-block align-bottom bg-white rounded-lg px-4 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-0 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                     <div>
                        {selectedFile ? (
                           <img
                              src={selectedFile}
                              alt="Upload Image"
                              className="w-full object-contain cursor-pointer"
                              onClick={() => setSelectedFile(null)}
                           />
                        ) : (
                           <div
                              className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer"
                              onClick={() => filePickerRef.current.click()}
                           >
                              <CameraIcon
                                 className="h-6 w-6 text-red-600"
                                 area-hidden="true"
                              />
                           </div>
                        )}

                        <div className="mt-3 text-center sm:mt-5">
                           <Dialog.Title
                              as="h3"
                              className="text-lg leading-6 font-medium text-gray-900"
                           >
                              Upload a photo
                           </Dialog.Title>

                           <div>
                              <input
                                 type="file"
                                 hidden
                                 ref={filePickerRef}
                                 onChange={addImageToPost}
                              />
                           </div>

                           <div className="mt-2">
                              <input
                                 type="text"
                                 className="border-none focus:ring-0 w-full text-center"
                                 placeholder="Write a caption..."
                                 ref={captionRef}
                              />
                           </div>
                           <div className="mt-2">
                              <input
                                 type="text"
                                 className="border-none focus:ring-0 w-full text-center"
                                 placeholder="Add location"
                                 ref={locationRef}
                              />
                           </div>
                        </div>
                        <div className="mt-5 sm:mt-6">
                           <button
                              type="button"
                              className="index-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                              onClick={uploadPost}
                              disabled={!selectedFile}
                           >
                              {loading ? "Uploading..." : "Upload Post"}
                           </button>
                        </div>
                     </div>
                  </div>
               </Transition.Child>
            </div>
         </Dialog>
      </Transition.Root>
   );
};

export default Modal;
