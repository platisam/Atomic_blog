import { faker } from "@faker-js/faker";
import { useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Archive from "./Archive";
import Button from "./Button";
import { PostProvider, PostContext } from "./PostContext";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function App() {
  return (
    <PostProvider>
      <section>
        <Button />

        <Header />
        <Main />
        <Archive />
        <Footer />
      </section>
    </PostProvider>
  );
}

export default App;
