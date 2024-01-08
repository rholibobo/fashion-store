"use client";

import { Box, Button, Divider, Typography } from "@mui/material";
import { IoMdArrowDropdown } from "react-icons/io";
import { ArrowDropDown, ArrowDropUp, ArrowRight } from "@mui/icons-material";
import styles from "./header.module.css";
import Link from "next/link";

import AuthButtons from "./AuthBtns";
import {AuthIcons} from "./AuthIcons";
import { Dropdown } from "./Dropdown";

import { usePathname } from "next/navigation";
import { useState } from "react";

export function LinkRoutes() {
  const user = true;

  const pathname = usePathname();
  return (
    
      <div className="w-[70%] flex justify-between items-center">
        <Box
          
          className="w-[60%] flex justify-between"
        >
          <Link href="/">
            <p className={pathname == "/" ? styles.active : styles.links_text}>
              Home
            </p>
          </Link>

          <Link href="/about-us">
            <p
              className={
                pathname == "/about-us" ? styles.active : styles.links_text
              }
            >
              About Us
            </p>
          </Link>

              {/* Dropdowns */}
              <Dropdown />

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
      
      {user ? <AuthIcons /> : <AuthButtons />}
    </div>
  );
}
