import React from "react";
import "../styles/Home.css";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";



const Home = () => {
  return (
    // <div className="background">
    //   <article>
    //     <pre class="hometext">
    //       <div class="text1">Hello, I'm</div>
    //       <div class="text2">Vidusha Lakshan</div>
    //       <div class="text3">And I'm a</div>
    //       <div class="text4">Software Developer</div>
    //     </pre>
    //   </article>

    // </div>
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  className="background">
        <Grid item xs={7}>
          <item>
            <pre class="hometext">
              <div class="text1">Hello, I'm</div>
              <div class="text2">Vidusha Lakshan</div>
              <div class="text3">And I'm a</div>
              <div class="text4">Software Developer</div>
            </pre>
          </item>
        </Grid>
        <Grid item xs={5}>
          <item>
            <div className="image">
            </div>
          </item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
