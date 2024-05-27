"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stadium_1 = require("../controllers/stadium");
const router = (0, express_1.Router)();
router.get('/', stadium_1.getStadiums);
exports.default = router;
