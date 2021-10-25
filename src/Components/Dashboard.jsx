import React from "react";
import { useContext } from "react";
import styles from "./Dashboard.module.css";
import { ThemeContext } from "../Context/ThemeContext";
import { data } from "./style.js";

export const Dashboard = () => {
  const { theme } = useContext(ThemeContext);
  console.log(data.light);

  return (
    <div
      className={styles.container}
      style={theme === "light" ? data.light : data.dark}
    >
      <form>
        <h1>Register</h1>
        <input type="text" placeholder="Enter Email" />
        <input type="text" placeholder="Enter Username" />
        <input type="password" placeholder="Enter Password" />
        <input type="password" placeholder="Confirm Password" />
        <input type="submit" />
      </form>
    </div>
  );
};
