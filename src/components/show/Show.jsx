import { Grid, Item } from "@mui/material";
import React from "react";
import Title from "./title/Title";

const Show = ({ parallax }) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={8}>
        <Title />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        mundo
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <div onClick={() => parallax.current.scrollTo(1)}>
          Learn more about what I do!
        </div>
      </Grid>
    </Grid>
  );
};

export default Show;

/* 
<div className='show-container'>
        <div className='show-section'></div>
        <div className='show-section'></div>
    </div>
*/
