import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

const ProfileHeader = ({ user }) => {
   return (
      <header>
         <div className="flex flex-wrap overflow-hidden mt-4 p-3">
            <div className="my-1 px-1 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/3">
               <div className="flex sm:justify-center items-center">
                  <div className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] relative">
                     <Image
                        src={user.image}
                        alt="profile pic"
                        layout="fill"
                        className="rounded-full"
                     />
                  </div>
               </div>
            </div>

            <section className="my-1 px-1 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-2/3">
               <div className="flex py-2 items-center">
                  <h1 className=" font-thin text-[1.7rem] tracking-[0.02rem]">
                     {user.username}
                  </h1>
                  <button
                     className="ml-6 border border-solid px-2 py-1 text-sm font-medium rounded-sm active:opacity-70 text-gray-800"
                     onClick={() => Router.push(`${user.username}/edit`)}
                  >
                     Edit Profile
                  </button>
               </div>

               <ul className="flex mt-2 font-medium">
                  <li className="">
                     {user.postCount} <span className="font-normal">posts</span>
                  </li>
                  <li className="ml-10">
                     {user.followerCount}{" "}
                     <span className="font-normal">followers</span>
                  </li>
                  <li className="ml-10">
                     {user.followingCount}{" "}
                     <span className="font-normal">following</span>
                  </li>
               </ul>

               <div className="mt-4 leading-[1.6rem] text-base">
                  <h1 className="font-medium tracking-[0.012rem]">
                     {user.name}
                  </h1>
                  <p className="text-gray-500 font-normal">Web Developer</p>
                  <h2 className=" text-gray-700">Lives in Lucknow.</h2>
                  <h3 className=" text-gray-700">
                     Website{" "}
                     <Link href="https://xparticle.in">
                        <a
                           className=" text-blue-900 font-medium"
                           target="_blank"
                        >
                           xparticle.in
                        </a>
                     </Link>
                  </h3>
               </div>
            </section>
         </div>
      </header>
   );
};

export default ProfileHeader;
