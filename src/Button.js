import { useEffect, useState } from "react";
import "./style.css";

const Button = () => {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("fake-dark-mode");
  }, [isFakeDark]);

  return (
    <button
      onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
      className="btn-fake-dark-mode"
    >
      {isFakeDark ? "☀️" : "🌙"}
    </button>
  );
};
export default Button;

/* .fake-dark-mode {
  filter: invert(100%);
  transition: all 0.5s;
}

.btn-fake-dark-mode {
  position: fixed;
  top: 0;
  right: 0;
  padding: 16px;
  line-height: 1;
  font-size: 26px;
  background-color: #ffe8cc;
  border: none;
} */
