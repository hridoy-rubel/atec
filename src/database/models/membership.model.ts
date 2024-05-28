import { Schema, model, models } from "mongoose";
// import { Boolean } from "zod";

const MembershipSchema = new Schema(
    {
        username: { type: String, required: true, unique: true, trim: true },
        phoneNumber: { type: String, required: true, unique: true, trim: true },
        translationId: { type: String, required: true, unique: true, trim: true },
        nationalId: { type: String, required: true, unique: true, trim: true },
        email: { type: String, required: true, unique: true },
        fathersName: { type: String, required: true },
        mothersName: { type: String, required: true },
        batch: { type: String, required: true },
        presentAddress: { type: String, required: true },
        permanentAddress: { type: String, required: true },
        house: { type: String, required: true },
        cadetNo: { type: String, required: true },
        workAddress: { type: String, required: true },
        designation: { type: String, required: true },
        profession: { type: String, required: true },
        organization: { type: String, required: true },
        bloodGroup: { type: String, required: true },
        cadetName: { type: String, required: true },
        college: { type: String, required: true },
        membershipCategory: { type: String, required: true },
        calender: { type: Date, required: true },
        passOutYear: { type: String, required: true },
        mobile: { type: Boolean },
    },
    {
        timestamps: true,
    }
);

const Membership = models?.Membership || model("Membership", MembershipSchema);

export default Membership;
