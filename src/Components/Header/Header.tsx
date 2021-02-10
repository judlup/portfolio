import "./Header.scss";
import { AppBar, Toolbar, Avatar, Typography, Link } from "@material-ui/core";

const Header = () => {
  return (
    <div className="Header">
      <AppBar position="static" className="appBar">
        <Toolbar>
          <Avatar src="https://pbs.twimg.com/profile_images/1229977160783482880/2PC2_PUH_400x400.jpg"></Avatar>
          <Typography variant="h6">{" <Judlup />"}</Typography>
          <Typography>
            <Link className="header-navbar-links" href="#">
              Experience
            </Link>
            <Link className="header-navbar-links" href="#">
              Projects
            </Link>
            <Link className="header-navbar-links" href="#">
              Recognitions
            </Link>
            <Link className="header-navbar-links" href="#">
              Education
            </Link>
            <Link className="header-navbar-links" href="#">
              Services
            </Link>
            <Link className="header-navbar-links" href="#">
              Contact
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
