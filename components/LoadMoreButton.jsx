const LoadMoreButton = ({ onClick, text }) => {
   return (
      <button
         className="px-3 py-1 rounded-md mt-6 active:opacity-80 border"
         onClick={onClick}
      >
         {text}
      </button>
   );
};

export default LoadMoreButton;
