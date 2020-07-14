import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  Toolbar,
  IconButton,
  AppBar,
  Typography,
  ButtonBase,
  Avatar,
} from "@material-ui/core";
import Badge from "@material-ui/core/Badge";

import logo from "./imgs/profile_pic.jpg";

// Icons
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Calendar from "@material-ui/icons/DateRange";

const useStyles = makeStyles((theme) => ({
  appBar: {
    flexGrow: 1,
    marginBottom: "20px",
  },
  title: {
    fontFamily: "Roboto",
    fontSize: "1rem",
    fontWeight: 400,
  },
  sectionOfIcons: {
    marginLeft: "auto",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    height: "32px",
    width: "32px",
  },
}));

function ApplicationBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar color="primary">
        <ButtonBase focusRipple aria-label="go to dashboard" color="inherit">
          <img className={classes.avatar} src={logo} alt="Logo" />
          <Typography className={classes.title}>MY MENTOR</Typography>
        </ButtonBase>

        <div className={classes.sectionOfIcons}>
          <IconButton aria-label="show new messages" color="inherit">
            <Badge badgeContent={0} color="secondary">
              {/*Replace badgeContent with notificaton counters*/}
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="show new notifications" color="inherit">
            <Badge badgeContent={0} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="check events" color="inherit">
            <Calendar />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default ApplicationBar;
