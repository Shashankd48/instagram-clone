import { Fragment } from "react";
import { getUserByUsername } from "../../actions/UserAction";
import Page from "../../components/Page";
import ProfileFeed from "../../components/ProfileFeed";
import ProfileHeader from "../../components/ProfileHeader";

const Profile = ({ user }) => {
   return (
      <Fragment>
         <Page
            title={`${user.name} (@${user.username}) . Instagram photoes and videos`}
         />
         <ProfileHeader user={user} />

         <hr />

         <ProfileFeed />
      </Fragment>
   );
};

export async function getServerSideProps(context) {
   // const posts = await getRandomPosts(10);
   const user = await getUserByUsername(context.params.username);
   console.log(user);
   return {
      props: { user }, // will be passed to the page component as props
   };
}

export default Profile;
