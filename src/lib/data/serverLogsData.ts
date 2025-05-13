
import { LogEntry } from '../types/logTypes';

/**
 * Моковые данные логов сервера для демонстрации функциональности
 */
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
