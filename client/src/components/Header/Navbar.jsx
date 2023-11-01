import { Box, Typography } from "@mui/material";
import styles from "./header.module.css";

import { LinkRoutes } from "./LinkRoute";
import Image from "next/image";

import Logo from "../../../public/logo/fslogo.png";

export function Navbar() {
  return (
    <main>
      <header className={styles.header}>
        <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <Image
            src={Logo}
            alt="logo"
            style={{
              width: "20%",
              height: "auto",
            }}
          />
          <Typography gutterBottom>Logo</Typography>
        </Box>

        <LinkRoutes />
      </header>
    </main>
  );
}
