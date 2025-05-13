
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import StatsCard from "@/components/dashboard/StatsCard";
import PlayersList from "@/components/dashboard/PlayersList";
import ServerLogs from "@/components/dashboard/ServerLogs";
import { SidebarInset } from "@/components/ui/sidebar";
import { serverStats, players, serverLogs } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-sidebar">
      <Sidebar />
      <SidebarInset>
        <div className="flex h-full flex-col">
          <Header />
          <main className="flex-1 overflow-auto">
            <div className="container py-6">
              <h1 className="text-3xl font-bold mb-6">Панель управления</h1>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
                {serverStats.map((stat, index) => (
                  <StatsCard key={index} stat={stat} />
                ))}
              </div>
              
              <Tabs defaultValue="players" className="mb-6">
                <TabsList>
                  <TabsTrigger value="players" className="flex items-center gap-1.5">
                    <Icon name="Users" className="h-4 w-4" />
                    <span>Игроки</span>
                  </TabsTrigger>
                  <TabsTrigger value="logs" className="flex items-center gap-1.5">
                    <Icon name="ClipboardList" className="h-4 w-4" />
                    <span>Логи</span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="players" className="mt-4">
                  <PlayersList players={players} />
                </TabsContent>
                <TabsContent value="logs" className="mt-4">
                  <ServerLogs logs={serverLogs} />
                </TabsContent>
              </Tabs>
            </div>
          </main>
          <footer className="border-t py-4 px-6 text-center text-sm text-muted-foreground">
            <p>SAMP Admin Panel © {new Date().getFullYear()}</p>
          </footer>
        </div>
      </SidebarInset>
    </div>
  );
};

export default Index;
