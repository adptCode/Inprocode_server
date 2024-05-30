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
exports.updateUser = exports.postUser = exports.deleteUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listUsers = yield user_1.default.findAll();
        res.json(listUsers);
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield user_1.default.findByPk(id);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({
                error: `Doesn't exist user with id ${id}`
            });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.getUser = getUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield user_1.default.findByPk(id);
        if (!user) {
            res.status(404).json({
                error: `Doesn't exist user with id ${id}`
            });
        }
        else {
            yield user.destroy();
            res.json({
                msg: 'User delete successfull'
            });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.deleteUser = deleteUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existingUser = yield user_1.default.findOne({ where: { email: body.email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        const user = yield user_1.default.create(body);
        res.json({ msg: 'User created successfully', user });
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.postUser = postUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const user = yield user_1.default.findByPk(id);
        if (user) {
            yield user.update(body);
            res.json({ msg: 'User updated successfully' });
        }
        else {
            res.status(404).json({ error: `User with id ${id} doesn't exist` });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.updateUser = updateUser;
