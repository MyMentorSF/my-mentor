import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
  MonthView,
  WeekView,
  DateNavigator,
  Toolbar,
  ViewSwitcher,
  AppointmentTooltip,
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";

const useStyles = makeStyles((theme) => ({
  calendar: {
    marginLeft: "auto",
    width: "60em",
    maxHeight: "50em",
    overflowY: "scroll",
  },
}));

const schedulerData = [
  {
    startDate: "2020-07-01T09:45",
    endDate: "2020-07-01T11:00",
    title: "Meeting",
  },
  {
    startDate: "2020-07-01T12:00",
    endDate: "2020-07-01T13:30",
    title: "Labs Appointment",
  },
];

function Calendar() {
  const classes = useStyles();
  const [scheduleData, updateSchedule] = useState(schedulerData);
  return (
    <Paper className={classes.calendar}>
      <Scheduler data={scheduleData} height="auto">
        <ViewState
          defaultCurrentDate={new Date()}
          defaultCurrentViewName="Month"
        />
        <MonthView />
        <DayView startDayHour={8} endDayHour={20} />
        <WeekView startDayHour={8} endDayHour={20} />

        <Toolbar />
        <Appointments />
        <AppointmentTooltip />
        <AppointmentForm />
        <DateNavigator />
        <ViewSwitcher />
      </Scheduler>
    </Paper>
  );
}

export default Calendar;
