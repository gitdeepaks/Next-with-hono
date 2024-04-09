"use client";

import { Navbar } from "@/components/navbar";
import { useSession } from "@/hooks/use-session";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";

export default function Home() {
  const { status, session } = useSession();

  if (status === "pending") {
    <div className="min-h-screen flex items-center justify-center">
      return <Loader2 className="animate-spin text-muted-foreground" />;
    </div>;
  }

  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="flex min-h-scree w-full flex-col">
      <Navbar />
    </div>
  );
}
