"use client";

import { formatDistanceToNow } from "date-fns";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useQuotes } from "@/hooks/quotes";

export const QuoteList = () => {
  const { query } = useQuotes();

  return (
    <>
      {query.data?.map((quote) => (
        <Card key={quote.id}>
          <CardHeader>
            <CardDescription className="text-black">
              {quote.text}
            </CardDescription>
          </CardHeader>
          <CardFooter className="border-t px-6 py-4 text-xs">
            <p className="text-muted-foreground">
              {quote.user.name},{" "}
              {formatDistanceToNow(new Date(quote.createdAt), {
                addSuffix: true,
              })}
            </p>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
