import styles from "./page.module.css";

import { HeroContainer } from "@/components/styles/globalStyles";
import HeroSection from "@/components/Home/HeroSection";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Sctn2 from "../../public/images/homepage/s-2.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroContainer>
        <HeroSection />
        <br />
        <br />
        <br />
        {/* Section 2 */}
        <Box className="w-[95%] my-0 mx-auto h-full flex justify-between items-center">
          <Box className="w-1/2 ">
            <h3 className="w-[60%] font-header text-5xl font-medium">
              Limited Edition Collection
            </h3>
            <br />
            <Typography variant="body2" gutterBottom color="secondary.main">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <br />
            <Box className="flex items-center justify-center w-[40%] h-[9vh] bg-black text-white border border-solid border-[#989898] cursor-pointer hover:text-white hover:bg-background transition-colors duration-300 ease-linear hover:border-[#F4BF96] ">
              <Typography>Explore Collection </Typography>
            </Box>
          </Box>

          <Box className="w-1/2 flex justify-end">
            <Image src={Sctn2} alt="face" className="w-[70%] h-auto rounded" />
          </Box>
        </Box>
      </HeroContainer>
    </main>
  );
}
