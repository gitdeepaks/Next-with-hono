import { useSession } from "@/hooks/use-session";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Navbar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { session } = useSession();
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-lg font-bold">Logo</div>
      </div>
      <div className="flex items-center">
        {session ? (
          <div className="text-lg font-bold">Welcome {session.user.name}</div>
        ) : (
          <div className="text-lg font-bold">Sign In</div>
        )}
      </div>

      <Avatar className="cursor-auto">
        <AvatarImage src={session.user.image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <Button variant="default">
        <Link href="/api/auth/signout">LogOut</Link>
      </Button>
    </div>
  );
};
