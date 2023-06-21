const express = require("express");
const router = express.Router();

import { wOne, wTwo } from "@/controllers/weather/weatherGet";
router.get("/wOne", wOne);
router.get("/wTwo", wTwo);

module.exports = router;
