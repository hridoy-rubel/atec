import React from "react";
//import { InputType } from "@/types";
import Heading from "@/components/shared/heading";
import MembershipForm from "@/components/shared/membership-form";

const MembershipApplyPage = () => {
  return (
    <>
      <div className="text-center mb-10">
        <Heading content="Apply for Membership" />
      </div>
      <p className="text-center text-lime-500 text-lg mb-3">
        MFS Info: Bkash:01716523*8*; Nagad: 0191876909*
      </p>
      <p className="text-center text-lime-500 text-lg mb-2">
        Membership Fee: General category:500 BDT; Life Member: 5000 BDT
      </p>
      <MembershipForm />
    </>
  );
};

export default MembershipApplyPage;
