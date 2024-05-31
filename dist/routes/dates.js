"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dates_1 = require("../controllers/dates");
const router = (0, express_1.Router)();
router.get('/', dates_1.getDates);
exports.default = router;
