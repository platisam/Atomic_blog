import SearchPosts from "./SearchPosts";

const Header = ({ posts, onClearPosts, searchQuery, setSearchQuery }) => {
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <SearchPosts
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
    </header>
  );
};
export default Header;
