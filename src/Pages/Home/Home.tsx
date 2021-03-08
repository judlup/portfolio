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
import SkillBar from "react-skillbars";

const SKILLS = [
  {
    type: "Leadership",
    level: 100,
  },
  {
    type: "IoT",
    level: 100,
  },
  {
    type: "PHP",
    level: 100,
  },
  {
    type: "Git",
    level: 100,
  },
  {
    type: "B. Model",
    level: 100,
  },
  {
    type: "HTML 5",
    level: 100,
  },
  {
    type: "Bootstrap",
    level: 100,
  },
  {
    type: "Linux",
    level: 100,
  },
  {
    type: "Angular",
    level: 90,
  },
  {
    type: "Javascript",
    level: 90,
  },
  {
    type: "TypeScript",
    level: 90,
  },
];

const SKILLS2 = [
  {
    type: "Node.js",
    level: 90,
  },
  {
    type: "Ionic",
    level: 90,
  },
  {
    type: "MySql",
    level: 90,
  },
  {
    type: "CSS - Sass",
    level: 90,
  },
  {
    type: "Laravel",
    level: 80,
  },
  {
    type: "React",
    level: 80,
  },
  {
    type: "AWS",
    level: 80,
  },
  {
    type: "Cisco",
    level: 80,
  },
  {
    type: "VoIP",
    level: 80,
  },
  {
    type: "Scrum",
    level: 80,
  },
  {
    type: "Mongo DB",
    level: 70,
  },
];

const SKILLS3 = [
  {
    type: "Python",
    level: 70,
  },
  {
    type: ".Net Core",
    level: 70,
  },
  {
    type: "PayU",
    level: 70,
  },
  {
    type: "CI/CD",
    level: 70,
  },
  {
    type: "Docker",
    level: 70,
  },
  {
    type: "English",
    level: 65,
  },
  {
    type: "React N.",
    level: 60,
  },
  {
    type: "Android",
    level: 60,
  },
  {
    type: "Figma",
    level: 60,
  },
  {
    type: "Elastic S.",
    level: 60,
  },
  {
    type: "ML",
    level: 30,
  },
];

const colors = {
  bar: "#d3e0ea",
  text: "#f6f5f5",
  title: {
    text: "#f6f5f5",
    background: "#333333",
  },
};
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
      <div className="custom-shape-divider-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <Grid container className="skills">
        <div className="bg-overlay"></div>
        <Grid item xs={12} className="skills-container">
          <Grid container>
            <Grid item xs={10} className="title-container-skills">
              <span className="title-skills">My Skills</span>
            </Grid>
            <Grid item xs={2} className="button-container-skills">
              <Button className="button-skills">My Experience</Button>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={3} className="skills-body">
              <SkillBar skills={SKILLS} colors={colors} height={35} />
            </Grid>
            <Grid item xs={12} sm={3} className="skills-body">
              <SkillBar skills={SKILLS2} colors={colors} height={35} />
            </Grid>
            <Grid item xs={12} sm={3} className="skills-body">
              <SkillBar skills={SKILLS3} colors={colors} height={35} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
