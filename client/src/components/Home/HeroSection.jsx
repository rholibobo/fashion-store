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

export default function HeroSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSwiperSlideChange = (swiper) => {
    setSelectedIndex(swiper.activeIndex);
  };

  return (
    <FlexContainer>
      <Box sx={{ width: "50%", position: "relative"}}>
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
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
        >
          {image_data["hero"].map((image, index) => (
            <Box sx={{}} key={index}>
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
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: "20%",
            height: "20%",
            zIndex: "5",
          }}
        >
          <Typography
            color="whitebackground.main"
            variant="h4"
            fontWeight="bold"
            gutterBottom
          >
            {`0${selectedIndex + 1}`}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: "50%",
          paddingTop: "1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Typography variant="h2" gutterBottom>
            Discover nEW Arrivals
          </Typography>
          <Typography sx={{ marginTop: "-1.5rem" }} color="secondary.main">
            Latest collection
          </Typography>

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


        <Box className="flex gap-3">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "35%",
            height: "8vh",
            border: "1px solid #F4BF96",
          }}
        >
          <Typography gutterBottom>Shop Women</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "35%",
            height: "8vh",
            border: "1px solid #F4BF96",
          }}
        >
          <Typography gutterBottom>Shop Men</Typography>
        </Box>
      </Box>
      </Box>
      
    </FlexContainer>
  );
}
