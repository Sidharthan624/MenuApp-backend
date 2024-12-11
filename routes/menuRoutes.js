const express = require("express");
const {
  createMenu,
  addItemToMenu,
  getMenus,
  getMenuById,
} = require("../controllers/menuController");

const router = express.Router();


router.post("/menus", createMenu);
router.post("/menus/:menuId/items", addItemToMenu);
router.get("/menus", getMenus);
router.get("/menus/:menuId", getMenuById);

module.exports = router;
