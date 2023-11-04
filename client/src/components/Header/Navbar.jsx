"use client";

import { Box, Typography, useMediaQuery } from "@mui/material";
import styles from "./header.module.css";

import { LinkRoutes } from "./LinkRoute";
import MobileScreenNavbar from "./MobileScreenNav";
import Image from "next/image";

import Logo from "../../../public/logo/fslogo.png";
import { MobileAuthIcons } from "./AuthIcons";

export function Navbar() {
  const isMobileView = useMediaQuery("(max-width:1000px)");
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
