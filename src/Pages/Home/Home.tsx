import React from "react";
import "./Home.scss";
import { Grid, Typography, Avatar, Button } from "@material-ui/core";
import {
  FaCloudDownloadAlt,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";

function Home() {
  return (
    <div className="Home">
      <Grid container className="section-card">
        <Grid item xs={10} className="card-home">
          <Grid container>
            <Grid item xs={4} className="left-card-home">
              <Avatar
                className="avatar-card"
                src="https://pbs.twimg.com/profile_images/1229977160783482880/2PC2_PUH_400x400.jpg"
              ></Avatar>
            </Grid>
            <Grid item xs={8} className="right-card-home">
              <Grid container>
                <Grid item xs={12}>
                  <img
                    className="qr-rigth-card-home"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                  ></img>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h2">Julián Darío Luna Patiño</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" style={{ letterSpacing: "5px" }}>
                    Software Architect & IoT Developer
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    Telecommunications Engineer
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5">im@judlup.dev</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5">+57 3175769114</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5">Social Media</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5">
                    <Button
                      variant="contained"
                      color="primary"
                      // className={classes.button}
                      startIcon={<FaCloudDownloadAlt />}
                    >
                      Resume
                    </Button>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <FaLinkedinIn className="icons" />
                  <FaTwitter className="icons" />
                  <FaYoutube className="icons" />
                  <FaInstagram className="icons" />
                  <FaGithub className="icons" />
                  <FaStackOverflow className="icons" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid container spacing={3} id="card">
        <div className="card-paper">
          <Grid item xs={12}>
            <Avatar
              className="avatar-card"
              src="https://pbs.twimg.com/profile_images/1229977160783482880/2PC2_PUH_400x400.jpg"
            ></Avatar>
          </Grid>
          <Grid item xs={6}>
            <h1>Julián Darío Luna Patiño</h1>
            <small>Software Architect & IoT Developer</small>
            <span>Telecommunications Enginner </span>
          </Grid>
        </div>
      </Grid> */}
    </div>
  );
}

export default Home;