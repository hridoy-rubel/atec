import SubHeading from "@/components/shared/sub-heading";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import React from "react";

const Constitution = () => {
  return (
    <main className="text-center p-28 bg-muted ">
      <SubHeading content="PRESENT EXECUTIVE COMMITTE" />

      <h1 className="text-4xl font-bold">Constitution</h1>
      <div className="">
        <Button
          variant="destructive"
          className="hover:bg-slate-300 mt-4 outline"
        >
          Ghost
        </Button>
        <br /> <br />
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      </div>
    </main>
  );
};

export default Constitution;
