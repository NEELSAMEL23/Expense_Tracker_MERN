import mongoose from "mongoose";

const IncomeSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        icon: { type: String, required: true },
        source: { type: String, required: true },
        amount: { type: Number, required: true, min: 0 },
        date: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const Income = mongoose.model("Income", IncomeSchema);
export default Income;