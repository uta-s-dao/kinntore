import React from "react";

interface WorkoutLog {
  id: number;
  exercise: string;
  weight: number;
  reps: number;
  date: string;
}

interface WorkoutListProps {
  logs: WorkoutLog[];
}

export function WorkoutList({ logs }: WorkoutListProps) {
  if (logs.length === 0) {
    return (
      <p className='text-center text-gray-500 py-6'>
        トレーニング記録を追加してみましょう！
      </p>
    );
  }

  return (
    <div className='space-y-3'>
      {logs.map((log) => (
        <div
          key={log.id}
          className='bg-gray-50 rounded-lg p-4 flex items-center justify-between'
        >
          <div>
            <h3 className='font-medium text-gray-800'>{log.exercise}</h3>
            <p className='text-gray-600'>
              {log.weight}kg × {log.reps}回
            </p>
          </div>
          <p className='text-sm text-gray-500'>{log.date}</p>
        </div>
      ))}
    </div>
  );
}
