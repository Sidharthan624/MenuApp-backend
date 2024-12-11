const Menu = require("../models/Menu");


exports.createMenu = async (req, res) => {
  try {
    const { name } = req.body;
    const newMenu = new Menu({ name, items: [] });
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.addItemToMenu = async (req, res) => {
  try {
    const { menuId } = req.params;
    const { name, description, price } = req.body;
    const menu = await Menu.findById(menuId);

    if (!menu) return res.status(404).json({ error: "Menu not found" });

    menu.items.push({ name, description, price});
    await menu.save();

    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getMenuById = async (req, res) => {
  try {
    const { menuId } = req.params;
    const menu = await Menu.findById(menuId);

    if (!menu) return res.status(404).json({ error: "Menu not found" });

    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
