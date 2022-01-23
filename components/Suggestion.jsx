import Image from "next/image";
import Link from "next/link";

const Suggestion = ({ profile }) => {
   return (
      <div key={profile.id} className="flex items-center justify-between mt-3">
         <div className="p-[2px] rounded-full border">
            <div className="w-8 h-8 relative ">
               <Link href={`/${profile.username}`}>
                  <a>
                     <Image
                        src={profile.image}
                        alt="user profile"
                        className="rounded-full"
                        layout="fill"
                        objectFit="contain"
                     />
                  </a>
               </Link>
            </div>
         </div>

         <div className="flex-1 ml-4">
            <Link href={`/${profile.username}`}>
               <a>
                  <h2 className="font-semibold text-sm tracking-wide hover:underline">
                     {profile.username}
                  </h2>
               </a>
            </Link>
            <h3 className="text-xs text-gray-500 tracking-wide">
               {profile.location ? "Lives in" : "Suggestion for you"}
               {profile.location}
            </h3>
         </div>

         <button className="text-xs text-blue-500 font-medium">Follow</button>
      </div>
   );
};

export default Suggestion;
