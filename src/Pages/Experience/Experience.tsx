import './Experience.scss';
import { JOBS } from './data';
import {
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Paper,
} from '@material-ui/core';

import { FaAddressBook, FaSuitcase, FaLinkedin } from 'react-icons/fa';

const Experience = () => {
  return (
    <div>
      <Grid container className='header'>
        <Grid item xs={12} md={12} className='header-container'>
          <div className='experience-segment'>
            <div className='experience-border'>
              <span className='experience-text'>My Experience</span>
            </div>
          </div>
          <div className='header-overlay'></div>
        </Grid>
      </Grid>
      <Grid container className='experience'>
        <Grid item xs={12} md={12}>
          <Button
            variant='contained'
            color='primary'
            className='btn-sec hire-me-btn'
            disableElevation
            startIcon={<FaAddressBook />}
          >
            Hire Me
          </Button>
          <Paper className='experience-container'>
            <Grid container style={{ marginTop: '1%' }}>
              {JOBS &&
                JOBS.map((job) => (
                  <>
                    <Grid item xs={12} md={4}>
                      {/* card */}
                      <Card className='experience-card'>
                        <CardContent>
                          <Typography variant='h6' component='h2'>
                            <FaSuitcase className='experience-icon' />{' '}
                            {job.title}
                          </Typography>
                          <Typography
                            color='textSecondary'
                            variant='overline'
                            gutterBottom
                          >
                            {job.company}
                          </Typography>
                          <hr className='divider' />
                          <Typography variant='body2' component='p'>
                            {job.description}
                          </Typography>
                          <br />
                          <Typography variant='body2' component='p'>
                            <strong>Tech Stack:</strong> {job.stack}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Typography
                            color='textSecondary'
                            variant='caption'
                            gutterBottom
                          >
                            {job.date}
                          </Typography>
                        </CardActions>
                      </Card>
                      {/* card */}
                    </Grid>
                  </>
                ))}
              <Grid item xs={12} md={12} className='roles'>
                <Typography
                  variant='caption'
                  component='h2'
                  className='roles-text'
                >
                  CEO | CTO | Technical Leader | Software Architect | Fullstack
                  Developer | IoT Developer
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Button
            variant='contained'
            color='primary'
            className='btn-sec see-more-btn'
            startIcon={<FaLinkedin />}
            href='https://www.linkedin.com/in/judlup/'
          >
            See More
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Experience;
