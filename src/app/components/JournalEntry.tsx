"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

interface JournalEntryProps {
  onSubmit: (content: string, mood: string) => void;
}

const moods = ["😊", "😌", "🤔", "😢", "😤"];

export default function JournalEntry({ onSubmit }: JournalEntryProps) {
  const [content, setContent] = useState("");
  const [selectedMood, setSelectedMood] = useState("😊");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content, selectedMood);
      setContent("");
    }
  };

  return (
    <div className='bg-white rounded-lg shadow-sm p-4'>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <div className='flex space-x-2'>
            {moods.map((mood) => (
              <button
                key={mood}
                type='button'
                onClick={() => setSelectedMood(mood)}
                className={`text-2xl p-1.5 rounded-full hover:bg-gray-50 transition-colors ${
                  selectedMood === mood ? "bg-gray-100" : ""
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        <div className='relative'>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='今日はどんな一日でしたか？'
            className='w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 resize-none'
            rows={3}
          />
          <button
            type='submit'
            disabled={!content.trim()}
            className='absolute bottom-2 right-2 p-1.5 rounded-full bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
          >
            <Send className='w-4 h-4' />
          </button>
        </div>
      </form>
    </div>
  );
}
