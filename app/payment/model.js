const mongoose = require("mongoose");
let paymentSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, "Type Pembayaran harus diisi"],
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
      required: [true, "Nama Bank harus diisi"],
    },
    banks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bank",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Payment", paymentSchema);
