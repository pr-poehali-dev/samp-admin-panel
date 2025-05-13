
import { Player } from '../types/playerTypes';

/**
 * Моковые данные игроков для демонстрации функциональности
 */
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
