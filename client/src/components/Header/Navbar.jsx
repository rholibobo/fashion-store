"use client";

import { Box, Typography, useMediaQuery } from "@mui/material";
import styles from "./header.module.css";

import { LinkRoutes } from "./LinkRoute";
import MobileScreenNavbar from "./MobileScreenNav";
import Image from "next/image";

import Logo from "../../../public/logo/fslogo.png";
import { MobileAuthIcons } from "./AuthIcons";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const isMobileView = useMediaQuery("(max-width:1025px)");
  // const [isMobileView, setIsMobileView] = useState(0)

  // useEffect(() => {
  //   setIsMobileView(1024)
  // }, [])
  // const isMobileView = window.innerWidth;
  const pathname = usePathname();

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setIsHeaderFixed(scrollPosition > 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isDesignerRegPage = "/signup/designer";
  const isDesignerLoginPage = "/login/designer";
  const isCustomerRegPage = "/signup/client";
  const isCustomerLoginPage = "/login/client";
  const isForgotPasswordPage = "/forgotpassword";
  const isResetPasswordPage = "/resetpassword";

  if (
    pathname == isDesignerRegPage ||
    pathname == isCustomerRegPage ||
    pathname == isDesignerLoginPage ||
    pathname == isCustomerLoginPage ||
    pathname == isForgotPasswordPage ||
    pathname == isResetPasswordPage
  ) {
    return null;
  } else {
    return (
      <main
        className={`${
          isHeaderFixed
            ? "fixed top-0 left-0 w-full  bg-gray-50 z-50 transition-all duration-500 ease-in bg-opacity-95"
            : ""
        }`}
      >
        <header
          className={`w-[95%] lg:w-[90%] my-0 mx-auto flex justify-between items-center py-4`}
        >
          <Box className="w-[65%] md:w-[90%] lg:w-[20%] flex gap-1 items-center justify-between lg:justify-start">
            <Box className="flex gap-1 items-center">
              <Image src={Logo} alt="logo" className={styles.logo} />
              <p className="text-sm hidden xl:block">African Fashion Store</p>
            </Box>

            {/* {isMobileView && ( */}
            <Box className="block lg:hidden w-[30%] ml-1">
              <MobileAuthIcons />
            </Box>
            {/* // )} */}
          </Box>

          {isMobileView ? <MobileScreenNavbar /> : <LinkRoutes />}
          
            {/* <Box className="block lg:hidden">
              <MobileScreenNavbar />
            </Box>
            <Box className=" hidden lg:block">
              <LinkRoutes />
            </Box> */}
          
        </header>
      </main>
    );
  }
}
