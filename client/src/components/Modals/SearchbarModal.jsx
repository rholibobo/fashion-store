import { Box } from "@mui/material";
import styles from "./modal.module.css";

import { Close, SearchOutlined } from "@mui/icons-material";

const SearchBarModal = ({ closeModal }) => {
  return (
    <div className={styles.modal_container}>
      <Close onClick={closeModal} className={styles.close_btn} />

      <form className={styles.form} action="">
        <div className={styles.search_form}>
          <input
            className={styles.search_text}
            type="text"
            placeholder="Search..."
          />
          <Box
            sx={{
              backgroundColor: "#CE5A67",
              width: {xs: "20%", md: "10%"},
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              borderRadius: "0 10px 10px 0",
            }}
          >
            <SearchOutlined sx={{ color: "#ffffff" }} />
          </Box>
        </div>
      </form>
    </div>
  );
};

export default SearchBarModal;
