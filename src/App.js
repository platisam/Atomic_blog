import { faker } from "@faker-js/faker";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Archive from "./Archive";
import Button from "./Button";
import { PostProvider } from "./PostContext";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function App() {
  return (
    <section>
      <Button />

      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default App;
