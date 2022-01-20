import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";

const CreatePostButton = () => {
   const [, setOpen] = useRecoilState(modalState);
   return (
      <button
         className="text-white bg-blue-600 py-2 px-3 mt-3 rounded-md transition:opacity-100 ease-in transition-opacity hover:opacity-70"
         onClick={() => setOpen(true)}
      >
         Create new post
      </button>
   );
};

export default CreatePostButton;
