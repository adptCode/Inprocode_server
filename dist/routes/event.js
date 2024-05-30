"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const event_1 = require("../controllers/event");
const router = (0, express_1.Router)();
router.get('/', event_1.getEvents);
router.get('/:id', event_1.getEvent);
router.post('/', event_1.postEvent);
router.put('/:id', event_1.updateEvent);
router.delete('/:id', event_1.deleteEvent);
exports.default = router;
