"use client";
import { Loader2, Unlock } from "lucide-react";
import { redirect } from "next/navigation";
import { useSession } from "@/hooks/use-session";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { status, session } = useSession();

  if (status === "pending") {
    return (
      <Loader2 className="animate-spin text-muted items-center justify-center " />
    );
  }

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Button variant="default" className="w-15">
        <Link href="/api/auth/signin">Login</Link>
        <Unlock className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default page;
