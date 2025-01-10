import React from "react";
import { X } from "lucide-react";

const EXERCISE_TYPES = [
  "ベンチプレス",
  "スクワット",
  "デッドリフト",
  "ショルダープレス",
];

interface WorkoutFormProps {
  onClose: () => void;
  onSubmit: (exercise: string, weight: number, reps: number) => void;
}

export function WorkoutForm({ onClose, onSubmit }: WorkoutFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    onSubmit(
      formData.get("exercise") as string,
      Number(formData.get("weight")),
      Number(formData.get("reps"))
    );
  };

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-xl p-6 w-full max-w-sm'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-lg font-bold'>新規記録</h3>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700'
          >
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <select
              name='exercise'
              className='w-full rounded-lg border-gray-300'
              defaultValue={EXERCISE_TYPES[0]}
            >
              {EXERCISE_TYPES.map((exercise) => (
                <option key={exercise} value={exercise}>
                  {exercise}
                </option>
              ))}
            </select>
          </div>
          <div className='flex gap-4'>
            <div className='flex-1'>
              <input
                type='number'
                name='weight'
                placeholder='重量 (kg)'
                className='w-full'
                required
              />
            </div>
            <div className='flex-1'>
              <input
                type='number'
                name='reps'
                placeholder='回数'
                className='w-full'
                required
              />
            </div>
          </div>
          <button
            type='submit'
            className='w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600'
          >
            記録する
          </button>
        </form>
      </div>
    </div>
  );
}
