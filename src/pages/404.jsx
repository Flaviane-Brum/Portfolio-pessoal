import React from "react";
import { useAppContext } from "../GlobalContext";
import styles from "./Custom404.module.scss";
const Custom404 = () => {
  const { btnMobile } = useAppContext();

  return (
    <div
      className={`${styles.container}  ${btnMobile && styles.BtnMobileActive}`}
    >
      <h1>404 - Página não encontrada. 🙁</h1>
    </div>
  );
};

export default Custom404;
