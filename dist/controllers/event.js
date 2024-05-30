"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEvent = exports.postEvent = exports.deleteEvent = exports.getEvent = exports.getEvents = void 0;
const event_1 = __importDefault(require("../models/event"));
const getEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const events = yield event_1.default.findAll();
    res.json(events);
});
exports.getEvents = getEvents;
const getEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const event = yield event_1.default.findByPk(id);
    if (event) {
        res.json(event);
    }
    else {
        res.status(404).json({
            msg: `Doesn't exist event with id ${id}`
        });
    }
});
exports.getEvent = getEvent;
const deleteEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const event = yield event_1.default.findByPk(id);
    if (!event) {
        res.status(404).json({
            msg: `Doesn't exist event with id ${id}`
        });
    }
    else {
        yield event.destroy();
        res.json({
            msg: 'Event delete successful'
        });
    }
});
exports.deleteEvent = deleteEvent;
const postEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, date, color, start, end } = req.body;
    console.log("Received data:", req.body);
    console.log(date);
    if (!date) {
        return res.status(400).json({
            msg: 'La data è obbligatoria'
        });
    }
    try {
        const event = yield event_1.default.create({ title, date, color, start, end });
        res.json({
            msg: 'Event create successful',
            event
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Something went wrong'
        });
    }
});
exports.postEvent = postEvent;
const updateEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const event = yield event_1.default.findByPk(id);
        if (event) {
            yield event.update(body);
            res.json({
                msg: 'Event update successful',
                event
            });
        }
        else {
            res.status(404).json({
                msg: `Doesn't exist event with id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Something went wrong'
        });
    }
});
exports.updateEvent = updateEvent;
