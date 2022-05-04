"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //ESmodules
const guardias_1 = __importDefault(require("./routes/guardias"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //middleware que transforma la request.body a un json
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});
app.use('/api/guardias', guardias_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
