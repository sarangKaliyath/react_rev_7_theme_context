import React from "react";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { data } from "./style.js";

export const Navbar = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      style={theme === "light" ? data.light : data.dark}
    >
      <h1>Navbar</h1>
      <button
        onClick={() => {
          handleTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};
