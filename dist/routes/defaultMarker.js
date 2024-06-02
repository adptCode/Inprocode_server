"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dafaultMarker_1 = require("../controllers/dafaultMarker");
const router = (0, express_1.Router)();
router.get('/', dafaultMarker_1.getDefaultMarkers);
router.get('/byCategories', dafaultMarker_1.getDefaultMarkersByCategories);
exports.default = router;
