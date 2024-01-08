import styles from "./page.module.css";

import { HeroContainer } from "@/components/styles/globalStyles";
import HeroSection from "@/components/Home/HeroSection";
import Section4 from "@/components/Home/Section4";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Sctn2 from "../../public/images/homepage/s-2.png";
import Sctn3 from "../../public/images/homepage/scn3.2.png";
import Testimonials from "@/components/Home/Testimonials";
import { FileText, Globe, MessageSquareText, ShieldCheck } from "lucide-react";
import { CiGlobe } from "react-icons/ci";
import { FiFileText } from "react-icons/fi";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function Home() {
  return (
    <main>
      <HeroContainer>
        <HeroSection />
        <br />
        <br />
        <br className="hidden md:block" />
        {/* Section 2 */}
        <Box className="w-full lg:w-[95%] my-0 mx-auto h-full flex justify-between flex-col-reverse lg:flex lg:flex-row items-center">
          <Box className="w-full lg:w-1/2 mt-2 lg:mt-0">
            <h3 className="w-full lg:w-[60%] font-header text-5xl font-medium">
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
            <Box className="flex items-center justify-center w-1/2 lg:w-[40%] h-[6vh] lg:h-[9vh] bg-black text-white border border-solid border-[#989898] cursor-pointer hover:text-white hover:bg-background transition-colors duration-300 ease-linear hover:border-[#F4BF96] ">
              <Typography>Explore Collection </Typography>
            </Box>
          </Box>

          <Box className="w-full lg:w-1/2 flex justify-end">
            <Image
              src={Sctn2}
              alt="face"
              className="w-full lg:w-[70%] h-auto rounded"
            />
          </Box>
        </Box>
        <br />
        <br />
        <br />
      </HeroContainer>
      {/* Section 3 */}

      <Box className="w-full h-screen bg-background lg:bg-transparent mt-4 lg:mt-0 flex flex-col lg:flex-row relative items-end lg:items-start lg:justify-end pt-4">
        <Box className="w-[80%] lg:w-[40%] my-0 mx-auto lg:absolute left-0 lg:left-24 -top-0 lg:top-12">
          <Image src={Sctn3} alt="scn3" className="w-full lg:w-full h-full" />
        </Box>

        <Box className="w-full lg:w-[70%] lg:h-full bg-background flex justify-end items-center pt-2 pl-4 lg:pl-0 pb-8 lg:pb-0">
          <Box className="w-full lg:w-1/2 pr-8">
            <h3 className="font-header text-4xl lg:text-5xl font-medium">
              Embrace The Latest Fashion Trends
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
            <Box className="flex items-center justify-center w-[40%] h-[7vh] lg:h-[9vh] bg-black text-white border border-solid border-[#989898] cursor-pointer transition-colors duration-300 ease-linear  ">
              <Typography>Check It Out </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Section 4 */}
      <br />
      <br />
      <br />
      <br />

      <Section4 />

      {/* Section 5 */}
      <Testimonials />

      {/* Section 6 */}

      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[95%] lg:w-[90%] mt-8 pb-6 my-0 mx-auto">
        <Box className="flex flex-col items-center lg:items-start">
          <Globe size="100" strokeWidth={1} />
          <p className="font-header text-2xl">International Shipping</p>
          <br />
          <p className="text-grayshade text-sm text-center lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
            augue nibh, at ullamcorper orci ullamcorper ut Ever lines honeyed
            objects were.
          </p>
        </Box>
        <Box className="flex flex-col items-center lg:items-start">
          <FileText size="100" strokeWidth={1} />
          <p className="font-header text-2xl">Customer Care</p>
          <br />
          <p className="text-grayshade text-sm text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
            augue nibh, at ullamcorper orci ullamcorper ut Ever lines honeyed
            objects were.
          </p>
        </Box>
        <Box className="flex flex-col items-center lg:items-start">
          <ShieldCheck size="100" strokeWidth={1} />
          <p className="font-header text-2xl">Secure Payment</p>
          <br />
          <p className="text-grayshade text-sm text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
            augue nibh, at ullamcorper orci ullamcorper ut Ever lines honeyed
            objects were.
          </p>
        </Box>
        <Box className="flex flex-col items-center lg:items-start">
          <MessageSquareText size="100" strokeWidth={1} />
          <p className="font-header text-2xl">24/7 Support</p>
          <br />
          <p className="text-grayshade text-sm text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
            augue nibh, at ullamcorper orci ullamcorper ut Ever lines honeyed
            objects were.
          </p>
        </Box>
      </Box>
    </main>
  );
}
