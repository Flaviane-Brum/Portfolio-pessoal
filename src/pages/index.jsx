import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import gif from "../../public/gifmenina.gif";
import { FaGithub, FaLinkedin, FaHandPaper } from "react-icons/fa";
import { useAppContext } from "../GlobalContext";
export default function Home() {
  const { btnMobile, active, darkTheme } = useAppContext();

  return (
    <>
      <Head>
        <title>Home | Meu portfólio</title>
        <meta
          name="description"
          content="Olá me chamo Flaviane Brum, sou uma desenvolvedora Front-end em busca de uma oportunidade. Portfólio feito para apresentar algumas informações e projetos feitos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Olá me chamo Flaviane Brum, sou uma desenvolvedora Front-end em busca de uma oportunidade. Portfólio feito para apresentar algumas informações e projetos feitos por mim!"
        />
      </Head>

      <section
        className={`${styles.main} ${btnMobile && styles.BtnMobileActive} ${
          active && " anime-right "
        }`}
      >
        <div className={styles.intro}>
          <h1 className={`${styles.homeTitle} animeTop`}>Flaviane Brum</h1>

          <h2 className={`${styles.homeSubtitle} animeBottom `}>
            Estudante de Análise e desenvolvimento de sistemas.
          </h2>
        </div>
        <div
          className={`${styles.gifContainer} ${darkTheme && styles.gifBorder} `}
        >
          <Image src={gif} alt="Mulher programando" />
        </div>
        <div className={styles.socialIcons}>
          <a
            href="https://github.com/Flaviane-Brum/Flaviane-Brum"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/flaviane-brum/
            "
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </section>
    </>
  );
}
