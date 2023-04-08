import React from "react";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div>
      <h1 class="aboutmemain">
        <dfn id="aboutme">About Me</dfn>
      </h1>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={0.5}>
            <item></item>
          </Grid>
          <Grid item xs={4}>
            <item>
              <div className="imageAbout"></div>
            </item>
          </Grid>
          <Grid item xs={1.5}>
            <item></item>
          </Grid>
          <Grid item xs={3}>
            <item>
              <asid>
                <pre class="detail">
                  <div>
                    Name - <b class="about1">A.M Vidusha Lakshan Predeep</b>
                  </div>

                  <div className="detais">
                    Age - <b class="about2">20</b>
                  </div>

                  <div className="detais1">
                    E-Mail - <b class="about3">vidushalakshan7890@gmail.com</b>
                  </div>

                  <div className="detais2">
                    Phone - <b class="about4">+94 718655056</b>
                  </div>

                  <div className="detais3">
                    Diploma - <b class="about5">Software Enginnering</b>
                  </div>

                  <div className="detais4">
                    Language- <b class="about6">English/Sinhala</b>
                  </div>
                </pre>
              </asid>
            </item>
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={8}>
            <item>
              <article>
                <pre class="aboutedu">
                  I'm a Software Engineering student in institute of java
                  Software Engineering (ijse) and currently completing second
                  semester.
                </pre>
              </article>
            </item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AboutMe;
