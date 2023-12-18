import { Box, Button, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function AuthButtons() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{ width: "25%", display: "flex", justifyContent: "space-between" }}
    >
      <Button
        variant="contained"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
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
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link href="/login/client">
          <MenuItem sx={{ fontSize: "0.85rem" }} onClick={handleClose}>
            As Client
          </MenuItem>
        </Link>
        <Link href="/login/designer">
          <MenuItem sx={{ fontSize: "0.85rem" }} onClick={handleClose}>
            As Designer
          </MenuItem>
        </Link>
      </Menu>

      <Button
        variant="contained"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
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
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link href="/signup/client">
          <MenuItem sx={{ fontSize: "0.85rem" }} onClick={handleClose}>
            As Client
          </MenuItem>
        </Link>
        <Link href="/signup/designer">
          <MenuItem sx={{ fontSize: "0.85rem" }} onClick={handleClose}>
            As Designer
          </MenuItem>
        </Link>
      </Menu>
    </Box>
  );
}
