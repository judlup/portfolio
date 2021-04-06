import "./Home.scss";
import Wave from "./Wave";
import {
  FRONTEND,
  FRONTEND_MOB_1,
  FRONTEND_MOB_2,
  BACKEND,
  BACKEND_MOB_1,
  BACKEND_MOB_2,
  DATABASE,
  DATABASE_MOB_1,
  DATABASE_MOB_2,
  ARCHITECTURE,
  ARCHITECTURE_MOB_1,
  ARCHITECTURE_MOB_2,
  SOFTSKILLS,
  SOFTSKILLS_MOB_1,
  SOFTSKILLS_MOB_2,
  OTHERS,
  OTHERS_MOB_1,
  OTHERS_MOB_2,
  testimonials,
  EXPERIENCE,
} from "./data";
import {
  Grid,
  Avatar,
  Button,
  Card,
  CardContent,
  Typography,
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
  FaBriefcase,
} from "react-icons/fa";

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
        <Grid item xs={12} md={12} className="skills-container">
          <Grid container>
            <Grid item xs={12} md={10} className="title-container-skills">
              <span className="title-skills">My Skills</span>
            </Grid>
            <Grid item xs={12} md={2} className="button-container-skills">
              <Button className="button-skills">My Experience</Button>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} className="skills-title">
              <h3>Front-End</h3>
            </Grid>
            <Grid item xs={6} sm={12} className="skills-body">
              {FRONTEND.map((fe) => (
                <div key={fe.name} className="skill-container">
                  <span>{fe.name}</span>
                </div>
              ))}
            </Grid>
            <Grid item xs={6} sm={12} className="skills-body-mob">
              {FRONTEND_MOB_1.map((fe) => (
                <div key={fe.name} className="skill-container">
                  <span>{fe.name}</span>
                </div>
              ))}
            </Grid>
            <Grid item xs={6} sm={12} className="skills-body-mob">
              {FRONTEND_MOB_2.map((fe) => (
                <div key={fe.name} className="skill-container">
                  <span>{fe.name}</span>
                </div>
              ))}
            </Grid>

            <Grid item xs={12} sm={12} className="skills-title">
              <h3>Back-End</h3>
            </Grid>
            <Grid item xs={12} sm={12} className="skills-body">
              {BACKEND.map((fe) => (
                <div key={fe.name} className="skill-container">
                  <span>{fe.name}</span>
                </div>
              ))}
            </Grid>
            <Grid item xs={6} sm={12} className="skills-body-mob">
              {BACKEND_MOB_1.map((fe) => (
                <div key={fe.name} className="skill-container">
                  <span>{fe.name}</span>
                </div>
              ))}
            </Grid>
            <Grid item xs={6} sm={12} className="skills-body-mob">
              {BACKEND_MOB_2.map((fe) => (
                <div key={fe.name} className="skill-container">
                  <span>{fe.name}</span>
                </div>
              ))}
            </Grid>

            <Grid item xs={12} sm={12} className="skills-title">
              <h3>Data Base</h3>
            </Grid>
            <Grid item xs={12} sm={12} className="skills-body">
              {DATABASE.map((fe) => (
                <div key={fe.name} className="skill-container">
                  <span>{fe.name}</span>
                </div>
              ))}
            </Grid>
            <Grid item xs={6} sm={12} className="skills-body-mob">
              {DATABASE_MOB_1.map((fe) => (
                <div key={fe.name} className="skill-container">
                  <span>{fe.name}</span>
                </div>
              ))}
            </Grid>
            <Grid item xs={6} sm={12} className="skills-body-mob">
              {DATABASE_MOB_2.map((fe) => (
                <div key={fe.name} className="skill-container">
                  <span>{fe.name}</span>
                </div>
              ))}
            </Grid>

            <Grid item xs={12} sm={12} className="skills-title">
              <h3>Architecture</h3>
            </Grid>
            <Grid item xs={12} sm={12} className="skills-body">
              {ARCHITECTURE.map((fe) => (
                <div key={fe.name} className="skill-container">
                  <span>{fe.name}</span>
                </div>
              ))}
            </Grid>
            <Grid item xs={6} sm={12} className="skills-body-mob">
              {ARCHITECTURE_MOB_1.map((fe) => (
                <div key={fe.name} className="skill-container">
                  <span>{fe.name}</span>
                </div>
              ))}
            </Grid>
            <Grid item xs={6} sm={12} className="skills-body-mob">
              {ARCHITECTURE_MOB_2.map((fe) => (
                <div key={fe.name} className="skill-container">
                  <span>{fe.name}</span>
                </div>
              ))}
            </Grid>

            <Grid item xs={12} sm={12} className="skills-title">
              <h3>Soft Skills</h3>
            </Grid>
            <Grid item xs={12} sm={12} className="skills-body">
              {SOFTSKILLS.map((fe) => (
                <div key={fe.name} className="skill-container">
                  <span>{fe.name}</span>
                </div>
              ))}
            </Grid>
            <Grid item xs={6} sm={12} className="skills-body-mob">
              {SOFTSKILLS_MOB_1.map((fe) => (
                <div key={fe.name} className="skill-container">
                  <span>{fe.name}</span>
                </div>
              ))}
            </Grid>
            <Grid item xs={6} sm={12} className="skills-body-mob">
              {SOFTSKILLS_MOB_2.map((fe) => (
                <div key={fe.name} className="skill-container">
                  <span>{fe.name}</span>
                </div>
              ))}
            </Grid>

            <Grid item xs={12} sm={12} className="skills-title">
              <h3>Others</h3>
            </Grid>
            <Grid item xs={12} sm={12} className="skills-body">
              {OTHERS.map((fe) => (
                <div key={fe.name} className="skill-container">
                  <span>{fe.name}</span>
                </div>
              ))}
            </Grid>
            <Grid item xs={6} sm={12} className="skills-body-mob">
              {OTHERS_MOB_1.map((fe) => (
                <div key={fe.name} className="skill-container">
                  <span>{fe.name}</span>
                </div>
              ))}
            </Grid>
            <Grid item xs={6} sm={12} className="skills-body-mob">
              {OTHERS_MOB_2.map((fe) => (
                <div key={fe.name} className="skill-container">
                  <span>{fe.name}</span>
                </div>
              ))}
            </Grid>
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
                  <div className="card-testimonial-date">
                    <small>{data.date}</small>
                  </div>
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

      <Wave colorTop="#1687a7" colorBottom="#d3e0ea" />

      <div className="experience">
        <Grid container className="experience-container">
          <Grid item xs={12} md={12}>
            <h3 className="experience-title">My Experience</h3>
          </Grid>
          {EXPERIENCE.map((exp) => (
            <Grid item xs={12} md={3} className="experience-body">
              <h3 className="experience-name">{exp.name}</h3>
              <div className="experience-logo-container">
                <img
                  className="experience-logo"
                  alt={exp.name}
                  src={exp.img}
                ></img>
              </div>
              <h5 className="experience-title-card">{exp.title}</h5>
              <small className="experience-duration">
                {exp.since} - {exp.to}
              </small>
            </Grid>
          ))}
          <Grid item md={12} xs={12}>
            <div className="experience-button-container">
              <Button
                variant="contained"
                color="primary"
                className="experience-button"
                startIcon={<FaBriefcase />}
                href=""
              >
                See More
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>

      <Wave colorTop="#d3e0ea" colorBottom="#333333" />
    </div>
  );
}

export default Home;
