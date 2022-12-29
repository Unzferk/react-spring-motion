import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
      >
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "black", opacity: 0.8 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Runz
            </Typography>
          </Toolbar>
        </AppBar>
      </motion.div>
    </Box>
  );
}
