import React, { useEffect } from "react";
import { ActiveLink } from "../ActiveLink";
import styles from "./DesktopMenu.module.scss";
import { FaHome, FaBook, FaAddressBook } from "react-icons/fa";
import { useAppContext } from "../../GlobalContext";
import { useRouter } from "next/router";
const arrayMenuDark = [
  { url: "/", icone: FaHome, nome: "Home" },
  { url: "/sobre", icone: FaAddressBook, nome: "Sobre" },
  { url: "/portfolio", icone: FaBook, nome: "Portfólio" },
];
const DesktopMenu = () => {
  const { setActive, setBtnMobile } = useAppContext();
  const { pathname } = useRouter();
  useEffect(() => {
    setBtnMobile(null);
  }, [pathname, setBtnMobile]);
  return (
    <nav className={`${styles.menu} `}>
      <ul className={styles.desktopMenu}>
        {arrayMenuDark.map((link) => (
          <li key={`${link.nome}`} onClick={() => setActive(true)}>
            <ActiveLink href={link.url} activeClassName={styles.active}>
              <a>
                <link.icone size={32} />
                {link.nome}
              </a>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
