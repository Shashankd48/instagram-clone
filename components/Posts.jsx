import Post from "./Post";

const posts = [
   {
      id: 123,
      username: "jfriday464",
      userImg:
         "https://www.google.com/url?sa=i&url=http%3A%2F%2Fcristinawashere.com%2Fsummer-instagram-picture-ideas%2F&psig=AOvVaw14mRXq4NwEytYlCwrxtWEE&ust=1634616555353000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMiTjbeL0_MCFQAAAAAdAAAAABAD",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Finstagram-girl&psig=AOvVaw2pYgEwWydlWP24oZRVdNyG&ust=1634617146162000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNC_7ciN0_MCFQAAAAAdAAAAABAJ",
      caption: "Hi",
   },
   {
      id: 124,
      username: "soniya123",
      userImg:
         "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F423268064961993684%2F&psig=AOvVaw0ZEU6OfQ9aA8HO-dl9lXgf&ust=1634616570204000&source=images&cd=vfe&ved=2ahUKEwjZ3a2xi9PzAhWLyDgGHfDnBaUQjRx6BAgAEAk",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.makebulog.com%2F2021%2F09%2F99-sad-girls-dp-for-whatsapp-facebook-instagram-profile-pics-2021.html&psig=AOvVaw2pYgEwWydlWP24oZRVdNyG&ust=1634617146162000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNC_7ciN0_MCFQAAAAAdAAAAABAP",
      caption: "Hello",
   },
   {
      id: 125,
      username: "eva_roy99",
      userImg:
         "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsofiasolisb.com%2Flifestyle%2Fsummer-captions-instagram-posts%2F&psig=AOvVaw06kxutnggh44MGeF44cbVy&ust=1634616572466000&source=images&cd=vfe&ved=2ahUKEwiE6reyi9PzAhXu5TgGHQdTDzsQjRx6BAgAEAk",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.techgrama.in%2Finstagram-dp-for-girls%2F&psig=AOvVaw2pYgEwWydlWP24oZRVdNyG&ust=1634617146162000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNC_7ciN0_MCFQAAAAAdAAAAABAc",
      caption: "Hey",
   },
   {
      id: 126,
      username: "natasha14",
      userImg:
         "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F813955332628616048%2F&psig=AOvVaw1gnSnzMNNMeujwwfbVcokJ&ust=1634616702803000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjN3vWL0_MCFQAAAAAdAAAAABAD",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freehindiwishes.com%2Fbest-dp-for-instagram-for-girl.html&psig=AOvVaw2pYgEwWydlWP24oZRVdNyG&ust=1634617146162000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNC_7ciN0_MCFQAAAAAdAAAAABAV",
      caption: "Hey",
   },
];

const Posts = () => {
   return (
      <div>
         {posts.map((post) => (
            <Post
               key={post.id}
               id={post.id}
               username={post.username}
               img={post.img}
               userImg={post.userImg}
               caption={post.username}
            />
         ))}
      </div>
   );
};

export default Posts;
