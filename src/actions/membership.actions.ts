"use server";

import Membership from '@/database/models/membership.model';
import { connectToDatabase } from "../database";
import { handleError } from '@/lib/utils';

export type RegisterMembershipParams = {
    username: string;
    phoneNumber: string;
    translationId: string;
    nationalId: string;
    email: string;
    fathersName: string;
    mothersName: string;
    batch: string;
    presentAddress: string;
    permanentAddress: string;
    house: string;
    cadetNo: string;
    workAddress: string;
    designation: string;
    profession: string;
    organization: string;
    bloodGroup: string;
    cadetName: string;
    college: string;
    membershipCategory: string;
    calender: Date;
    passOutYear: string;
    mobile?: Boolean;
};

export const RegisterMembership = async ({
    username,
    phoneNumber,
    translationId,
    nationalId,
    email,
    fathersName,
    mothersName,
    batch,
    presentAddress,
    permanentAddress,
    house,
    cadetNo,
    workAddress,
    designation,
    profession,
    organization,
    bloodGroup,
    cadetName,
    college,
    membershipCategory,
    calender,
    passOutYear,
    mobile,
}: RegisterMembershipParams): Promise<"success" | "error"> => {
    try {
        await connectToDatabase();

        const membership = await Membership.create({
            username,
            phoneNumber,
            translationId,
            nationalId,
            email,
            fathersName,
            mothersName,
            batch,
            presentAddress,
            permanentAddress,
            house,
            cadetNo,
            workAddress,
            designation,
            profession,
            organization,
            bloodGroup,
            cadetName,
            college,
            membershipCategory,
            calender,
            passOutYear,
            mobile,
        });
        console.log("the saved response: ", membership)
        return "success";
    } catch (error) {
        handleError("Error while submitting Membership form: ", error);
        return "error";
    }
};
