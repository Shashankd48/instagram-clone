import CreatePostButton from "./CreatePostButton";

const NoPostFound = () => {
   return (
      <div className="flex justify-center items-center h-[60vh] w-full border mt-5 flex-col">
         <h1 className="font-medium text-xl">No post added yet!</h1>
         <CreatePostButton />
      </div>
   );
};

export default NoPostFound;
