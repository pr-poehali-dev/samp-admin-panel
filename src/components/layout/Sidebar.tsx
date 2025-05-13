
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarProvider, 
  SidebarTrigger
} from "@/components/ui/sidebar";
import Icon from "@/components/ui/icon";

export default function AppSidebar() {
  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar variant="inset" side="left">
        <SidebarHeader className="flex justify-between items-center">
          <div className="flex items-center gap-2 px-2">
            <Icon name="Gamepad2" className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">SAMP Admin</span>
          </div>
          <SidebarTrigger />
        </SidebarHeader>
        
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive={true} tooltip="Панель">
                <Icon name="LayoutDashboard" />
                <span>Панель управления</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Игроки">
                <Icon name="Users" />
                <span>Игроки</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Транспорт">
                <Icon name="Car" />
                <span>Транспорт</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Сервер">
                <Icon name="Server" />
                <span>Настройки сервера</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Команды">
                <Icon name="Terminal" />
                <span>Команды</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Логи">
                <Icon name="ClipboardList" />
                <span>Логи</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Банлист">
                <Icon name="ShieldAlert" />
                <span>Банлист</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Помощь">
                <Icon name="HelpCircle" />
                <span>Помощь</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Настройки">
                <Icon name="Settings" />
                <span>Настройки</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}
