const mongoose = require("mongoose");
let userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email harus diisi"],
    },
    password: {
      type: String,
      required: [true, "Password harus diisi"],
    },
    name: {
      type: String,
      required: [true, "Nama harus diisi"],
    },
    username: {
      type: String,
    },
    role: {
      type: String,
      Enum: ["Admin", "User"],
      required: [true, "Role harus diisi"],
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
