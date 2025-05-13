
import { Player } from "@/lib/data";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import PlayerRowActions from "./PlayerRowActions";
import PlayerStatus from "./PlayerStatus";
import PlayerHealthBar from "./PlayerHealthBar";
import { Badge } from "@/components/ui/badge";

interface PlayerTableProps {
  players: Player[];
  onAction: (player: Player, action: "ban" | "kick" | "warn" | "teleport") => void;
}

export default function PlayerTable({ players, onAction }: PlayerTableProps) {
  return (
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
          {players.length > 0 ? (
            players.map((player) => (
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
                  <PlayerHealthBar health={player.health} />
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
                  <PlayerStatus isJailed={player.isJailed} isMuted={player.isMuted} />
                </TableCell>
                <TableCell className="text-right">
                  <PlayerRowActions player={player} onAction={onAction} />
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
  );
}
