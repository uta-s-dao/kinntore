// WorkoutModal.js
import { useState, useEffect } from "react";
import Layout from "../layout"; // Layout.js の相対パスに合わせて変更

function WorkoutModal({ date, onAddWorkout, onClose }) {
  const [workout, setWorkout] = useState("");

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [onClose]);

  const handleSubmit = () => {
    if (onAddWorkout) {
      onAddWorkout(workout);
      setWorkout("");
      onClose();
    } else {
      console.error("Error: onAddWorkout is not defined");
    }
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>{date} の筋トレ内容</h2>
        <textarea
          value={workout}
          onChange={(e) => setWorkout(e.target.value)}
          placeholder='筋トレ内容を入力してください'
          style={{ width: "100%", height: "100px" }}
        />
        <button onClick={handleSubmit}>保存</button>
        <button onClick={onClose}>閉じる</button>
      </div>
    </div>
  );
}

export default WorkoutModal;

// スタイル調整
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  pointerEvents: "none", // オーバーレイ自体はクリックを無視する
};

const modalStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  width: "300px",
  maxWidth: "90%",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  zIndex: 1001,
  pointerEvents: "auto", // モーダル内部はクリック可能
};
