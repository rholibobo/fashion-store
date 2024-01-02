"use client";

import { Box, Typography } from "@mui/material";
import style from "../SwiperCarousel/swiper.module.css";
import { DisplayFlex, FlexContainer } from "../styles/globalStyles";
import image_data from "../SwiperCarousel/imageData";
import wristwatch from "../../../public/images/hero/watch.png";

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
import Image from "next/image";
import { useEffect, useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

export default function HeroSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [indicatorIndex, setIndicatorIndex] = useState(0);
  let checkIndex = 0;
  const handleSwiperSlideChange = (swiper) => {
    setSelectedIndex(swiper.activeIndex);
  };

  const determineColor = (index) => {
    return index === selectedIndex
      ? "bg-backgroundtext p-2"
      : "bg-textgray p-1";
  };
  const showLine = (index) => {
    return index === selectedIndex
      ? "bg-background w-12 h-[0.1rem] rounded-sm"
      : "hidden";
  };

  return (
    <Box className="w-full md:w-[85%] flex-col md:flex-row flex md:my-0 md:mx-auto relative">
      <Box className="hidden md:w-1/2 md:h-32 md:flex md:flex-col md:justify-between md:absolute md:bottom-[40%] md:-left-24 md:z-10">
        <Box className="flex items-center gap-2 py-2 pl-2">
          <div className={`${determineColor(0)} rounded-[50%]`}></div>
          <div className={`${showLine(0)}`}></div>
        </Box>

        <Box className="flex items-center gap-2 py-2 pl-2">
          <div className={`${determineColor(1)} rounded-[50%]`}></div>
          <div className={`${showLine(1)}`}></div>
        </Box>
        <Box className="flex items-center gap-2 py-2 pl-2">
          <div className={`${determineColor(2)} rounded-[50%]`}></div>
          <div className={`${showLine(2)}`}></div>
        </Box>
        <Box className="flex items-center gap-2 py-2 pl-2">
          <div className={`${determineColor(3)} rounded-[50%]`}></div>
          <div className={`${showLine(3)}`}></div>
        </Box>
      </Box>
      <Box className="w-full md:w-1/2 relative">
        <Swiper
          onSlideChange={(swiper) => handleSwiperSlideChange(swiper)}
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
            delay: 2000,
            disableOnInteraction: false,
          }}
          // spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
        >
          {image_data["hero"].map((image, index) => (
            <Box key={index}>
              <SwiperSlide>
                <Image
                  src={image}
                  alt="hero images"
                  className={style.heroImages}
                />
              </SwiperSlide>
            </Box>
          ))}
        </Swiper>

        <Box
          bgcolor="background.main"
          className="w-32 h-32 flex justify-center items-center absolute -bottom-12 right-4 md:bottom-[10%] md:right-[5%] z-10"
        >
          <Typography
            color="whitebackground.main"
            variant="h4"
            fontWeight="bold"
          >
            {`0${selectedIndex + 1}`}
          </Typography>
        </Box>
      </Box>
      <Box className="hidden md:w-[8%] md:flex md:justify-end md:flex-col">
        <div className="button-prev">
          <MoveLeft size={45} className="cursor-pointer" />
        </div>
        <div className="button-next">
          <MoveRight size={45} className="-mt-4 cursor-pointer" />
        </div>
      </Box>

      <Box className="w-full md:w-[35%] pt-6 flex flex-col justify-between">
        <Box sx={{ position: "relative" }}>
          <h3 className="font-header text-6xl font-medium">Discover</h3>
          <h3 className="font-header text-6xl font-medium">New Arrivals</h3>
          <Typography color="secondary.main">Latest collection</Typography>

          <Image src={wristwatch} alt="watch" className={style.watch} />
        </Box>

        <Box sx={{ marginTop: "1rem" }}>
          <Typography variant="body1" gutterBottom color="secondary.main">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>

        <Box color="secondary.main" className="flex gap-3 mt-4 md:mt-0">
          <Box className="animate-btn flex items-center justify-center w-[40%] h-[6vh] md:h-[10vh] border border-solid border-[#989898] cursor-pointer hover:text-white hover:border-[#F4BF96] ">
            <Typography>Shop Women</Typography>
          </Box>

          <Box
            bgcolor="background.main"
            color="whitebackground.main"
            className="action flex items-center justify-center w-[40%] h-[6vh] md:h-[10vh] border border-solid hover:border-[#989898] cursor-pointer"
          >
            <Typography>Shop Men</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
