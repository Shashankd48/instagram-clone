import { Fragment } from "react";
import { getUserByUsername } from "../../actions/UserAction";
import AuthGuard from "../../components/AuthGuard";
import Page from "../../components/Page";
import ProfileFeed from "../../components/ProfileFeed";
import ProfileHeader from "../../components/ProfileHeader";

const Profile = ({ user }) => {
   return (
      <Fragment>
         <AuthGuard>
            <Page
               title={`${user.name} (@${user.username}) . Instagram photoes and videos`}
            />
            <ProfileHeader user={user} />

            <hr />

            <ProfileFeed />
         </AuthGuard>
      </Fragment>
   );
};

export async function getServerSideProps(context) {
   const user = await getUserByUsername(context.params.username);

   return {
      props: { user }, // will be passed to the page component as props
   };
}

export default Profile;
