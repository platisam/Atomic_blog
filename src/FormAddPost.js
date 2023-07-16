import { useState } from "react";

const FormAddPost = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return;
    onAddPost({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
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
