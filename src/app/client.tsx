"use client";

import { useTRPC } from "@/trpc/clients";
import { useSuspenseQuery } from "@tanstack/react-query";

const Client = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.createAI.queryOptions({
      text: "World",
    })
  );
  return <div>{JSON.stringify(data)}</div>;
};

export default Client;
