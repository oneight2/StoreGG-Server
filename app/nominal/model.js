const mongoose = require("mongoose");
let nominalSchema = mongoose.Schema(
  {
    coinName: {
      type: String,
      required: [true, "Nama Koin harus diisi"],
    },
    coinQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Harga harus diisi"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Nominal", nominalSchema);
