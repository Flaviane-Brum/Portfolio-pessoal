import React, { useState } from "react";
import styles from "./portfolio.module.scss";
import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";
import Image from "next/image";
import ModalComponent from "../../components/ModalComponent";
import { useAppContext } from "../../GlobalContext";
const Portfolio = ({ projetos }) => {
  const { setActive, active, btnMobile, mobile } = useAppContext();
  const [modal, setModal] = useState(null);
  const openModal = (projeto) => {
    setModal(projeto);
    setActive(true);
  };
  return (
    <>
      <Head>
        <title>Portfólio | Meu portfólio</title>
        <meta
          name="description"
          content="Projetos que desenvolvi para colocar em prática os estudos. Pretendo adicionar mais projetos ao longo de minha evolução profissional."
        />

        <meta itemProp="name" content="Portfólio | Meu portfólio" />
        <meta
          itemProp="description"
          content="Projetos que desenvolvi para colocar em prática os estudos. Pretendo adicionar mais projetos ao longo de minha evolução profissional."
        />
        <meta itemProp="image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />

        <meta
          property="og:url"
          content="https://portfolio-flaviane-brum.vercel.app/portfolio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Portfólio | Meu portfólio" />
        <meta
          property="og:description"
          content="Projetos que desenvolvi para colocar em prática os estudos. Pretendo adicionar mais projetos ao longo de minha evolução profissional."
        />
        <meta property="og:image" content="/ogimage.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfólio | Meu portfólio" />
        <meta
          name="twitter:description"
          content="Projetos que desenvolvi para colocar em prática os estudos. Pretendo adicionar mais projetos ao longo de minha evolução profissional."
        />
        <meta name="twitter:image" content="/ogimage.png" />
      </Head>
      <section
        className={`${styles.portfolio} ${
          btnMobile && styles.BtnMobileActive
        } ${active && " anime-right "} `}
      >
        <h1 className={styles.titlePortfolio}>Portfólio</h1>
        <div className={`${styles.container}  `}>
          <div className={styles.gridProjetos}>
            {projetos.map((projeto) => (
              <div
                onClick={() => openModal(projeto)}
                key={projeto.slug}
                className={`${styles.hovereffect} `}
              >
                <Image
                  src={projeto.cover}
                  alt={projeto.title}
                  width={500}
                  height={380}
                  quality={100}
                />
                <div className={styles.overlay}>
                  <h2>
                    {projeto.title}
                    <p>Clique para mais informações</p>
                  </h2>
                </div>
                {mobile ? (
                  <div className={styles.descricao}>
                    Clique para mais informações
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
      {modal && (
        <ModalComponent
          modal={modal}
          setModal={setModal}
          setActive={setActive}
          active={active}
        />
      )}
    </>
  );
};

export default Portfolio;

export const getStaticProps = async (ctx) => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.Predicates.at("document.type", "projeto")],
    {
      orderings: "[document.first_publication_date desc]",
    }
  );
  if (!response) {
    return;
  }
  const projetos = response.results.map((projeto) => {
    return {
      slug: projeto.uid,
      title: projeto.data.title,
      description: projeto.data.description,
      linkRepository: projeto.data.link_repository.url,
      linkProjeto: projeto.data.link_site.url,
      cover: projeto.data.cover.url,
      arrayDemos: projeto.data.demos,
      tecnologias: projeto.data.technologies,
    };
  });

  return {
    props: { projetos },
    revalidate: 5,
  };
};
