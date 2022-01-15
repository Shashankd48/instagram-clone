import { getProviders, signIn as signIntoProvider } from "next-auth/react";
import { Fragment } from "react";
import Header from "../../components/Header";
import Image from "next/image";
import Head from "next/head";

const SignIn = ({ providers }) => {
   return (
      <Fragment>
         <Head>
            <title>Login | Instagram</title>
            <link rel="icon" href="/favicon.png" />
         </Head>
         <Header />

         <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-36 px-14 text-center">
               <Image src="/instagram_logo.svg" width="220" height="100" />
               <p className="font-xs italic">
                  This is not a REAL app, It is buit for educational purpose
                  only.
               </p>

               <div className="mt-10">
                  {Object.values(providers).map((provider) => (
                     <div key={provider.name}>
                        <button
                           onClick={() =>
                              signIntoProvider(provider.id, {
                                 callbackUrl: "/",
                              })
                           }
                           className="py-2 px-4 bg-blue-500 rounded-md text-white"
                        >
                           Sign in with {provider.name}
                        </button>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export async function getServerSideProps() {
   const providers = await getProviders();
   return {
      props: {
         providers,
      },
   };
}

export default SignIn;
