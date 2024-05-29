import React from "react";
import Heading from "@/components/shared/heading";
import MembershipForm from "@/components/shared/membership-form";

const MembershipApplyPage = () => {
  return (
    <>
      <div className="text-center mb-10">
        <Heading content="Apply for Membership" />
      </div>
      <div>
        <p className="text-center text-gray-600 text-lg mb-3">
          MFS Info: Bkash:01716523*8*; Nagad: 0191876909*
        </p>
      </div>
      <MembershipForm />
    </>
  );
};

export default MembershipApplyPage;
