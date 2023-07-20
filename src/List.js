import { usePosts } from "./PostContext";
import Test from "./Test";

const List = () => {
  const { posts } = usePosts();

  return (
    <>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {/* <Test /> */}
    </>
  );
};
export default List;
