"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useQuotes } from "@/hooks/quotes";
// import { useQuotes } from "@/hooks/use-session";
import React, { useState } from "react";

const QuoteForm = () => {
  const [text, setText] = useState("");
  const { mutation } = useQuotes();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ text });
    setText("");
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>New Quote</CardTitle>
        <CardDescription>Create a new Qoute</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Input
            disabled={mutation.isPending}
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Quote text"
          />
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button disabled={mutation.isPending}>Submit</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default QuoteForm;
