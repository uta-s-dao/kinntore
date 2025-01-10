"use client";

import Layout from "../layout";
import WorkoutModal from "../components/WorkoutModal";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import styles from "./page.module.css";
import { styleText } from "util";

export default function PlansPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [workouts, setWorkouts] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDateClick = (dateInfo) => {
    setSelectedDate(dateInfo.dateStr);
    setIsModalOpen(true);
  };

  const handleAddWorkout = (workout) => {
    setWorkouts((prevWorkouts) => ({
      ...prevWorkouts,
      [selectedDate]: workout,
    }));
    setIsModalOpen(false);
  };

  const events = Object.keys(workouts).map((date) => ({
    title: workouts[date],
    start: date,
    allDay: true,
  }));

  return (
    <Layout class={styles.calendar}>
      <h1>Workout Plans</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        events={events}
        dateClick={handleDateClick}
      />

      {isModalOpen && (
        <WorkoutModal
          date={selectedDate}
          onAddWorkout={handleAddWorkout} // 必ずこの行が存在することを確認
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </Layout>
  );
}
