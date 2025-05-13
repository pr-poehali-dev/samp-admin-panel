
import React, { useState } from 'react';
import { Player } from "@/lib/data";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PlayerActionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  player: Player | null;
  actionType: "ban" | "kick" | "warn" | "teleport" | null;
  onExecute: (reason: string) => void;
}

export default function PlayerActionDialog({
  open,
  onOpenChange,
  player,
  actionType,
  onExecute
}: PlayerActionDialogProps) {
  const [actionReason, setActionReason] = useState("");

  // Получаем заголовок диалога в зависимости от типа действия
  const getDialogTitle = () => {
    switch (actionType) {
      case "ban": return "Забанить игрока";
      case "kick": return "Кикнуть игрока";
      case "warn": return "Предупредить игрока";
      case "teleport": return "Телепортировать игрока";
      default: return "Действие с игроком";
    }
  };

  // Обработчик подтверждения действия
  const handleConfirm = () => {
    onExecute(actionReason);
    setActionReason(""); // Очищаем причину после выполнения
  };

  // Обработчик закрытия диалога
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActionReason(""); // Очищаем причину при закрытии
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{getDialogTitle()}</DialogTitle>
          <DialogDescription>
            Вы собираетесь выполнить действие с игроком {player?.name}
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <label className="block text-sm font-medium mb-2">
            Причина:
          </label>
          <Input
            value={actionReason}
            onChange={(e) => setActionReason(e.target.value)}
            placeholder="Укажите причину (необязательно)"
          />
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Отмена
          </Button>
          <Button 
            onClick={handleConfirm}
            variant={actionType === "ban" ? "destructive" : "default"}
          >
            Подтвердить
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
