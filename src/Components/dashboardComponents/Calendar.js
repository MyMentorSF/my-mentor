import React from "react";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
  MonthView,
} from "@devexpress/dx-react-scheduler-material-ui";

const useStyles = makeStyles((theme) => ({
  calendar: {
    width: "50em",
    height: "25em",
  },
}));

const currentDate = "2018-11-01";
const schedulerData = [
  {
    startDate: "2018-11-01T09:45",
    endDate: "2018-11-01T11:00",
    title: "Meeting",
  },
  {
    startDate: "2018-11-01T12:00",
    endDate: "2018-11-01T13:30",
    title: "Go to a gym",
  },
];

function Calendar() {
  const classes = useStyles();
  return (
    <Paper className={classes.calendar}>
      <Scheduler data={schedulerData}>
        <ViewState currentDate={currentDate} />
        <MonthView />
        <Appointments />
      </Scheduler>
    </Paper>
  );
}

export default Calendar;
