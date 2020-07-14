import React from "react";
import { makeStyles } from "@material-ui/core";
import { Toolbar, IconButton, AppBar, Typography } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";

// Icons
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Calendar from "@material-ui/icons/DateRange";

const useStyles = makeStyles((theme) => ({
  appBar: {
    flexGrow: 1,
    background: "#8c77e6",
  },
  sectionOfIcons: {
    marginLeft: "auto",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

function ApplicationBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography variant="h5">My Mentor</Typography>

        <div className={classes.sectionOfIcons}>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={0} color="secondary">
              {/*Replace badgeContent with notificaton counters*/}
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="show 17 new notifications" color="inherit">
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
