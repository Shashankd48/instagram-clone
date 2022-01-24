import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { getUserByUsername } from "../../actions/UserAction";
import Page from "../../components/Page";
import { db } from "../../firebase";
import { updateDoc, doc, Timestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

const classes = {
   row: "flex flex-wrap items-center mb-5",
   column1: "w-[30%] flex justify-end pr-7",
   column2: "flex-auto",
   input: "py-1 px-2 w-[300px] border-1 border-gray-300 rounded-sm ",
   label: "text-md font-medium tracking-wide text-gray-800",
   button:
      "px-3 py-1.5 rounded-md active:opacity-80 border bg-blue-500 text-white font-medium tracking-wide text-sm",
};

const EditProfile = ({ user }) => {
   const { data: session } = useSession();
   const [isDisabled, setIsDisabled] = useState(true);
   const [userInfo, setUserInfo] = useState(user);
   const [isLoading, setIsLoading] = useState(false);

   const handleFormSubmit = async (event) => {
      event.preventDefault();
      setIsLoading(true);
      setIsDisabled(true);

      let profile = { ...userInfo };
      delete profile.id;
      delete profile.username;
      try {
         await updateDoc(doc(db, "users", session.user.id), {
            ...profile,
            timestamp: Timestamp.fromDate(new Date(userInfo.timestamp)),
         });
         const newData = await getUserByUsername(session.user.username);
         session.user = { uid: session.user.uid, ...newData };
         setUserInfo({ ...newData });
         toast.success("Profile update!");
      } catch (error) {
         toast.error("Failed to update profile");
      }
      setIsLoading(false);
      setIsDisabled(false);
   };

   useEffect(() => {
      if (JSON.stringify(userInfo) !== JSON.stringify(user))
         setIsDisabled(false);
      else setIsDisabled(true);
   }, [userInfo]);

   const handleChange = (event) => {
      setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
   };

   return (
      <Fragment>
         <Page title={`Edit Profile • ${user.username}`} />
         <main className="mt-5 border py-3 px-5 h-[88vh]">
            <article className="w-[100%] sm:w-[75%] m-auto my-5">
               <div className={classes.row}>
                  <div className={classes.column1}>
                     <div className="w-10 h-10 relative">
                        <Image
                           src={user.image}
                           alt="user profile"
                           className="rounded-full"
                           layout="fill"
                           objectFit="contain"
                        />
                     </div>
                  </div>

                  <div className={classes.column2}>
                     <h1 className="text-lg">{user.username}</h1>
                     <p className="text-sm font-medium tracking-wide text-blue-500 -mt-1">
                        Change profile photo
                     </p>
                  </div>
               </div>

               <form className="mt-5" onSubmit={handleFormSubmit}>
                  <div className={classes.row}>
                     <aside className={classes.column1}>
                        <label htmlFor="name" className={classes.label}>
                           Name
                        </label>
                     </aside>
                     <div className={classes.column2}>
                        <input
                           type="text"
                           label="name"
                           value={userInfo.name}
                           className={classes.input}
                           name="name"
                           onChange={handleChange}
                        />
                     </div>
                  </div>

                  <div className={classes.row}>
                     <aside className={classes.column1}>
                        <label htmlFor="username" className={classes.label}>
                           Username
                        </label>
                     </aside>
                     <div className={classes.column2}>
                        <input
                           type="text"
                           label="username"
                           value={userInfo.username}
                           className={classes.input}
                           name="username"
                           disabled
                        />
                        <br />
                        <small className="text-gray-500">
                           Username can't be changed.
                        </small>
                     </div>
                  </div>

                  <div className={classes.row}>
                     <aside className={classes.column1}>
                        <label htmlFor="website" className={classes.label}>
                           Website
                        </label>
                     </aside>
                     <div className={classes.column2}>
                        <input
                           type="text"
                           label="website"
                           value={userInfo.website}
                           className={classes.input}
                           name="website"
                           onChange={handleChange}
                        />
                     </div>
                  </div>

                  <div className={classes.row}>
                     <aside className={classes.column1}>
                        <label htmlFor="bio" className={classes.label}>
                           Bio
                        </label>
                     </aside>
                     <div className={classes.column2}>
                        <textarea
                           type="text"
                           label="bio"
                           value={userInfo.bio}
                           className={classes.input}
                           name="bio"
                           onChange={handleChange}
                        />
                     </div>
                  </div>

                  <div className={classes.row}>
                     <aside className={classes.column1}>
                        <label htmlFor="email" className={classes.label}>
                           Email
                        </label>
                     </aside>
                     <div className={classes.column2}>
                        <input
                           type="email"
                           label="email"
                           value={userInfo.email}
                           className={classes.input}
                           name="email"
                           onChange={handleChange}
                        />
                     </div>
                  </div>

                  <div className={classes.row}>
                     <aside className={classes.column1}>
                        <label htmlFor="phone" className={classes.label}>
                           Phone number
                        </label>
                     </aside>
                     <div className={classes.column2}>
                        <input
                           type="tel"
                           label="phone"
                           value={userInfo.phone}
                           className={classes.input}
                           name="phone"
                           onChange={handleChange}
                        />
                     </div>
                  </div>

                  <div className={classes.row}>
                     <aside className={classes.column1}>
                        <label htmlFor="address" className={classes.label}>
                           Lives in
                        </label>
                     </aside>
                     <div className={classes.column2}>
                        <textarea
                           type="text"
                           label="address"
                           value={userInfo.address}
                           className={classes.input}
                           name="address"
                           onChange={handleChange}
                        />
                     </div>
                  </div>

                  <div className={classes.row}>
                     <aside className={classes.column1}></aside>
                     <div className={`${classes.column2} justify-end`}>
                        <button
                           type="submit"
                           className={`${classes.button} ${
                              isDisabled ? "opacity-70" : ""
                           } `}
                           disabled={isDisabled}
                        >
                           {isLoading ? "Updating" : "Submit"}
                        </button>
                     </div>
                  </div>
               </form>
            </article>
         </main>
      </Fragment>
   );
};

export async function getServerSideProps(context) {
   const user = await getUserByUsername(context.params.username);

   return {
      props: { user: user ? user : null },
   };
}

export default EditProfile;
