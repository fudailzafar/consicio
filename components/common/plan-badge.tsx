import { currentUser } from "@clerk/nextjs/server";
import { Badge } from "@/components/ui/badge";
import { Crown } from "lucide-react";

export default async function PlanBadge() {
  const user = await currentUser();

  if (!user?.id) return null;

  let planName = "Buy a plan";

  return (
    <Badge
      variant="outline"
      className="ml-2 bg-linear-to-r from-amber-100 to-amber-200 border-amber-300 hidden lg:flex flex-row items-center"
    >
      <Crown className="w-3 h-3 mr-1 text-amber-600" />
      {planName}
    </Badge>
  );
}
