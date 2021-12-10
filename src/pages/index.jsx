import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import gif from "../../public/gifmenina.gif";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
        {/*  Google / Search Engine Tags  */}

        <meta itemProp="name" content="Home | Meu portfólio" />
        <meta
          itemProp="description"
          content="Olá me chamo Flaviane Brum, sou uma desenvolvedora Front-end em busca de uma oportunidade. Portfólio feito para apresentar algumas informações e projetos feitos por mim!"
        />
        <meta
          itemProp="image"
          content="https://portfolio-flaviane-brum.vercel.app//ogimage.png"
        />
        {/* <!-- Facebook Meta Tags --> */}

        <meta
          property="og:url"
          content="https://portfolio-flaviane-brum.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home | Meu portfólio" />
        <meta
          property="og:description"
          content="Olá me chamo Flaviane Brum, sou uma desenvolvedora Front-end em busca de uma oportunidade. Portfólio feito para apresentar algumas informações e projetos feitos por mim!"
        />
        <meta
          property="og:image"
          content="https://portfolio-flaviane-brum.vercel.app//ogimage.png"
        />
        {/* <!-- Twitter Meta Tags --> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Meu portfólio" />
        <meta
          name="twitter:description"
          content="Olá me chamo Flaviane Brum, sou uma desenvolvedora Front-end em busca de uma oportunidade. Portfólio feito para apresentar algumas informações e projetos feitos por mim!"
        />
        <meta
          name="twitter:image"
          content="https://portfolio-flaviane-brum.vercel.app//ogimage.png"
        />
        {/* <!-- Meta Tags Generated via http://heymeta.com --> */}
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
