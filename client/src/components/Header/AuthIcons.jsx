// import React from "react";

import {
  SearchOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge, Box, IconButton } from "@mui/material";

import SearchBarModal from "../Modals/SearchbarModal";
import { useState } from "react";

export const AuthIcons = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const openModal = () => {
    setDisplayModal((prev) => !prev)
  }
  const closeModal = () => {
    setDisplayModal(false)
  }

  return (
    <Box
      sx={{ width: "20%", display: "flex", justifyContent: "space-between",  alignItems: "center"  }}
    >
      <IconButton sx={{ color: "#1F1717" }} onClick={openModal}>
        <SearchOutlined sx={{ fontSize: 25 }} />
      </IconButton>
      {displayModal && <SearchBarModal closeModal={closeModal}/>}
      <IconButton sx={{ color: "#1F1717" }}>
        <PersonOutlined sx={{ fontSize: 25 }} />
      </IconButton>
      <IconButton sx={{ color: "#1F1717" }}>
        <Badge badgeContent={1} color="info">
          <ShoppingCartOutlined sx={{ fontSize: 25, color: "#1F1717" }} />
        </Badge>
      </IconButton>
    </Box>
  );
};

export const MobileAuthIcons = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const openModal = () => {
    setDisplayModal((prev) => !prev)
  }
  const closeModal = () => {
    setDisplayModal(false)
  }
  return (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}
    >
      <IconButton sx={{ color: "#1F1717" }} onClick={openModal}>
        <SearchOutlined sx={{ fontSize: 30 }} />
      </IconButton>
      {displayModal && <SearchBarModal closeModal={closeModal}/>}
      <IconButton sx={{ color: "#1F1717" }}>
        <PersonOutlined sx={{ fontSize: 30 }} />
      </IconButton>
      <IconButton sx={{ color: "#1F1717" }}>
        <Badge badgeContent={1} color="info">
          <ShoppingCartOutlined sx={{ fontSize: 30, color: "#1F1717" }} />
        </Badge>
      </IconButton>
    </Box>
  );
};

// export default AuthIcons;
