import React from "react";
import styles from "./NotFoundBlock.module.scss";

export default function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <span>😕</span>
      <h1>Oops!</h1>
      <p>Page not found</p>
    </div>
  );
}
