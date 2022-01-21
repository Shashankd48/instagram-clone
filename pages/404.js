import Image from "next/image";
import Link from "next/link";

const PageNotFound = () => {
   return (
      <main className="flex flex-col justify-center items-center h-[80vh]">
         <Image
            src="/insta-logo.png"
            height={200}
            width={200}
            alt="insta-logo"
         />
         <h1 className="mt-4 text-4xl font-bold">
            {" "}
            <span className=" text-blue-600">404</span> Page not found
         </h1>
         <Link href="/">
            <a className="bg-blue-600 px-4 py-2 text-white rounded-md mt-6 active:opacity-80">
               Go back home
            </a>
         </Link>
      </main>
   );
};

export default PageNotFound;
