"use client";

import { Box } from "@mui/material";
// //// SWIPER IMPORTS /////// //
import {
  Navigation,
  
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { UserRound } from "lucide-react";

const testimonialData = [
  {
    name: "John Doe",
    title: "Fashion Designer",
    comments:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ",
  },
  {
    name: "John Doe",
    title: "Fashion Designer",
    comments:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
  },
  {
    name: "John Doe",
    title: "Fashion Designer",
    comments:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
  },
  {
    name: "John Doe",
    title: "Fashion Designer",
    comments:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
  },
];

const Testimonials = () => {
  return (
    <div className="mt-8 w-full h-screen flex">
      <Box className="w-[60%] bg-background flex items-center">
        <Box className="w-[100%] flex items-end ml-12 pt-4 bg-gray-100 bg-opacity-50 ">
          <Swiper
            modules={[Navigation]}
            effect={"fade"}
            spaceBetween={50}
            slidesPerView={2}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
          >
            {testimonialData.map((info, index) => (
              <SwiperSlide >
                <Box key={index} className="bg-white h-80 overflow-auto py-4 pl-4 pr-8">
                  <Box className="flex items-center gap-6">
                    <UserRound />
                    <Box>
                      <h3>{info.name}</h3>
                      <h5>{info.title}</h5>
                    </Box>
                  </Box>
                  <br />
                  <p>{info.comments}</p>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
      <Box className="w-[40%] mt-6 bg-white">
        <h3 className="w-1/2 font-header text-5xl my-0 mx-auto font-medium">
          Client Testimonials
        </h3>
      </Box>
    </div>
  );
};

export default Testimonials;
