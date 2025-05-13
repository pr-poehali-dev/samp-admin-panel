
// Моковые данные для демонстрации функциональности админ-панели

// Типы данных
export interface Player {
  id: number;
  name: string;
  level: number;
  health: number;
  armor: number;
  money: number;
  score: number;
  ping: number;
  playtime: string;
  ip: string;
  isAdmin: boolean;
  isMuted: boolean;
  isJailed: boolean;
}

export interface ServerStat {
  name: string;
  value: string | number;
  description?: string;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
}

export interface LogEntry {
  id: number;
  timestamp: string;
  type: 'info' | 'warning' | 'error' | 'action';
  message: string;
  username?: string;
}

// Данные о сервере
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

// Списки игроков
export const players: Player[] = [
  {
    id: 1,
    name: 'Vasya_Pupkin',
    level: 15,
    health: 100,
    armor: 80,
    money: 50000,
    score: 1500,
    ping: 48,
    playtime: '123ч 45м',
    ip: '192.168.1.1',
    isAdmin: false,
    isMuted: false,
    isJailed: false
  },
  {
    id: 2,
    name: 'Dima_Pro',
    level: 25,
    health: 85,
    armor: 100,
    money: 120000,
    score: 3200,
    ping: 65,
    playtime: '342ч 12м',
    ip: '192.168.1.2',
    isAdmin: true,
    isMuted: false,
    isJailed: false
  },
  {
    id: 3,
    name: 'Elena_Kill',
    level: 10,
    health: 100,
    armor: 0,
    money: 25000,
    score: 950,
    ping: 110,
    playtime: '45ч 30м',
    ip: '192.168.1.3',
    isAdmin: false,
    isMuted: true,
    isJailed: false
  },
  {
    id: 4,
    name: 'Sasha_Drive',
    level: 8,
    health: 65,
    armor: 50,
    money: 15000,
    score: 780,
    ping: 89,
    playtime: '38ч 10м',
    ip: '192.168.1.4',
    isAdmin: false,
    isMuted: false,
    isJailed: true
  },
  {
    id: 5,
    name: 'Max_Admin',
    level: 30,
    health: 100,
    armor: 100,
    money: 999999,
    score: 5000,
    ping: 32,
    playtime: '612ч 45м',
    ip: '192.168.1.5',
    isAdmin: true,
    isMuted: false,
    isJailed: false
  },
  {
    id: 6,
    name: 'Igor_Newbie',
    level: 3,
    health: 75,
    armor: 25,
    money: 5000,
    score: 150,
    ping: 78,
    playtime: '12ч 30м',
    ip: '192.168.1.6',
    isAdmin: false,
    isMuted: false,
    isJailed: false
  },
  {
    id: 7,
    name: 'Oleg_Driver',
    level: 18,
    health: 95,
    armor: 75,
    money: 78000,
    score: 2100,
    ping: 55,
    playtime: '156ч 20м',
    ip: '192.168.1.7',
    isAdmin: false,
    isMuted: false,
    isJailed: false
  }
];

// Логи сервера
export const serverLogs: LogEntry[] = [
  { 
    id: 1, 
    timestamp: '2025-05-13 14:23:45', 
    type: 'info', 
    message: 'Сервер успешно запущен'
  },
  { 
    id: 2, 
    timestamp: '2025-05-13 14:25:12', 
    type: 'info', 
    message: 'Игрок Vasya_Pupkin присоединился к серверу',
    username: 'Vasya_Pupkin'
  },
  { 
    id: 3, 
    timestamp: '2025-05-13 14:28:33', 
    type: 'action', 
    message: 'Администратор Max_Admin выдал предупреждение игроку Elena_Kill',
    username: 'Max_Admin'
  },
  { 
    id: 4, 
    timestamp: '2025-05-13 14:32:50', 
    type: 'error', 
    message: 'Ошибка скрипта в модуле vehicle_spawn' 
  },
  { 
    id: 5, 
    timestamp: '2025-05-13 14:35:22', 
    type: 'warning', 
    message: 'Высокая нагрузка на сервер: 85% CPU'
  },
  { 
    id: 6, 
    timestamp: '2025-05-13 14:40:10', 
    type: 'action', 
    message: 'Игрок Sasha_Drive был заключен в тюрьму администратором Dima_Pro',
    username: 'Dima_Pro'
  },
  { 
    id: 7, 
    timestamp: '2025-05-13 14:45:33', 
    type: 'info', 
    message: 'Игрок Igor_Newbie присоединился к серверу',
    username: 'Igor_Newbie'
  },
  { 
    id: 8, 
    timestamp: '2025-05-13 14:50:19', 
    type: 'action', 
    message: 'Администратор Max_Admin выдал игроку Oleg_Driver 10000$',
    username: 'Max_Admin'
  },
  { 
    id: 9, 
    timestamp: '2025-05-13 14:55:44', 
    type: 'warning', 
    message: 'Игрок Elena_Kill был заглушен за спам в чате',
    username: 'Elena_Kill'
  },
  { 
    id: 10, 
    timestamp: '2025-05-13 15:00:00', 
    type: 'info', 
    message: 'Выполнено автоматическое сохранение данных сервера'
  }
];
