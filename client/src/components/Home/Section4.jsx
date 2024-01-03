"use client";

import { useState } from "react";
import { HeroContainer, SectionFour } from "../styles/globalStyles";
import { Box, Typography } from "@mui/material";
import { newArrivals, bestSeller, saleOff } from "./section4data";
import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle, MoveRight } from "lucide-react";

const headers = ["New Arrivals", "Best Seller", "Sale Off"];

const Section4 = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [chooseImage, setChooseImage] = useState(0);
  const [objectStates, setObjectStates] = useState(
    newArrivals.reduce((acc, _, index) => {
      acc[index] = { isImageChanged: false };
      return acc;
    }, {})
  );

  const changeIndex = (index) => {
    setSelectedIndex(index);
  };
  
  const handleButtonClick = (index) => {
    setObjectStates((prevObjectStates) => {
      
      const updatedObjectStates = { ...prevObjectStates };

      updatedObjectStates[index] = {
        isImageChanged: !prevObjectStates[index]?.isImageChanged,
      };

      return updatedObjectStates;
    });
  };
 

  const determineActive = (index) => {
    return index === selectedIndex ? "bg-background text-textwhite" : "";
  };

  return (
    <Box className=" lg:w-[95%] my-0 mx-auto pt-8 lg:pt-16 pb-8">
      <Box className="w-[95%] lg:w-1/2 my-0 mx-auto">
        <h3 className="font-header text-4xl lg:text-5xl font-medium text-center">
          Top Picks For You
        </h3>
        <br />
        <br />

        <Box className="flex justify-start lg:justify-center">
          {headers.map((header, index) => (
            <Box
              key={index}
              onClick={() => changeIndex(index)}
              className={`${determineActive(
                index
              )} border-2 border-r border-l border-background border-solid py-2 lg:py-4 px-5 md:px-20 lg:px-8 cursor-pointer`}
            >
              <Typography variant="body2">{header}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {selectedIndex == 0 && (
        <Box className="px-1 md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {newArrivals.map((item, index) => (
            <Box key={index} className="">
              <Box className="w-full relative transition-all duration-300 ease-linear">
                <Image
                  src={
                    !objectStates[index]?.isImageChanged
                      ? item["frontImage"]
                      : item["backImage"]
                  }
                  alt="uyt"
                  width={385}
                  height={450}
                  className="transition-transform duration-300 ease-linear "
                />
                <Box className="flex gap-4 absolute bottom-4 right-8 lg:right-4 z-10">
                  {!objectStates[index]?.isImageChanged ? (
                    <ArrowLeftCircle
                      size={20}
                      className={`cursor-pointer text-yellow-600`}
                      onClick={() => handleButtonClick(index)}
                    />
                  ) : (
                    <ArrowRightCircle
                      size={20}
                      className="cursor-pointer text-gray-600"
                      onClick={() => handleButtonClick(index)}
                    />
                  )}
                </Box>
              </Box>

              <Box className="flex justify-between">
                <h3 className="font-header text-2xl">{item["title"]}</h3>
                <h4 className="font-header text-backgroundtext text-2xl">
                  &#8358;{`${item["price"]}`}
                </h4>
              </Box>

              <Box className="flex items-center justify-center w-[30%] h-[4vh] lg:h-[6vh] mt-2 mb-4 bg-black text-white border border-solid rounded-lg border-[#989898] cursor-pointer hover:text-white hover:bg-background transition-colors duration-300 ease-linear hover:border-[#F4BF96] ">
                <Typography variant="body2">Add to Cart </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
      {selectedIndex == 1 && (
        <Box className="px-1 md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {bestSeller.map((item, index) => (
            <Box key={index} className="">
              <Box className="w-full relative transition-all duration-300 ease-linear">
                <Image
                  src={
                    !objectStates[index]?.isImageChanged
                      ? item["frontImage"]
                      : item["backImage"]
                  }
                  alt="uyt"
                  width={385}
                  height={450}
                  className="transition-transform duration-300 ease-linear "
                />
                <Box className="flex gap-4 absolute bottom-4 right-8 lg:right-4 z-10">
                  {!objectStates[index]?.isImageChanged ? (
                    <ArrowLeftCircle
                      size={20}
                      className={`cursor-pointer text-yellow-600`}
                      onClick={() => handleButtonClick(index)}
                    />
                  ) : (
                    <ArrowRightCircle
                      size={20}
                      className="cursor-pointer text-gray-600"
                      onClick={() => handleButtonClick(index)}
                    />
                  )}
                </Box>
              </Box>

              <Box className="flex justify-between">
                <h3 className="font-header text-2xl">{item["title"]}</h3>
                <h4 className="font-header text-backgroundtext text-2xl">
                  &#8358;{`${item["price"]}`}
                </h4>
              </Box>

              <Box className="flex items-center justify-center w-[30%] h-[4vh] lg:h-[6vh] mt-2 mb-4  bg-black text-white border border-solid rounded-lg border-[#989898] cursor-pointer hover:text-white hover:bg-background transition-colors duration-300 ease-linear hover:border-[#F4BF96] ">
                <Typography variant="body2">Add to Cart </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
      {selectedIndex == 2 && (
        <Box className={`px-1 md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6`}>
          {saleOff.map((item, index) => (
            <Box key={index} className="">
              <Box
                className={`w-full relative transition-all duration-300 ease-linear`}
              >
                <Image
                  src={
                    !objectStates[index]?.isImageChanged
                      ? item["frontImage"]
                      : item["backImage"]
                  }
                  alt="uyt"
                  width={385}
                  height={450}
                  className={`transition-transform duration-300 ease-linear`}
                />
                <Box className="flex gap-4 absolute bottom-4 right-8 lg:right-4 z-10">
                  {!objectStates[index]?.isImageChanged ? (
                    <ArrowLeftCircle
                      size={20}
                      className={`cursor-pointer text-yellow-600`}
                      onClick={() => handleButtonClick(index)}
                    />
                  ) : (
                    <ArrowRightCircle
                      size={20}
                      className="cursor-pointer text-gray-600"
                      onClick={() => handleButtonClick(index)}
                    />
                  )}
                </Box>
              </Box>

              <Box className="flex justify-between">
                <h3 className="font-header text-2xl">{item["title"]}</h3>
                <h4 className="font-header text-backgroundtext text-2xl">
                  &#8358;{`${item["price"]}`}
                </h4>
              </Box>

              <Box className="flex items-center justify-center w-[30%] h-[4vh] lg:h-[6vh] mt-2 mb-4  bg-black text-white border border-solid rounded-lg border-[#989898] cursor-pointer hover:text-white hover:bg-background transition-colors duration-300 ease-linear hover:border-[#F4BF96] ">
                <Typography variant="body2">Add to Cart </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
      
      <Box className="flex justify-center mt-2 lg:mt-4">
        <Box className="flex items-center justify-center gap-4 w-1/2 lg:w-[20%] h-[7vh] lg:h-[9vh] bg-black text-white cursor-pointer hover:text-white hover:bg-background transition-colors duration-300 ease-linear hover:border-[#F4BF96] ">
          <Typography variant="body2">View More </Typography>
          <MoveRight />
        </Box>
      </Box>
    </Box>
  );
};

export default Section4;
