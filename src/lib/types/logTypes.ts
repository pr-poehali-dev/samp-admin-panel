
/**
 * Типы данных, связанные с логами сервера
 */

/**
 * Типы событий в логах
 */
export type LogType = 'info' | 'warning' | 'error' | 'action';

/**
 * Интерфейс записи лога
 */
export interface LogEntry {
  /** Уникальный идентификатор записи */
  id: number;
  /** Временная метка в формате "YYYY-MM-DD HH:MM:SS" */
  timestamp: string;
  /** Тип лога: информация, предупреждение, ошибка или действие */
  type: LogType;
  /** Сообщение лога */
  message: string;
  /** Имя пользователя, связанного с событием (если применимо) */
  username?: string;
}
