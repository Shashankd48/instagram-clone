const Loading = ({ height = "200px" }) => {
   let circleCommonClasses = "h-2 w-2 rounded-full";

   return (
      <div
         style={{ height: height }}
         className="flex justify-center items-center"
      >
         <div className="flex">
            <div
               className={`${circleCommonClasses} mr-1.5 animate-bounce bg-red-500`}
            ></div>
            <div
               className={`${circleCommonClasses} mr-1.5 animate-bounce200 bg-red-600`}
            ></div>
            <div
               className={`${circleCommonClasses} animate-bounce400 bg-red-700`}
            ></div>
         </div>
      </div>
   );
};

export default Loading;
