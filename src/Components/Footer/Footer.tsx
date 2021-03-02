import React from "react";
import "./Footer.scss";

import { Grid, Avatar, Button } from "@material-ui/core";
import {
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="Footer">
        <Grid container>
          <Grid item xs={4} className="footer-info-container">
            <div className="avatar-footer-cont">
              <Avatar
                className="avatar-footer"
                src="https://pbs.twimg.com/profile_images/1229977160783482880/2PC2_PUH_400x400.jpg"
              ></Avatar>
            </div>
            <div className="footer-info">
              <h3>Julián Darío Luna Patiño</h3>
              <div>
                <small>Software developer with 9 years of experience.</small>
              </div>
              <div>
                <small>IoT Developer with 11 years of experience.</small>
              </div>
              <div>
                <small>+15 projects made</small>
              </div>
              <div>
                <small>+25 people in charge</small>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} className="footer-contact-container">
            <div className="footer-contact">
              <h3>Contact</h3>
              <div>
                <small>
                  <a href="whatsapp">+57 3175769114</a>
                </small>
              </div>
              <div>
                <small>
                  <a href="mailto:im@judlup.dev">im@judlup.dev</a>
                </small>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} className="footer-cta-container">
            <div className="footer-cta">
              <div>
                <Button variant="outlined" color="default">
                  Hire me!
                </Button>
              </div>
              <div>
                <Button variant="outlined" color="default">
                  Invite me to a coffee
                </Button>
              </div>
              <div className="footer-social">
                <FaLinkedinIn className="icons" />
                <FaTwitter className="icons" />
                <FaYoutube className="icons" />
                <FaInstagram className="icons" />
                <FaGithub className="icons" />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="footer-copyright">Copyright Judlup 2021</div>
    </>
  );
}

export default Footer;
