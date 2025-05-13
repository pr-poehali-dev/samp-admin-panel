
import React from 'react';
import { Badge } from "@/components/ui/badge";

interface PlayerStatusProps {
  isJailed: boolean;
  isMuted: boolean;
}

export default function PlayerStatus({ isJailed, isMuted }: PlayerStatusProps) {
  // Если игрок в тюрьме или имеет мут, показываем соответствующие бейджи
  if (isJailed) {
    return <Badge variant="destructive">В тюрьме</Badge>;
  }
  
  if (isMuted) {
    return <Badge variant="outline" className="ml-1">Мут</Badge>;
  }
  
  // В противном случае игрок активен
  return <Badge variant="outline" className="bg-green-50">Активен</Badge>;
}
