
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-30">
      <div className="flex h-16 items-center px-6">
        <div className="flex items-center gap-1">
          <Icon name="Gamepad2" className="h-5 w-5 text-primary" />
          <span className="text-xl font-bold tracking-tight">SAMP Admin</span>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <Icon name="Sun" className="h-5 w-5" />
            ) : (
              <Icon name="Moon" className="h-5 w-5" />
            )}
            <span className="sr-only">Сменить тему</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative flex items-center gap-2 rounded-full p-0 pl-2 pr-2"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon name="User" className="h-4 w-4" />
                </div>
                <span className="flex flex-col items-start text-sm font-medium">
                  Админ
                </span>
                <Icon name="ChevronDown" className="ml-1 h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Icon name="Settings" className="mr-2 h-4 w-4" />
                <span>Настройки</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icon name="LogOut" className="mr-2 h-4 w-4" />
                <span>Выход</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
