"use client";

import image_data from "./imageData";

// //// SWIPER IMPORTS /////// //
import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectFade,
  Autoplay,
  EffectCube,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import styles from "./swiper.module.css";
import Image from "next/image";
import { Box } from "@mui/material";

export const SignupCarousel = () => {
  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        Autoplay,
        EffectCube,
        EffectFade,
      ]}
      effect={"fade"}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className={`${styles.bg} ${styles.bg1}`}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles.bg} ${styles.bg2}`}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles.bg} ${styles.bg3}`}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles.bg} ${styles.bg4}`}></div>
      </SwiperSlide>
    </Swiper>
  );
};

export const HeroCarousel = () => {
  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        Autoplay,
        EffectCube,
        EffectFade,
      ]}
      effect={"fade"}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      spaceBetween={50}
      slidesPerView={1}
    >
      {image_data["hero"].map((image, index) => (
        <SwiperSlide key={index}>
          <Image src={image} alt="hero images" className={styles.heroImages} />

          <div
            className="absolute w-[10%] h-[10%] flex justify-center items-center"
          >
            {index + 1}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
