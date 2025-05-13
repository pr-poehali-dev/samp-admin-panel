
import { useState } from "react";
import { Player } from "@/lib/data";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { toast } from "@/components/ui/use-toast";

interface PlayersListProps {
  players: Player[];
}

export default function PlayersList({ players }: PlayersListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [dialogType, setDialogType] = useState<"ban" | "kick" | "warn" | "teleport" | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [actionReason, setActionReason] = useState("");

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAction = (player: Player, action: "ban" | "kick" | "warn" | "teleport") => {
    setSelectedPlayer(player);
    setDialogType(action);
    setDialogOpen(true);
    setActionReason("");
  };

  const executeAction = () => {
    if (!selectedPlayer || !dialogType) return;

    const actions = {
      ban: "заблокирован",
      kick: "выкинут с сервера",
      warn: "получил предупреждение",
      teleport: "телепортирован"
    };

    toast({
      title: `Действие выполнено`,
      description: `Игрок ${selectedPlayer.name} ${actions[dialogType]}${actionReason ? `: ${actionReason}` : ""}`
    });
    
    setDialogOpen(false);
  };

  return (
    <div className="space-y-4">
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

      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Ник</TableHead>
              <TableHead>Уровень</TableHead>
              <TableHead>Здоровье</TableHead>
              <TableHead>Ping</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead className="text-right">Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPlayers.length > 0 ? (
              filteredPlayers.map((player) => (
                <TableRow key={player.id}>
                  <TableCell className="font-medium">{player.id}</TableCell>
                  <TableCell className="font-medium">
                    {player.name}
                    {player.isAdmin && (
                      <Badge className="ml-2 bg-blue-500 hover:bg-blue-600">Админ</Badge>
                    )}
                  </TableCell>
                  <TableCell>{player.level}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            player.health > 70 ? 'bg-green-500' : 
                            player.health > 30 ? 'bg-yellow-500' : 
                            'bg-red-500'
                          }`}
                          style={{ width: `${player.health}%` }}
                        />
                      </div>
                      <span className="text-xs">{player.health}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`${
                      player.ping < 70 ? 'text-green-500' : 
                      player.ping < 100 ? 'text-yellow-500' : 
                      'text-red-500'
                    }`}>
                      {player.ping} ms
                    </span>
                  </TableCell>
                  <TableCell>
                    {player.isJailed && (
                      <Badge variant="destructive">В тюрьме</Badge>
                    )}
                    {player.isMuted && (
                      <Badge variant="outline" className="ml-1">Мут</Badge>
                    )}
                    {!player.isJailed && !player.isMuted && (
                      <Badge variant="outline" className="bg-green-50">Активен</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Icon name="MoreHorizontal" className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleAction(player, "teleport")}>
                          <Icon name="Map" className="mr-2 h-4 w-4" />
                          <span>Телепорт</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleAction(player, "warn")}>
                          <Icon name="AlertCircle" className="mr-2 h-4 w-4" />
                          <span>Предупредить</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleAction(player, "kick")}>
                          <Icon name="LogOut" className="mr-2 h-4 w-4" />
                          <span>Кикнуть</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleAction(player, "ban")}
                          className="text-red-600 focus:bg-red-50 focus:text-red-600"
                        >
                          <Icon name="Ban" className="mr-2 h-4 w-4" />
                          <span>Забанить</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-4 text-muted-foreground">
                  Игроков не найдено
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {dialogType === "ban" && "Забанить игрока"}
              {dialogType === "kick" && "Кикнуть игрока"}
              {dialogType === "warn" && "Предупредить игрока"}
              {dialogType === "teleport" && "Телепортировать игрока"}
            </DialogTitle>
            <DialogDescription>
              Вы собираетесь выполнить действие с игроком {selectedPlayer?.name}
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
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Отмена
            </Button>
            <Button 
              onClick={executeAction}
              variant={dialogType === "ban" ? "destructive" : "default"}
            >
              Подтвердить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
