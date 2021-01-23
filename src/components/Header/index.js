import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { red } from '@material-ui/core/colors';
import { GrGooglePlay, GrAppleAppStore } from 'react-icons/gr';
import { PATHS } from '../../constant';
import "./styles.scss";

import whatsAppImage from "../../asset/whatsapp.svg";
import emailImage from "../../asset/message.svg";
import hamburger from "../../asset/hamburger.png";
import pixelLogo from "../../asset/logo.png";
import PixelMathLogo from "../pixelMathLogo";

const styles = () => ({
  root: {
    flexGrow: 1,
    width: '100%',
    color: 'rgb(134, 113, 95)'
  },
  navItem: {
    font: 'normal normal 600 16px/22px Poppins',
    letterSpacing: '0.25px',
    color: '#000000',
    cursor: 'pointer'
  },
  closeIcon: {
    letterSpacing: '0.25px',
    color: '#1D1D1D',
    fontWeight: 'bold'
  },
  number: {
    font: 'normal normal bold 14px/20px Poppins',
    letterSpacing: '0.25px',
  },
  listItem: {
    font: 'normal normal bold 18px/20px Poppins',
    letterSpacing: '0.32px',
    lineHeight: 2.5,
    marginLeft: -20
  },
  drawerFooter: {
    marginTop: 100,
    font: 'normal normal 600 14px/20px Poppins',
    letterSpacing: '0.25px',
    color: '#1D1D1D',
    fontWeight: 'bold'
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      color: "blue",
    }
  }
});

const Header = props => {
  const { classes } = props;
  const [states, setStates] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setStates({ ...states, [anchor]: open });
  };

  const list = anchor => (
    <div
      style={{
        height: '300vh',
        overflowY: 'none',
        maxHeight: '300vh',
        position: 'fixed',
        backgroundColor: '#FFFFFF',
        marginLeft: -250
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <Grid container xs={12} style={{ padding: '40px 40px 0 40px' }}>
        <Grid item xs={12} align="right">
          <Typography className={classes.closeIcon}>
            <CloseIcon
              fontSize="large"
              style={{ color: red[500] }}
            />
          </Typography>
        </Grid>
        <Grid container xs={12} >
          <ul style={{ listStyle: 'none' }}>
            <li className={classes.listItem}>
              <a className={classes.link} href={PATHS.HOME_PATH}>Features</a>
            </li>
            <li className={classes.listItem}>
              <a className={classes.link} href={PATHS.DOWNLOAD} >Download</a>
            </li>
            <li className={classes.listItem}>
              <a className={classes.link} href={PATHS.HOME_PATH}>Contest</a>
            </li>
            <li className={classes.listItem}>
              <a className={classes.link} href={PATHS.HOW_TO_USE}>How to Use</a>
            </li>
          </ul>
          <Grid item xs={12}>
            <a style={{ textDecoration: 'none' }} href="https://api.whatsapp.com/send?phone=+918280723657" >
              <Button
                style={{
                  backgroundColor: '#CCFFEA00',
                  borderRadius: '5px',
                  marginTop: '2rem',
                  textTransform: 'none',
                  width: '100%'
                }}>
                <img src={whatsAppImage} alt="whatsApp-icon" />
                <Typography
                  className={classes.number}
                  style={{ marginLeft: '5px', color: '#1D1D1D', fontSize: "small" }}>
                  Chat on Whatsapp
                </Typography>
              </Button>
            </a>
            <a style={{ textDecoration: 'none' }} href="mailto:hello@pixelmath.org" >
              <Button
                style={{
                  backgroundColor: '#CCFFEA00',
                  borderRadius: '5px',
                  marginTop: '2rem',
                  width: '100%',
                  marginLeft: -15,
                  textTransform: 'none',
                }}>
                <img
                  src={emailImage}
                  style={{ color: '#6C6C6C' }}
                  alt="email-icon"
                />
                <Typography
                  className={classes.number}
                  style={{
                    marginLeft: '10px',
                    textAlign: 'left',
                    color: '#1D1D1D'
                  }}>
                  Send Email
              </Typography>
              </Button>
            </a>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.drawerFooter}>
              Download PixelMath App
            </Typography>
            <a href="https://play.google.com/store/apps/details?id=com.rvjeet.pixelmath&hl=en">
              <GrGooglePlay
                style={{
                  color: 'white',
                  marginRight: '20px',
                  fontSize: '25px',
                  marginTop: '10px',
                  fill: 'white'
                }}
              />
            </a>
            <a href="https://apps.apple.com/in/app/pixelmath/id1507433163" >
              <GrAppleAppStore
                style={{
                  marginRight: '20px',
                  fontSize: '25px',
                  marginTop: '10px',
                  fill: 'black'
                }}
              />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <Grid container xs={12} className="pixelmath-header">
      <PixelMathLogo />
      <Grid
        container
        xs={11}
        align="right"
        className="MobileShow"
        style={{
          display: 'none',
          justifyContent: 'flex-end'
        }
        }>
        <Grid item xs={11} align="right">
          <img src={hamburger} alt="drawer-icon" />
          <div >
            {['right'].map(anchor => (
              <React.Fragment key={anchor}>
                <Button
                  onClick={toggleDrawer(anchor, true)}
                  style={{
                    position: 'absolute',
                    top: '11px',
                    right: '10px',
                    opacity: 0
                  }
                  }>
                  {anchor}
                </Button>
                <Drawer
                  anchor={anchor}
                  open={states[anchor]}
                  onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        align="center"
        id="headerWrapper"
        className="headerClass"
        style={{
          padding: '30px 0',
          backgroundColor: 'white',
          position: 'fixed',
          height: '80px',
          zIndex: 111,
        }}>
        <Grid container xs={2} md={3} lg={5}>
          <Grid item xs={6} style={{ zIndex: '1' }}>
            <div
              style={{
                width: '100px',
                display: 'flex',
                flexDirection: 'row'
              }}>
              <img width="40px" height="40px" src={pixelLogo} alt="logo"/>
              <h2 style={{ marginTop: -1 }}>PixelMath</h2>
            </div>
          </Grid>
        </Grid>
        <Grid container xs={10} md={8} lg={6} justify="space-around">
          <Grid container xs={10} justify="space-around">
            <Grid item>
              <Typography className={classes.navItem}>
                <a className={classes.link} href={PATHS.HOME_PATH}>Features</a>
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.navItem}>
                <a className={classes.link} href={PATHS.DOWNLOAD}>Download</a>
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.navItem}>
                <a className={classes.link} href={PATHS.HOME_PATH}>Contest</a>
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.navItem}>
                <a className={classes.link} href={PATHS.HOW_TO_USE}>How to Use</a>
              </Typography>
            </Grid>
            <Grid item>
              <a href="https://api.whatsapp.com/send?phone=+918280723657">
                <img src={whatsAppImage} alt="whatsApp-icon" />
              </a>
            </Grid>
            <Grid item>
              <a href="mailto:hello@pixelmath.org">
                <img src={emailImage} alt="email-icon" />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default withStyles(styles)(Header);






// function Header() {
//   return (
//     <div className="container">
//       <div className="row pixel-header">
//         <div className="col-sm-12 col-md-6 col-lg-6 align-content-center wow zoomIn animated">
//           <p>PixelMath Header</p>
//         </div>
//         <div className="col-sm-12 col-md-6 col-lg-6 align-content-center wow zoomIn animated">
//           <p>PixelMath Header</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header;