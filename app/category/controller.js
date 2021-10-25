const Category = require("./model");
module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };

      const category = await Category.find();
      res.render("admin/category/view_category", { category, alert });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
    }
  },

  actionCreate: async (req, res) => {
    try {
      const { name } = req.body;

      const category = await Category({ name });
      await category.save();

      req.flash("alertMessage", "Berhasil Tambah Kategori!");
      req.flash("alertStatus", "success");

      res.redirect("/category");
    } catch (error) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
    }
  },

  viewUpdate: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findOne({ _id: id });
      res.render("admin/category/update", { category });
    } catch (error) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
    }
  },
  actionUpdate: async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const category = await Category.findOneAndUpdate({ _id: id }, { name });

      req.flash("alertMessage", "Berhasil Edit Kategori!");
      req.flash("alertStatus", "success");

      res.redirect("/category");
    } catch (error) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findOneAndRemove({ _id: id });

      req.flash("alertMessage", "Berhasil Hapus Kategori!");
      req.flash("alertStatus", "success");

      res.render("/category");
    } catch (error) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
    }
  },
};
