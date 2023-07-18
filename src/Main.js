import { useContext } from "react";
import FormAddPost from "./FormAddPost";
import Posts from "./Posts";

const Main = () => {
  const { posts, onAddPost } = useContext();

  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
};
export default Main;
