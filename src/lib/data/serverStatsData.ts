
import { ServerStat } from '../types/serverTypes';

/**
 * Моковые данные статистики сервера для демонстрации функциональности
 */
export const serverStats: ServerStat[] = [
  { 
    name: 'Онлайн игроки', 
    value: 145, 
    description: 'активных игроков', 
    change: 12, 
    trend: 'up' 
  },
  { 
    name: 'Загрузка ЦП', 
    value: '45%', 
    description: 'стабильная нагрузка',
    change: -5,
    trend: 'down'
  },
  { 
    name: 'Использование RAM', 
    value: '3.2GB', 
    description: 'из 8GB',
    change: 0.2,
    trend: 'up'
  },
  { 
    name: 'Аптайм', 
    value: '6д 12ч', 
    description: 'без перезапуска',
  }
];
