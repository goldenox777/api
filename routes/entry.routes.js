const express = require("express");
const router = express.Router();

const api_controller = require("../controllers/api.controller");

router.post("/create", api_controller.entry_create);
router.get("/:id", api_controller.entry_details);
router.get("/", api_controller.all_entries);
router.get("/filter/:filter", api_controller.filter);
router.put("/:id/update", api_controller.entry_update);
router.delete("/:id/delete", api_controller.entry_delete);
module.exports = router;