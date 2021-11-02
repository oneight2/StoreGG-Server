const mongoose = require("mongoose");
let transactionSchema = mongoose.Schema(
  {
    historyVoucherTopup: {
      gameName: { type: String, require: [true, "Nama Game Harus Diisi"] },
      category: { type: String, require: [true, "Category Harus Diisi"] },
      coinName: { type: String, require: [true, "Nama Koin Harus Diisi"] },
      thumbnail: { type: String },
      coinQuantity: {
        type: String,
        require: [true, "Jumlah Koin Harus Diisi"],
      },
      price: { type: Number },
    },
    historyPayment: {
      name: { type: String, require: [true, "Nama Harus Diisi"] },
      type: { type: String, require: [true, "Tipe Pembayaran Harus Diisi"] },
      bankName: { type: String, require: [true, "Nama Bank Harus Diisi"] },
      noRekening: { type: String, require: [true, "No Rekening Harus Diisi"] },
    },
    name: {
      type: String,
      require: [true, "Nama Harus Diisi"],
      maxlength: [255, "Panjang Nama Harus 2 - 255 Karakter"],
      minlength: [3, "Panjang Nama Harus 3 - 255 Karakter"],
    },
    accountUser: {
      type: String,
      require: [true, "Nama Akun Harus Diisi"],
      maxlength: [255, "Panjang Nama Harus 2 - 255 Karakter"],
      minlength: [3, "Panjang Nama Harus 3 - 255 Karakter"],
    },
    tax: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "Pending",
    },
    player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
    historyUser: {
      name: { type: String, require: [true, "Nama Player Harus Diisi"] },
      phoneNumber: {
        type: Number,
        maxlength: [15, "Nomor Harus 9-15 Karakter"],
        minlength: [9, "Nomor Harus 9-15 Karakter"],
      },
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Transaction", transactionSchema);
