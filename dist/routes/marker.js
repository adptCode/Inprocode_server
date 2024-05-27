"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const marker_1 = require("../controllers/marker");
const router = (0, express_1.Router)();
router.get('/', marker_1.getMarkers);
router.post('/', marker_1.createMarker);
router.delete('/all', marker_1.deleteAllMarkers);
exports.default = router;
