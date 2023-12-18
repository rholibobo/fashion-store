"use client";

import { Box, Typography, useMediaQuery } from "@mui/material";
import styles from "./header.module.css";

import { LinkRoutes } from "./LinkRoute";
import MobileScreenNavbar from "./MobileScreenNav";
import Image from "next/image";

import Logo from "../../../public/logo/fslogo.png";
import { MobileAuthIcons } from "./AuthIcons";

import { usePathname } from "next/navigation";

export function Navbar() {
  const isMobileView = useMediaQuery("(max-width:1000px)");
  const pathname = usePathname();

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
      <main>
        <header className={styles.header}>
          <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <Image src={Logo} alt="logo" className={styles.logo} />
            <Typography gutterBottom>Logo</Typography>

            {isMobileView && (
              <Box sx={{ marginLeft: "5px", width: "60%" }}>
                <MobileAuthIcons />
              </Box>
            )}
          </Box>

          {isMobileView ? <MobileScreenNavbar /> : <LinkRoutes />}
        </header>
      </main>
    );
  }
}
