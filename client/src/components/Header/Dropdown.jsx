import {
  Box,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styles from "./header.module.css";
import {
  ArrowDropDown,
  ArrowDropUp,
  ArrowRight,
  ArrowUpward,
  Pages,
} from "@mui/icons-material";
import { useState } from "react";

export const Dropdown = () => {
  return (
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
          <Box sx={{ display: "flex", alignItems: "center", gap: "45px" }}>
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
  );
};

export const MobileScreenDropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openProductDropdown, setOpenProductDropdown] = useState(false);

  const showDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };
  const showProductDropdown = () => {
    setOpenProductDropdown((prev) => !prev);
  };

  return (
    <Box className={styles.link_tag}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingRight: "10px",
        }}
      >
        <ListItemButton sx={{padding: "1rem"}}
          onClick={() => {
            showDropdown();
            setOpenProductDropdown(false);
          }}
          className={styles.buttonHover}
        >
          <ListItemIcon>
            <Pages className={styles.iconHover} />
          </ListItemIcon>

          <ListItemText primary="Pages" />
        </ListItemButton>

        {!openDropdown ? <ArrowRight /> : <ArrowDropUp />}
      </Box>

      {openDropdown && (
        <Box sx={{ marginLeft: "70px" }}>
          {/* Products Page Dropdown */}
          <Box>
      <Divider />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingRight: "10px",
                
              }}
            >
              <ListItemButton sx={{padding: "1rem"}} onClick={showProductDropdown}>
                <ListItemText primary="Products Page" />
              </ListItemButton>
              {!openProductDropdown ? <ArrowRight /> : <ArrowDropUp />}
            </Box>
            <Divider />

            {openProductDropdown && (
              <Box sx={{ marginLeft: "20px" }}>
                <Box >
                  <ListItemButton sx={{padding: "1rem"}}>
                    <ListItemText primary="Men's Wear" />
                  </ListItemButton>
                </Box>
                <Divider />
                <Box >
                  <ListItemButton sx={{padding: "1rem"}}>
                    <ListItemText primary="Women's Wear" />
                  </ListItemButton>
                </Box>
                <Divider />
              </Box>
            )}
          </Box>
          <Box >
            <ListItemButton sx={{padding: "1rem"}}>
              <ListItemText primary="Shops Page" />
            </ListItemButton>
          </Box>
          <Divider />
        </Box>
      )}
    </Box>
  );
};

// export {Dropdown, MobileScreenDropdown}
