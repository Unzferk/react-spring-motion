import React from "react";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import "./styles.css";
const Title = () => {
  return (
    <>
      <div className="title-container">
        <Grid item xs={0} sm={0} md={4}></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ x: 3400 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            style={{ fontSize: 80 }}
          >
            Welcome.
          </motion.div>
          <motion.div
            initial={{ x: -1400 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            style={{ fontSize: 32 }}
          >
            I'm Unzueta Fernando, I'm a software developer based on javascript
            technologies and microservice architectures. I have made many types
            of frontend and backend applications.
          </motion.div>
        </Grid>
      </div>
    </>
  );
};

export default Title;
