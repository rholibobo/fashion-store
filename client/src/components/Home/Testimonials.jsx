"use client";

import { Box } from "@mui/material";
// //// SWIPER IMPORTS /////// //
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { MoveLeft, MoveRight, UserRound } from "lucide-react";
import { IoPersonSharp } from "react-icons/io5";

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

const breakpoint = {
  320: {
    slidesPerView: 1,
    spaceBetween:20,
  },
  760: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
};

const Testimonials = () => {
  return (
    <div className="mt-0 md:mt-8 w-full h-full md:h-screen flex flex-col-reverse md:flex-row">
      <Box className="scntestimonial w-full md:w-[60%] flex items-center flex-col md:flex-row px-2 md:px-0">
        <Box className="w-full flex items-end md:ml-12 pt-4 bg-gray-100 bg-opacity-20 ">
          <Swiper
            modules={[Navigation]}
            effect={"fade"}
            // spaceBetween={30}
            // slidesPerView={2}
            breakpoints={breakpoint}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
          >
            {testimonialData.map((info, index) => (
              <SwiperSlide key={index}>
                <Box className="bg-white h-80 overflow-auto py-4 pl-4 pr-2 md:pr-8">
                  <Box className="flex items-center">
                    <Box className="w-12 h-12 rounded-full bg-background flex justify-center items-center">
                      <IoPersonSharp />
                    </Box>

                    <Box>
                      <h5 className="font-header text-2xl font-medium">
                        {info.name}
                      </h5>
                      <p className="text-textgray text-sm">{info.title}</p>
                    </Box>
                  </Box>
                  <br />
                  <p>{info.comments}</p>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Box className="w-1/2 md:w-[8%] flex justify-between md:justify-start flex-row md:flex-col ml-0 md:ml-12">
          <div className="button-prev">
            <MoveLeft size={45} className="cursor-pointer" />
          </div>
          <div className="button-next">
            <MoveRight size={45} className="mt-0 md:-mt-4 cursor-pointer" />
          </div>
        </Box>
      </Box>

      <Box className="w-full md:w-[40%] mt-4 mb-4 pl-2 md:pl-0 bg-white flex flex-col justify-between">
        <h3 className="w-full md:w-1/2 font-header text-5xl my-0 mx-auto font-medium">
          Client Testimonials
        </h3>
      </Box>
    </div>
  );
};

export default Testimonials;
