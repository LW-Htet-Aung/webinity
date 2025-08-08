"use client";

import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { useTRPC } from "@/trpc/clients";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

// import { getQueryClient, trpc } from "@/trpc/server";
// import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
// import Client from "./client";
// import { Suspense } from "react";

export default function Home() {
  const trpc = useTRPC();
  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success("Background job started");
      },
    })
  );
  // const queryClient = getQueryClient();
  // void queryClient.prefetchQuery(
  //   trpc.createAI.queryOptions({
  //     text: "World",
  //   })
  // );
  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    //   <Suspense fallback={<p>Loading...</p>}>
    //     <Client />
    //   </Suspense>
    // </HydrationBoundary>
    <div className="p-4 max-w-7xl mx-auto">
      <Toaster />
      <Button
        disabled={invoke.isPending}
        onClick={() => invoke.mutate({ text: "John" })}
      >
        Invoke background job
      </Button>
    </div>
  );
}
