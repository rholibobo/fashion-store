"use client";

import { Box, Button, Divider, Typography } from "@mui/material";
import { IoMdArrowDropdown } from "react-icons/io";
import { ArrowDropDown, ArrowDropUp, ArrowRight } from "@mui/icons-material";
import styles from "./header.module.css";
import Link from "next/link";

import AuthButtons from "./AuthBtns";

import { usePathname } from "next/navigation";
import { useState } from "react";

export function LinkRoutes() {
  // const [dropdown, setDropdown] = useState(false);

  // const changeDropdown = () => {
  //   setDropdown((prev) => !prev)
  // }
  // const flexDropdown = () => {
  //   setDropdown(false)
  // }

  const pathname = usePathname();
  return (
    
      <div className={styles.links}>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link href="#">
            <p className={pathname == "/" ? styles.active : styles.links_text}>
              Home
            </p>
          </Link>

          <Link href="#">
            <p
              className={
                pathname == "about-us" ? styles.active : styles.links_text
              }
            >
              About Us
            </p>
          </Link>

          <div className={styles.pages}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p className={styles.links_text}>Pages</p>
              <ArrowDropDown />
            </Box>

            <div className={styles.pages_dropdown}>
              <div className={styles.pages_products}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "45px" }}
                >
                  <p className={styles.links_pages}>Products Page</p>
                  <ArrowRight />
                </Box>

                <div className={styles.products_dropdown}>
                  <p className={styles.links_pages}>Men's Wears</p>
                  <Divider />
                  <p className={styles.links_pages}>Women's Wears</p>
                </div>
              </div>

              <Divider />
              <p className={styles.links_pages}>Shops Page</p>
            </div>
          </div>

          <Link href="#">
            <p
              className={
                pathname == "contact-us" ? styles.active : styles.links_text
              }
            >
              Contact Us
            </p>
          </Link>
        </Box>
      
      <AuthButtons />
    </div>
  );
}
