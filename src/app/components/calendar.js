import styles from "./calendar.module.css";

export default function Calendar({ onDateClick, workouts }) {
  const daysInMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
  ).getDay();

  // 空の日付を含めて月全体のカレンダーを生成
  const calendarDays = Array.from(
    { length: firstDayOfMonth + daysInMonth },
    (_, index) => {
      const date =
        index >= firstDayOfMonth ? index - firstDayOfMonth + 1 : null;
      return date;
    }
  );

  return (
    <div className={styles.calendar}>
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
        <div key={day} className={styles.dayHeader}>
          {day}
        </div>
      ))}
      {calendarDays.map((date, index) => (
        <div
          key={index}
          className={styles.dayCell}
          onClick={date ? () => onDateClick(date) : null}
        >
          <span>{date || ""}</span>
          <p>{date && workouts[date]}</p>
        </div>
      ))}
    </div>
  );
}
