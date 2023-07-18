import { useContext } from "react";
import { PostContext } from "./PostContext";

const SearchPosts = () => {
  const { searchQuery, setSearchQuery } = useContext(PostContext);

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
};
export default SearchPosts;
