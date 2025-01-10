"use client";
import React, { useState } from "react";
import { Dumbbell, Plus, Trophy } from "lucide-react";
import { ProfileCard } from "../components/ProfileCard";
import { WorkoutForm } from "../components/WorkoutForm";
import { WorkoutList } from "../components/WorkoutList";
import styles from "./account.module.css";

interface WorkoutLog {
  id: number;
  exercise: string;
  weight: number;
  reps: number;
  date: string;
}

function App() {
  const [logs, setLogs] = useState<WorkoutLog[]>([]);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (exercise: string, weight: number, reps: number) => {
    const newLog: WorkoutLog = {
      id: Date.now(),
      exercise,
      weight,
      reps,
      date: new Date().toLocaleDateString("ja-JP"),
    };
    setLogs([newLog, ...logs]);
    setShowForm(false);
  };

  const trophyCount = 30;

  return (
    <div className={styles["workout-app-container"]}>
      <div className={styles["workout-app-wrapper"]}>
        <h2>uta-s-dao</h2>
        <div className={styles["workout-card"]}>
          <div className={styles["workout-header"]}>
            <h2 className={styles["workout-title"]}>
              <Trophy className={styles["workout-icon"]} />
              {trophyCount}
            </h2>
            <button
              onClick={() => setShowForm(true)}
              className={styles["workout-add-button"]}
            >
              <Plus size={18} />
              追加
            </button>
          </div>

          <WorkoutList logs={logs} />

          {showForm && (
            <WorkoutForm
              onClose={() => setShowForm(false)}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
