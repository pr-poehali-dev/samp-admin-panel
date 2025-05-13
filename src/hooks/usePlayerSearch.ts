
import { useState, useMemo } from "react";
import { Player } from "@/lib/data";

/**
 * Хук для поиска игроков по имени
 * @param players Массив игроков для поиска
 * @returns Объект с состоянием поиска и отфильтрованным списком игроков
 */
export default function usePlayerSearch(players: Player[]) {
  const [searchTerm, setSearchTerm] = useState("");

  // Мемоизируем фильтрацию игроков для оптимизации производительности
  const filteredPlayers = useMemo(() => {
    return players.filter(player =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [players, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredPlayers
  };
}
