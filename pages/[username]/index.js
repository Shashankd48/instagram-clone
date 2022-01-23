import { useRouter } from "next/router";
import { Fragment } from "react";
import { getUserByUsername } from "../../actions/UserAction";
import AuthGuard from "../../components/AuthGuard";
import Page from "../../components/Page";
import ProfileFeed from "../../components/ProfileFeed";
import ProfileHeader from "../../components/ProfileHeader";
import UserNotFound from "../../components/UserNotFound";

const Profile = ({ user }) => {
   const router = useRouter();
   const { username } = router.query;
   return (
      <Fragment>
         <AuthGuard>
            {user ? (
               <Fragment>
                  <Page
                     title={`${user.name} (@${user.username}) . Instagram photoes and videos`}
                  />
                  <ProfileHeader user={user} />

                  <hr />

                  <ProfileFeed username={username} />
               </Fragment>
            ) : (
               <Fragment>
                  <Page title={`${username} . Not Found`} />{" "}
                  <UserNotFound username={username} />
               </Fragment>
            )}
         </AuthGuard>
      </Fragment>
   );
};

export async function getServerSideProps(context) {
   const user = await getUserByUsername(context.params.username);

   return {
      props: { user: user ? user : null }, // will be passed to the page component as props
   };
}

export default Profile;
