import { useState } from "react";
import { Player } from "@/lib/data";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { toast } from "@/components/ui/use-toast";
import PlayerActionDialog from "./players/PlayerActionDialog";
import PlayerTable from "./players/PlayerTable";
import usePlayerSearch from "@/hooks/usePlayerSearch";

interface PlayersListProps {
  players: Player[];
}

export default function PlayersList({ players }: PlayersListProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [dialogType, setDialogType] = useState<
    "ban" | "kick" | "warn" | "teleport" | null
  >(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Используем кастомный хук для поиска
  const { searchTerm, setSearchTerm, filteredPlayers } =
    usePlayerSearch(players);

  const handleAction = (
    player: Player,
    action: "ban" | "kick" | "warn" | "teleport",
  ) => {
    setSelectedPlayer(player);
    setDialogType(action);
    setDialogOpen(true);
  };

  const executeAction = (reason: string) => {
    if (!selectedPlayer || !dialogType) return;

    const actions = {
      ban: "заблокирован",
      kick: "выкинут с сервера",
      warn: "получил предупреждение",
      teleport: "телепортирован",
    };

    toast({
      title: `Действие выполнено`,
      description: `Игрок ${selectedPlayer.name} ${actions[dialogType]}${reason ? `: ${reason}` : ""}`,
    });

    setDialogOpen(false);
  };

  return (
    <div className="space-y-4">
      {/* Заголовок и поиск */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Игроки онлайн ({players.length})</h2>
        <div className="relative w-64">
          <Input
            placeholder="Поиск игрока..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pr-8"
          />
          <Icon
            name="Search"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
          />
        </div>
      </div>

      {/* Таблица игроков */}
      <PlayerTable players={filteredPlayers} onAction={handleAction} />

      {/* Диалог подтверждения действий */}
      <PlayerActionDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        player={selectedPlayer}
        actionType={dialogType}
        onExecute={executeAction}
      />
    </div>
  );
}
