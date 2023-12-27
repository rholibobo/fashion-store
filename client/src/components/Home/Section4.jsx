"use client";

import { useState } from "react";
import { HeroContainer } from "../styles/globalStyles";
import { Box, Typography } from "@mui/material";

const headers = ["New Arrivals", "Best Seller", "Sale Off"];

const Section4 = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const changeIndex = (index) => {
    setSelectedIndex(index)
  };

  const determineActive = (index) => {
    return index === selectedIndex ? "bg-background text-textwhite" : "";
  };

  return (
    <HeroContainer>
      <Box className="w-1/2 my-0 mx-auto">
        <h3 className="font-header text-5xl font-medium text-center">
          Top Picks For You
        </h3>
        <br />

        <Box className="flex justify-center">
          {headers.map((header, index) => (
            <Box
              key={index}
              onClick={() => changeIndex(index)}
              className={`${determineActive(
                index
              )} border-2 border-r border-l border-background border-solid py-4 px-8 cursor-pointer`}
            >
              <Typography variant="body2">{header}</Typography>
            </Box>
          ))}
        </Box>

        {/* <Box className="flex justify-center">
            <Box className="border-2 border-r border-background text-white bg-background border-solid py-4 px-8 cursor-pointer">
              <Typography variant="body2">New Arrivals</Typography>
            </Box>
            <Box className="border-2 border-r border-background border-solid py-4 px-8 cursor-pointer">
              <Typography variant="body2">Best Seller</Typography>
            </Box>
            <Box className="border-2  border-background border-solid py-4 px-8 cursor-pointer">
              <Typography variant="body2">Sale Off</Typography>
            </Box>
          </Box> */}
      </Box>
    </HeroContainer>
  );
};

export default Section4;
