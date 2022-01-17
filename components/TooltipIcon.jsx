const TooltipIcon = () => {
   return (
      <div className="relative navBtn ">
         <PaperAirplaneIcon className="navBtn rotate-45" />
         <div className="absolute -top-2 -right-2 text-sm bg-red-500 rounded-full flex items-center justify-center h-5 w-5 text-white">
            3
         </div>
      </div>
   );
};

export default TooltipIcon;
