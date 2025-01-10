import React from "react";


interface JournalEntry {
  id: number;
  content: string;
  date: string;
  time: string;
  mood: string;
}

interface JournalListProps {
  entries: JournalEntry[];
}

export default function JournalList({ entries }: JournalListProps) {
  if (entries.length === 0) {
    return (
      <div className='text-center py-8'>
        <p className='text-gray-500 text-sm'>最初の一言を書いてみましょう</p>
      </div>
    );
  }

  return (
    <div className='space-y-4'>
      {entries.map((entry) => (
        <div key={entry.id} className='bg-white rounded-lg shadow-sm p-4'>
          <div className='flex justify-between items-start mb-2'>
            <span className='text-xl'>{entry.mood}</span>
            <div className='text-xs text-gray-500 space-y-0.5 text-right'>
              <div>{entry.date}</div>
              <div>{entry.time}</div>
            </div>
          </div>
          <p className='text-gray-700 text-sm whitespace-pre-wrap'>
            {entry.content}
          </p>
        </div>
      ))}
    </div>
  );
}
