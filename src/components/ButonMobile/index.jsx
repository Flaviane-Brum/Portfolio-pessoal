import React from "react";
import { useAppContext } from "../../GlobalContext";
import styles from "./ButtonMobile.module.scss";
const ButtonMobile = () => {
  const { setBtnMobile, btnMobile } = useAppContext();
  function handleMobile() {
    setBtnMobile(!btnMobile);
  }
  return (
    <button
      aria-label="Abrir menu"
      onClick={handleMobile}
      className={`${styles.mobileButton} ${
        btnMobile ? styles.leftBtn : undefined
      }`}
    >
      <div className={btnMobile ? styles.div : undefined} />
      <div className={btnMobile ? styles.div : undefined} />
      <div className={btnMobile ? styles.div : undefined} />
    </button>
  );
};

export default ButtonMobile;
