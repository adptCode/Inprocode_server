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
exports.getDefaultMarkersByCategories = exports.getDefaultMarkers = void 0;
const defaultMarker_1 = __importDefault(require("../models/defaultMarker"));
const getDefaultMarkers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const markers = yield defaultMarker_1.default.findAll();
        res.json(markers);
    }
    catch (error) {
        console.error('Error fetching default markers:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.getDefaultMarkers = getDefaultMarkers;
const getDefaultMarkersByCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { categories } = req.query;
    try {
        const categoryArray = categories.split(',');
        const markers = yield defaultMarker_1.default.findAll({
            where: {
                category: categoryArray
            }
        });
        res.json(markers);
    }
    catch (error) {
        console.error('Error fetching default markers by categories:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.getDefaultMarkersByCategories = getDefaultMarkersByCategories;
