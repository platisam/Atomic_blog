import { useState } from "react";

const FormAddPost = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <form>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
      />
      <button>Add post</button>
    </form>
  );
};
export default FormAddPost;
