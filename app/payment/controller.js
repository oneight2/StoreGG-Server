const Payment = require("./model");
const Bank = require("../bank/model");

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };

      const payment = await Payment.find().populate("banks");
      const bank = await Bank.find();
      res.render("admin/payment/view_payment", { payment, bank, alert });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/payment");
    }
  },

  actionCreate: async (req, res) => {
    try {
      const { type, banks } = req.body;

      const payment = await Payment({ type, banks });
      await payment.save();

      req.flash("alertMessage", "Berhasil Tambah Data Payment!");
      req.flash("alertStatus", "success");

      res.redirect("/payment");
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/payment");
    }
  },

  viewUpdate: async (req, res) => {
    try {
      const { id } = req.params;
      const bank = await Bank.find();
      const payment = await Payment.findOne({ _id: id }).populate("banks");
      res.render("admin/payment/update", { payment, bank });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/payment");
    }
  },
  actionUpdate: async (req, res) => {
    try {
      const { id } = req.params;
      const { type, banks } = req.body;
      const payment = await Payment.findOne({ _id: id });
      let status = payment.status === "Y" ? "N" : "Y";
      await Payment.findOneAndUpdate({ _id: id, type, banks, status });

      req.flash("alertMessage", "Berhasil Update Data Payment!");
      req.flash("alertStatus", "success");

      res.redirect("/payment");
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/payment");
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      await Payment.findByIdAndRemove({ _id: id });

      req.flash("alertMessage", "Berhasil Hapus Data Payment!");
      req.flash("alertStatus", "success");

      res.redirect("/payment");
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/payment");
    }
  },
};
