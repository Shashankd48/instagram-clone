import { getProviders, signIn } from "next-auth/react";
import { Fragment } from "react";

const SignIn = ({ providers }) => {
   return (
      <Fragment>
         {Object.values(providers).map((provider) => (
            <div key={provider.name}>
               <button onClick={() => signIn(provider.id)}>
                  Sign in with {provider.name}
               </button>
            </div>
         ))}
      </Fragment>
   );
};

export async function getServerSideProps() {
   const providers = getProviders();
   return {
      props: {
         providers,
      },
   };
}

export default SignIn;
