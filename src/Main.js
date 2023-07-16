import Posts from "./Posts";

const Main = ({ posts, onAddPost }) => {
  return (
    <main>
      <Posts posts={posts} />
    </main>
  );
};
export default Main;
