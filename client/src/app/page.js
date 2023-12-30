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
        <br />
        {/* Section 2 */}
        <Box className="w-[95%]  my-0 mx-auto h-full flex justify-between items-center">
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
        <br />
        <br />
        <br />
      </HeroContainer>
      {/* Section 3 */}

      <Box className="w-full h-screen flex relative justify-end">
        <Box className="w-[40%] absolute left-20 top-12">
          <Image src={Sctn3} alt="scn3" className="w-full h-full" />
        </Box>

        <Box className="w-[70%] bg-background flex justify-end items-center">
          <Box className="w-1/2 pr-8">
            <h3 className="font-header text-5xl font-medium">
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
            <Box className="flex items-center justify-center w-[40%] h-[9vh] bg-black text-white border border-solid border-[#989898] cursor-pointer hover:text-white hover:bg-background transition-colors duration-300 ease-linear hover:border-[#F4BF96] ">
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

      <Box className="flex justify-between gap-6 w-[90%] mt-8 pb-6 my-0 mx-auto">
        <Box>
          <Globe size="100" strokeWidth={1} />
          <p className="font-header text-2xl">International Shipping</p>
          <br />
          <p className="text-grayshade text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
            augue nibh, at ullamcorper orci ullamcorper ut Ever lines honeyed
            objects were.
          </p>
        </Box>
        <Box>
          <FileText size="100" strokeWidth={1} />
          <p className="font-header text-2xl">Customer Care</p>
          <br />
          <p className="text-grayshade text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
            augue nibh, at ullamcorper orci ullamcorper ut Ever lines honeyed
            objects were.
          </p>
        </Box>
        <Box>
        <ShieldCheck size="100" strokeWidth={1} />
          <p className="font-header text-2xl">Secure Payment</p>
          <br />
          <p className="text-grayshade text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
            augue nibh, at ullamcorper orci ullamcorper ut Ever lines honeyed
            objects were.
          </p>
        </Box>
        <Box>
          <MessageSquareText size="100" strokeWidth={1} />
          <p className="font-header text-2xl">24/7 Support</p>
          <br />
          <p className="text-grayshade text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
            augue nibh, at ullamcorper orci ullamcorper ut Ever lines honeyed
            objects were.
          </p>
        </Box>
      </Box>
    </main>
  );
}
