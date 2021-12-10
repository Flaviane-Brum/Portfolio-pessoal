import React from "react";

import Slider from "react-slick";
import Image from "next/image";
import styles from "./Slider.module.scss";
const SliderComponent = ({ modal }) => {
  const { arrayDemos } = modal;
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "inline-block",
          height: "1.375rem",
          width: "1.375rem",
          borderRadius: "50%",
          lineHeight: "1",

          cursor: "pointer",
          alignSelf: "center",
          backgroundColor: "transparent",
          right: "-11px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "inline-block",
          height: "1.375rem",
          width: "1.375rem",
          borderRadius: "50%",
          lineHeight: "1",
          cursor: "pointer",
          alignSelf: "center",
          backgroundColor: "var(--third-color)",
          left: "-11px",
          zIndex: "99",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={`${styles.sliderContainer} `}>
      <Slider {...settings}>
        {arrayDemos.map((demo, index) => (
          <div key={index} className={styles.slickSlider}>
            <Image
              src={demo.demo.url}
              alt="Gifs dos projetos"
              width={635}
              quality={100}
              height={demo.demo.dimensions.height}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8NcnmPwAHHwLJGf2bBgAAAABJRU5ErkJggg=="
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
