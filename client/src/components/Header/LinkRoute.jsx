"use client";

import { Box, Button, Typography } from "@mui/material";
import styles from "./header.module.css";
import Link from "next/link";

import AuthButtons from "./AuthBtns";

import { usePathname } from "next/navigation";

export function LinkRoutes() {
  const pathname = usePathname();
  return (
    <div className={styles.links}>
      <Box
        sx={{ width: "50%", display: "flex", justifyContent: "space-between" }}
      >
        <Link href="#">
          <p className={pathname == "/" ? styles.active : styles.links_text}>Home</p>
        </Link>

        <Link href="#">
          <p className={pathname == "about-us" ? styles.active : styles.links_text}>About Us</p>
        </Link>

        <Link href="#">
          <p className={pathname == "#" ? styles.active : styles.links_text}>Page</p>
        </Link>

        <Link href="#">
          <p className={pathname == "contact-us" ? styles.active : styles.links_text}>Contact Us</p>
        </Link>
      </Box>

      <AuthButtons />
    </div>
  );
}
