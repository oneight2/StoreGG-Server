const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const HASH_ROUND = 10;
let playerSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email harus diisi"],
    },
    password: {
      type: String,
      required: [true, "Password harus diisi"],
      maxLength: [225, "Panjang Password maksimal 225 karakter"],
      minLength: [6, "Panjang Password minimal 6 karakter"],
    },
    name: {
      type: String,
      required: [true, "Nama harus diisi"],
    },
    username: {
      type: String,
      required: [true, "Username harus diisi"],
    },
    role: {
      type: String,
      Enum: ["admin", "user"],
      required: [true, "Role harus diisi"],
      default: "user",
    },
    phoneNumber: {
      type: Number,
      required: [true, "Nomor Telepon harus diisi"],
    },
    status: {
      type: String,
      Enum: ["Y", "N"],
      default: "Y",
    },
    avatar: { type: String },
    fileName: { type: String },
    favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);
// CEK EMAIL TERDAFTAR
playerSchema.path("email").validate(
  async function (value) {
    try {
      const count = await this.model("Player").countDocuments({ email: value });
      return !count;
    } catch (err) {
      throw err;
    }
  },
  (attr) => `${attr.value} sudah terdaftar`
);

// CRYPT PASSWORD
playerSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, HASH_ROUND);
  next();
});

module.exports = mongoose.model("Player", playerSchema);
