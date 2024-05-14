import React from "react";
import Heading from "@/components/shared/heading";
import SubHeading from "@/components/shared/sub-heading";
import { TbCurrencyTaka } from "react-icons/tb";

import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

export function MembershipFeePage({ className, ...props }: CardProps) {
  return (
    <div>
      <h1 className="text-center mb-8 mt-8">
        <Heading content="Membership Fee" />
      </h1>
      <div className="container lg:flex justify-center gap-4 mb-6">
        <div className="mb-4 shadow">
          <Card
            className={cn("w-[360px] md:w-[700px] lg:w-[460px]")}
            {...props}
          >
            <div className="text-center">
              <CardHeader>
                {" "}
                <div className=" text-2xl font-bold">
                  <SubHeading content="General Membership Fee" />
                </div>
              </CardHeader>
              <CardContent className="grid gap-4">
                {" "}
                <div className="text-4xl text-gray-600 font-bold flex justify-center">
                  <TbCurrencyTaka className="text-5xl" />
                  200/month{" "}
                </div>
                <p className="text-gray-500">Yearly Membership Fee</p>
                <p>Membership Fee for Year 2024</p>
              </CardContent>
            </div>
          </Card>
        </div>

        <div className="mb-4 shadow">
          <Card
            className={cn("w-[360px] md:w-[700px] lg:w-[460px]")}
            {...props}
          >
            <div className="text-center">
              <CardHeader>
                {" "}
                <div className=" text-2xl font-bold">
                  {" "}
                  <SubHeading content="Life Membership Fee" />
                </div>
              </CardHeader>
              <CardContent className="grid gap-4">
                {" "}
                <div className="text-4xl text-gray-600 font-bold flex justify-center">
                  {" "}
                  <TbCurrencyTaka className="text-5xl" /> 12000{" "}
                </div>
                <p className="text-gray-500">Life Time Membership Fee</p>
                <p>Membership Payment For Entire Life</p>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default MembershipFeePage;
