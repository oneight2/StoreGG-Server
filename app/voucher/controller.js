const Voucher = require("./model");
const Category = require("../category/model");
const Nominal = require("../nominal/model");

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };

      const voucher = await Voucher.find();
      const category = await Category.find();
      const nominal = await Nominal.find();
      res.render("admin/voucher/view_voucher", {
        voucher,
        category,
        nominal,
        alert,
      });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/voucher");
    }
  },

  actionCreate: async (req, res) => {
    try {
      const { coinName, coinQuantity, price } = req.body;

      const nominal = await Nominal({ coinName, coinQuantity, price });
      await nominal.save();

      req.flash("alertMessage", "Berhasil Tambah Koin!");
      req.flash("alertStatus", "success");

      res.redirect("/nominal");
    } catch (error) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal");
    }
  },

  viewUpdate: async (req, res) => {
    try {
      const { id } = req.params;
      const nominal = await Nominal.findOne({ _id: id });
      res.render("admin/nominal/update", { nominal });
    } catch (error) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal");
    }
  },
  actionUpdate: async (req, res) => {
    try {
      const { id } = req.params;
      const { coinName, coinQuantity, price } = req.body;
      await Nominal.findOneAndUpdate(
        { _id: id },
        { coinName, coinQuantity, price }
      );

      req.flash("alertMessage", "Berhasil Edit Koin!");
      req.flash("alertStatus", "success");

      res.redirect("/nominal");
    } catch (error) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal");
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      await Nominal.findByIdAndRemove({ _id: id });

      req.flash("alertMessage", "Berhasil Hapus Koin!");
      req.flash("alertStatus", "success");

      res.redirect("/nominal");
    } catch (error) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal");
    }
  },
};
