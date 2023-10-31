

import { Box, Button } from "@mui/material";
import Link from "next/link";

export default function AuthButtons() {
  return (
    <Box
      sx={{ width: "25%", display: "flex", justifyContent: "space-between" }}
    >
      <Link href="">
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            backgroundColor: "#CE5A67",
            color: "#ffffff",
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
            ":hover": { backgroundColor: "#f6f6f6" },
          }}
        >
          Sign up
        </Button>
      </Link>
    </Box>
  );
}
