import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import ProfileCard from "./dashboardComponents/ProfileCard";
import Calendar from "./dashboardComponents/Calendar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="row" spacing={3}>
        <Grid item>
          <Grid container direction="column" spacing={7}>
            <Grid item>
              <ProfileCard />
            </Grid>
            <Grid item>
              <Calendar />
            </Grid>
          </Grid>
        </Grid>
        {/* Insert list of mentors here into another Grid item */}
      </Grid>
    </div>
  );
}

export default Dashboard;
