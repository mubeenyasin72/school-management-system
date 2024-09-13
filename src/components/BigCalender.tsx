"use client";
import {useState} from "react"
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { calendarEvents } from "@/lib/data";

const localizer = momentLocalizer(moment);

const BigCalender = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);
    const handleOnChangeView = (newView: View) => {
        setView(newView);
    }
  return (
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        view= {view}
          style={{ height: "98%" }}
          onView={handleOnChangeView}
          min={new Date(2025, 10, 0, 8, 0)}
          max={new Date(2025, 10, 0, 20, 0)}
      />
  );
};

export default BigCalender;
