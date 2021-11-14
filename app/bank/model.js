const mongoose = require("mongoose");
let bankSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nama Pemilik harus diisi"],
    },
    bankName: {
      type: String,
      required: [true, "Nama Bank harus diisi"],
    },
    noRekening: {
      type: Number,
      required: [true, "No Rekening harus diisi"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bank", bankSchema);
