
import { useState } from "react";
import { LogEntry } from "@/lib/data";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface ServerLogsProps {
  logs: LogEntry[];
}

export default function ServerLogs({ logs }: ServerLogsProps) {
  const [filter, setFilter] = useState<string>("all");

  const filteredLogs = logs.filter(log => 
    filter === "all" || log.type === filter
  );

  const getIconForLogType = (type: string) => {
    switch (type) {
      case 'info':
        return <Icon name="Info" className="h-4 w-4 text-blue-500" />;
      case 'warning':
        return <Icon name="AlertTriangle" className="h-4 w-4 text-yellow-500" />;
      case 'error':
        return <Icon name="AlertOctagon" className="h-4 w-4 text-red-500" />;
      case 'action':
        return <Icon name="Activity" className="h-4 w-4 text-green-500" />;
      default:
        return <Icon name="Circle" className="h-4 w-4" />;
    }
  };

  const getClassForLogType = (type: string) => {
    switch (type) {
      case 'info':
        return 'bg-blue-50 border-blue-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      case 'error':
        return 'bg-red-50 border-red-200';
      case 'action':
        return 'bg-green-50 border-green-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Логи сервера</h2>
        <Select 
          value={filter} 
          onValueChange={setFilter}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Тип логов" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все логи</SelectItem>
            <SelectItem value="info">Информация</SelectItem>
            <SelectItem value="warning">Предупреждения</SelectItem>
            <SelectItem value="error">Ошибки</SelectItem>
            <SelectItem value="action">Действия</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
        {filteredLogs.map((log) => (
          <div 
            key={log.id}
            className={`flex items-start gap-3 p-3 rounded-md border ${getClassForLogType(log.type)}`}
          >
            <div className="mt-0.5">
              {getIconForLogType(log.type)}
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <p className="font-medium">
                  {log.username && (
                    <span className="text-primary mr-1">{log.username}:</span>
                  )}
                  {log.message}
                </p>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {log.timestamp}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
