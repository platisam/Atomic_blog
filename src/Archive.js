import { useState } from "react";
import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

const Archive = ({ onAddPost }) => {
  const [posts] = useState(() =>
    Array.from({ length: 100 }, () => createRandomPost())
  );

  const [showArchive, setShowArchive] = useState(false);

  return <aside></aside>;
};
export default Archive;
