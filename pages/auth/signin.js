import { getProviders, signIn as signIntoProvider } from "next-auth/react";
import { Fragment } from "react";

const SignIn = ({ providers }) => {
   return (
      <Fragment>
         {Object.values(providers).map((provider) => (
            <div key={provider.name}>
               <button onClick={() => signIntoProvider(provider.id)}>
                  Sign in with {provider.name}
               </button>
            </div>
         ))}
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
