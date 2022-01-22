import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const AuthGuard = ({ children }) => {
   const { data: session } = useSession();
   const router = useRouter();

   //    if (!session) return (window.location.href = "/singin");

   return children;
};

export default AuthGuard;
