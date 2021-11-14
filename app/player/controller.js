const Voucher = require("../voucher/model");
const Player = require("./model");

module.exports = {
  landingPage: async (req, res) => {
    try {
      const voucher = await Voucher.find()
        .select("_id name status category thumbnail")
        .populate("category");
      res.status(200).json({ data: voucher });
    } catch (err) {
      res.status(500).json({ message: err.message } || "Internal Serve Erorr ");
    }
  },
  detailPage: async (req, res) => {
    try {
      const { id } = req.params;
      const voucher = await Voucher.findOne({ _id: id })
        .populate("nominals")
        .populate("category")
        .populate("user", "_id name phoneNumber");

      if (!voucher) {
        res.status(404).json({ message: "Voucher Data Not Found" });
      }
      res.status(200).json({ data: voucher });
    } catch (err) {
      res.status(500).json({ message: err.message } || "Internal Serve Erorr ");
    }
  },
};
