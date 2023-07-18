import { faker } from "@faker-js/faker";
import { createContext, useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Archive from "./Archive";
import Button from "./Button";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function App() {
  /*useEffect(() => {
    document.documentElement.classList.toggle("fake-dark-mode");
  }, [isFakeDark]);*/

  return (
    <section>
      {/*<button
          onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
          className="btn-fake-dark-mode"
        >
          {isFakeDark ? "☀️" : "🌙"}
    </button>*/}
      <Button />

      <Header />
      <Main />
      <Archive />
      <Footer />
    </section>
  );
}

export default App;
