import "./Home.scss";
import Wave from "./Wave";
import {
  Grid,
  Avatar,
  Button,
  Card,
  CardContent,
  Typography,
  Link,
} from "@material-ui/core";
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
  FaLinkedin,
} from "react-icons/fa";
import SkillBar from "react-skillbars";
import edgarAcosta from "../../Assets/images/home/edgar-acosta.jpg";
import ximenaHoffman from "../../Assets/images/home/ximena-hoffman.jpg";
import jonHall from "../../Assets/images/home/jon-hall.jpg";
import juanHenao from "../../Assets/images/home/juan-henao.jpg";
import martinRodriguez from "../../Assets/images/home/martin-rodriguez.jpg";
import carlosNieto from "../../Assets/images/home/carlos-nieto.jpg";

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

const testimonials = [
  {
    id: 1,
    img: ximenaHoffman,
    name: "Ximena Hoffman",
    title: "HR & Administration Manager",
    company: "NEC de Colombia",
    description:
      "I had the opportunity to work with Julian at NEC and he always showed himself to be a natural leader, with an excellent service attitude at all times. He is the type of professional who helps to build as a team and find different ways to achieve the necessary results.",
    date: "20/Jan/2021",
  },
  {
    id: 2,
    img: edgarAcosta,
    name: "Edgar E. Acosta T.",
    title: "Delivery & Operations Head",
    company: "NEC de Colombia",
    description:
      "I had the good opportunity to get to know Julian at his period working for NEC. His work was of very positive and opportune impact for the projects my team was developing.I totally recommend Julian as an excellent resource for different kind of projects. Julie is a very creative person with a positive and 'Can Do' attitude all the time.",
    date: "26/Feb/2021",
  },
  {
    id: 3,
    img: jonHall,
    name: 'Jon "Maddong" Hall',
    title: "Board Chair",
    company: "Linux Professional Institute",
    description:
      "I have known Julian since he was in high school. He created a home automation project where he could control a whole model house from his android tablet, and it was extremely impressive. I gave him a Raspberry Pi to work into his model, which he did in a few weeks.",
    date: "19/Jan/2021",
  },
  {
    id: 4,
    img: juanHenao,
    name: "Juan Diego Henao",
    title: "Junior Developer",
    company: "Everis",
    description:
      "Julian Dario was a very important person for my work development, showing excellent leadership and broad knowledge in his area. Without much help from others, he was able to deal with all the obstacles that stood in his way, with great organization and quality. He is a team person, who is always predisposed to help and who, hardly, has a bad answer for others.",
    date: "18/Jan/2021",
  },
  {
    id: 5,
    img: martinRodriguez,
    name: "Martín Rodríguez",
    title: "Senior Fullstack Developer",
    company: "",
    description:
      "Julián has all the skills to lead development teams, a very responsible and attentive person, both with the work team and with the client.",
    date: "17/Jan/2021",
  },
  // {
  //   id: 6,
  //   img: carlosNieto,
  //   name: "Carlos Nieto",
  //   title: "Software Developer",
  //   company: "NEC de Colombia",
  //   description:
  //     "Julián Luna is an excellent development leader, with excellent knowledge bases, organized, charismatic, proactive and very self-teaching, it was a lot of learning to work with him.",
  //   date: "18/Jan/2021",
  // },
];

function Home() {
  return (
    <div className="Home">
      <Grid container className="section-card">
        <Grid item xs={12} md={10} className="card-home">
          <Grid container>
            <Grid item xs={12} md={4} className="left-card-home">
              <Avatar
                className="avatar-card"
                src="https://pbs.twimg.com/profile_images/1229977160783482880/2PC2_PUH_400x400.jpg"
              ></Avatar>
            </Grid>
            <Grid item xs={12} md={8} className="right-card-home">
              <Grid container>
                <Grid item xs={12} className="qr-image-container-home-card">
                  <img
                    alt="QR"
                    className="qr-rigth-card-home"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                  ></img>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography variant="h2" className="name-home-card">
                    Julián Darío Luna Patiño
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography variant="h5" className="job-title-home-card">
                    Software Architect & IoT Developer
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h5" className="grade-title-home-card">
                    Telecommunications Engineer
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} className="contact-home-card">
                  <Typography variant="subtitle1">
                    <FaEnvelope /> im@judlup.dev | <FaWhatsapp /> +57 3175769114
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  className="container-social-home-card"
                >
                  <FaLinkedinIn className="icons" />
                  <FaTwitter className="icons" />
                  <FaYoutube className="icons" />
                  <FaInstagram className="icons" />
                  <FaGithub className="icons" />
                  <FaStackOverflow className="icons" />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
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
        <Grid item xs={12} md={6} className="left-side-about-me">
          <div className="left-side-overlay"></div>
        </Grid>
        <Grid item xs={12} md={6} className="right-side-about-me">
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

      <Wave colorTop="#4c99af" colorBottom="#1687a7" />

      <Grid container className="skills">
        <Grid item xs={6} md={12} className="skills-container">
          <Grid container>
            <Grid item xs={12} md={10} className="title-container-skills">
              <span className="title-skills">My Skills</span>
            </Grid>
            <Grid item xs={6} md={2} className="button-container-skills">
              <Button className="button-skills">My Experience</Button>
            </Grid>
          </Grid>
          <Grid container>
            {/* <Grid item xs={12} sm={3} className="skills-body">
              <SkillBar skills={SKILLS} colors={colors} height={35} />
            </Grid>
            <Grid item xs={12} sm={3} className="skills-body">
              <SkillBar skills={SKILLS2} colors={colors} height={35} />
            </Grid>
            <Grid item xs={12} sm={3} className="skills-body">
              <SkillBar skills={SKILLS3} colors={colors} height={35} />
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>

      <Wave colorTop="#1687a7" colorBottom="#4c99af" />

      <Grid container className="phrase">
        <Grid item xs={12} md={12} className="phrase-container">
          <div className="phrase-segment">
            <div className="phrase-border">
              <span className="phrase-text">
                In each project I give my knowledge and experience so that the
                results are as expected.
              </span>
            </div>
            <div className="phrase-button-container">
              <Button
                variant="contained"
                color="primary"
                className="phrase-button"
                startIcon={<FaAddressBook />}
              >
                Projects in which I have participated
              </Button>
            </div>
          </div>
          <div className="phrase-overlay"></div>
        </Grid>
      </Grid>

      <Wave colorTop="#4c99af" colorBottom="#1687a7" />

      <Grid container className="testimonial">
        <Grid item xs={12} md={12} className="testimonial-header">
          <div className="testimonial-title-container">
            <h1 className="testimonial-title">Testimonials</h1>
          </div>
        </Grid>

        {testimonials.map((data) => {
          return (
            <Grid
              key={data.id}
              item
              md={2}
              xs={12}
              className="testimonial-container"
            >
              <Card className="card-testimonial">
                <CardContent>
                  <div className="card-testimonial-img-container">
                    <Avatar
                      className="card-testimonial-img"
                      alt="Remy Sharp"
                      src={data.img}
                    />
                  </div>
                  <br />
                  <Typography className="card-testimonial-name">
                    {data.name}
                  </Typography>
                  <Typography className="card-testimonial-title">
                    {data.title}
                  </Typography>
                  <Typography className="card-testimonial-company">
                    {data.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="card-description"
                  >
                    {data.description}
                  </Typography>
                  <br />
                  <small className="card-testimonial-date">{data.date}</small>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
        <Grid item md={12} xs={12} className="testimonial-container">
          <div className="testimonial-button-container">
            <Button
              variant="contained"
              color="primary"
              className="testimonial-button"
              startIcon={<FaLinkedin />}
              href="https://www.linkedin.com/in/judlup/"
            >
              See More
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
