"use client";

import Link from "next/link";
import styles from "./header.module.css";

import { useState } from "react";

import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { MobileScreenDropdown } from "./Dropdown";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

/////////// MUI ICONS /////////////////////
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import InfoIcon from "@mui/icons-material/Info";
import AuthButtons from "./AuthBtns";
import AuthIcons from "./AuthIcons";

export default function MobileScreenNavbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflowY = "hidden";
    }
  };

  return (
    <div>
      {!open ? (
        <GiHamburgerMenu
          onClick={toggleDrawer}
          style={{
            color: "black",
            fontSize: "30px",
          }}
        />
      ) : (
        <MdClose
          onClick={() => setOpen(!open)}
          sx={{}}
          style={{ fontSize: "40px", color: "#1c1464" }}
        />
      )}

      <Box
        sx={{
          position: "fixed",
          top: "70px",
          left: "0",
          width: "100%",
          maxHeight: "90%",
          backgroundColor: "#FCF5ED",
          zIndex: 10,
          overflowY: "auto",
        }}
        open={open}
        onClose={toggleDrawer}
      >
        {open && (
          <Box>
            <List>
              <Link href="/" className={styles.link_tag}>
                <ListItemButton
                  sx={{ padding: "1rem " }}
                  className={styles.buttonHover}
                >
                  <ListItemIcon>
                    <HomeIcon className={styles.iconHover} />
                  </ListItemIcon>

                  <ListItemText primary="Home" />
                </ListItemButton>
              </Link>

              <Divider />
              {/* <br /> */}
              <Link href="/" className={styles.link_tag}>
                <ListItemButton
                  sx={{ padding: "1rem " }}
                  className={styles.buttonHover}
                >
                  <ListItemIcon>
                    <InfoIcon className={styles.iconHover} />
                  </ListItemIcon>

                  <ListItemText primary="About Us" />
                </ListItemButton>
              </Link>
              <Divider />
              {/* <br /> */}

              <MobileScreenDropdown />

              <Divider />
              {/* <br /> */}

              <Link href="/" className={styles.link_tag}>
                <ListItemButton
                  sx={{ padding: "1rem" }}
                  className={styles.buttonHover}
                >
                  <ListItemIcon>
                    <ContactPageIcon className={styles.iconHover} />
                  </ListItemIcon>

                  <ListItemText primary="Contact Us" />
                </ListItemButton>
              </Link>
              <Divider />
              <br />
              <br />
              {/* <br /> */}

              {/* Login Btn */}
              <Box
                sx={{
                  padding: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Link href="">
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor: "#CE5A67",
                      color: "#ffffff",
                      boxShadow: "none",
                      ":hover": { backgroundColor: "#CE5B67" },
                    }}
                  >
                    Login
                  </Button>
                </Link>
                <Link href="">
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      color: "#CE5A67",
                      backgroundColor: "#ffffff",
                      // boxShadow: "none",
                      ":hover": { backgroundColor: "#f6f6f6" },
                    }}
                  >
                    Sign up
                  </Button>
                </Link>
              </Box>
            </List>
          </Box>
        )}
      </Box>
    </div>
  );
}
