import React, { useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import profilePic from "../../../public/perfil.png";
import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";

import DesktopMenu from "../DesktopMenu";
import { useAppContext } from "../../GlobalContext";
import { ActiveLink } from "../ActiveLink";

import ButtonMobile from "../ButonMobile";

const Header = () => {
  const { darkTheme, handleToggle, btnMobile, mobile } = useAppContext();

  return (
    <>
      {mobile && <ButtonMobile />}
      <header
        className={`${styles.header} ${btnMobile && styles.btnMobileActive}`}
      >
        {darkTheme !== undefined && (
          <form action="#" className={styles.btnCheck}>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={darkTheme}
                onChange={handleToggle}
                aria-label="Mudar tema do site "
              />
              <span className={styles.slider}></span>
            </label>
          </form>
        )}

        <div className={styles.containerHeader}>
          <div className={`${styles.logo} `}>
            <ActiveLink href="/" activeClassName={styles.active}>
              <a>
                <Image
                  src={profilePic}
                  alt="Foto de Flaviane"
                  quality={100}
                  width={180}
                  height={180}
                />
              </a>
            </ActiveLink>
          </div>
          <DesktopMenu btnMobile={btnMobile} />
        </div>
        <div className={styles.socialIcons}>
          <a
            href="https://github.com/Flaviane-Brum/Flaviane-Brum"
            target="_blank"
            rel="noreferrer"
            aria-label="Link para o Github"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/flaviane-brum/
            "
            target="_blank"
            rel="noreferrer"
            aria-label="Link para o Linkedin"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
        <p className={styles.copy}>
          Criado com <FaHeart /> por Flaviane Brum
        </p>
      </header>
    </>
  );
};

export default Header;
