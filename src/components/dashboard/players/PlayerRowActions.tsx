
import React from 'react';
import { Player } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";

interface PlayerRowActionsProps {
  player: Player;
  onAction: (player: Player, action: "ban" | "kick" | "warn" | "teleport") => void;
}

export default function PlayerRowActions({ player, onAction }: PlayerRowActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Icon name="MoreHorizontal" className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onAction(player, "teleport")}>
          <Icon name="Map" className="mr-2 h-4 w-4" />
          <span>Телепорт</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onAction(player, "warn")}>
          <Icon name="AlertCircle" className="mr-2 h-4 w-4" />
          <span>Предупредить</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onAction(player, "kick")}>
          <Icon name="LogOut" className="mr-2 h-4 w-4" />
          <span>Кикнуть</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => onAction(player, "ban")}
          className="text-red-600 focus:bg-red-50 focus:text-red-600"
        >
          <Icon name="Ban" className="mr-2 h-4 w-4" />
          <span>Забанить</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
