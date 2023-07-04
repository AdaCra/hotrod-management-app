import mongoose from "mongoose";

import "./Car";

const { Schema } = mongoose;

const damageReportSchema = new Schema(
  {
    reporterName: { type: String, required: true },
    licensePlateNumber: { type: String, required: true },
    carId: { type: Schema.Types.ObjectId, ref: "Car", required: true },
    isDrivable: { type: Boolean, default: true, required: true },
    isAffectsDriving: { type: Boolean, default: false },
    type: {
      type: String,
      enum: ["Mechanisch", "Elektrisch", "Karosserie"],
      required: true,
    },
    description: { type: String, max: 170, required: true },
    photos: [{ type: String }],
    updatedBy: { type: String },
    isResolved: { type: Boolean, default: false },
    resolvedDate: { type: Date },
    resolvedBy: { type: String },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const DamageReport =
  mongoose.models.DamageReport ||
  mongoose.model("DamageReport", damageReportSchema);

export default DamageReport;
