
import React from 'react';

interface PlayerHealthBarProps {
  health: number;
}

export default function PlayerHealthBar({ health }: PlayerHealthBarProps) {
  // Определяем цвет полосы здоровья в зависимости от значения
  const getHealthColor = (health: number): string => {
    if (health > 70) return 'bg-green-500';
    if (health > 30) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="flex items-center gap-2">
      <div className="w-20 bg-gray-200 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${getHealthColor(health)}`}
          style={{ width: `${health}%` }}
        />
      </div>
      <span className="text-xs">{health}%</span>
    </div>
  );
}
