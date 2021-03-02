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
  FaEnvelope,
  FaWhatsapp,
  FaAddressBook,
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
                <Grid item xs={12} className="qr-image-container-home-card">
                  <img
                    alt="QR"
                    className="qr-rigth-card-home"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                  ></img>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h2" className="name-home-card">
                    Julián Darío Luna Patiño
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" className="job-title-home-card">
                    Software Architect & IoT Developer
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5">
                    Telecommunications Engineer
                  </Typography>
                </Grid>
                <Grid item xs={6} className="contact-home-card">
                  <Typography variant="subtitle1">
                    <FaEnvelope /> im@judlup.dev | <FaWhatsapp /> +57 3175769114
                  </Typography>
                </Grid>
                <Grid item xs={6} className="container-social-home-card">
                  <FaLinkedinIn className="icons" />
                  <FaTwitter className="icons" />
                  <FaYoutube className="icons" />
                  <FaInstagram className="icons" />
                  <FaGithub className="icons" />
                  <FaStackOverflow className="icons" />
                </Grid>
                <Grid
                  item
                  xs={6}
                  className="container-download-resume-home-card"
                >
                  <Typography variant="h5">
                    <Button
                      variant="contained"
                      color="primary"
                      className="download-resume-home-card"
                      startIcon={<FaCloudDownloadAlt />}
                    >
                      Resume
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="about-me">
        <Grid item xs={6} className="left-side-about-me">
          <div className="left-side-overlay"></div>
        </Grid>
        <Grid item xs={6} className="right-side-about-me">
          <Typography variant="h2" className="title-about-me">
            Hi, it's about me
          </Typography>
          <div className="content-container">
            <Typography variant="body2" className="content-about-me">
              I’m an organized person who meets the tasks and requirements that
              I am required, capable of leading and solving problems,
              responsible and compliant of homework, with great facility to
              absorb theoretical knowledge and practical (autodidact), I have
              facilities for communication and internal customer service and
              external, I easily join a work team and I am passionate about
              leadership and challenges, lover of my little daughter Nikol
              Daniela.
            </Typography>
            <Typography variant="body2" className="content-about-me">
              I'm a entrepreneur person, at 2013 I started Domoteco about
              development of home automation oriented to internet of things, at
              2013 I won a seed capital from SENA Fondo Emprender, at 2018 this
              capital seed was condoned, with Domoteco I developed software,
              hardware, communication protocol, app mobile, prototypes for
              clients as Pelikan (Mexico), for all It I have expience leading
              teams, innovating and generating new solutions for improve and get
              new horizonts to improve day to day my work.
            </Typography>
            <div className="button-projects-container">
              <Button
                variant="contained"
                color="primary"
                className="button-projects-about-me"
                startIcon={<FaAddressBook />}
              >
                Projects
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
