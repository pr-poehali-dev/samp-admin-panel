
import { ServerStat } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface StatsCardProps {
  stat: ServerStat;
}

export default function StatsCard({ stat }: StatsCardProps) {
  return (
    <Card className="relative overflow-hidden group hover:border-primary/50 transition-all">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{stat.name}</CardTitle>
        <CardDescription>{stat.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-primary">{stat.value}</div>
      </CardContent>
      {stat.trend && (
        <CardFooter className="pt-0 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            {stat.trend === 'up' && (
              <>
                <Icon 
                  name="TrendingUp" 
                  className="w-4 h-4 text-green-500" 
                />
                <span className="text-green-500">+{stat.change}</span>
              </>
            )}
            {stat.trend === 'down' && (
              <>
                <Icon 
                  name="TrendingDown" 
                  className="w-4 h-4 text-red-500" 
                />
                <span className="text-red-500">{stat.change}</span>
              </>
            )}
            {stat.trend === 'neutral' && (
              <>
                <Icon 
                  name="Minus" 
                  className="w-4 h-4 text-yellow-500" 
                />
                <span>Без изменений</span>
              </>
            )}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
