"use client";

import React, { useState } from "react";
import { Book } from "lucide-react";
import JournalEntry from "../components/JournalEntry";
import JournalList from "../components/JournalList";
import { Dumbbell } from "lucide-react";
import styles from "./jounal.module.css";

interface JournalEntry {
  id: number;
  content: string;
  date: string;
  time: string;
  mood: string;
}

export default function Journal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  const handleSubmit = (content: string, mood: string) => {
    const now = new Date();
    setEntries([
      {
        id: now.getTime(),
        content,
        date: now.toLocaleDateString("ja-JP"),
        time: now.toLocaleTimeString("ja-JP", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        mood,
      },
      ...entries,
    ]);
  };

  return (
    <div className={styles.journalContainer}>
      <header className={styles.journalHeader}>
        <div className={styles.journalHeaderContent}>
          <div className={styles.journalTitle}>
            <Dumbbell className={styles.journalIcon} />
            <h1 className={styles.journalTitleText}>Today Journal</h1>
          </div>
        </div>
      </header>
      <main className={styles.journalMain}>
        <JournalEntry onSubmit={handleSubmit} />
        <JournalList entries={entries} />
      </main>
    </div>
  );
}
