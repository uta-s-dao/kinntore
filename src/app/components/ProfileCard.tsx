import React from "react";
import { Trophy } from "lucide-react";

interface ProfileCardProps {
  trophyCount: number;
}

export function ProfileCard({ trophyCount }: ProfileCardProps) {
  return (
    <div className='flex items-center gap-6 mb-8'>
      <img
        src='https://images.unsplash.com/photo-1526506118085-60ce8714f8c5'
        alt='Profile'
        className='w-24 h-24 rounded-full object-cover border-2 border-purple-500'
      />
      <div>
        <h1 className='text-2xl font-bold text-gray-800'>山田太郎</h1>
        <div className='flex items-center gap-2 text-yellow-500'>
          <Trophy size={18} />
          <span>{trophyCount} トロフィー</span>
        </div>
      </div>
    </div>
  );
}
