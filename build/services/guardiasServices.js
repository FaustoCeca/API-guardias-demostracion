"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addGuardia = exports.getGuardiasWithoutComments = exports.findById = exports.getGuardias = void 0;
const guardias_json_1 = __importDefault(require("./guardias.json"));
const guardias = guardias_json_1.default;
const getGuardias = () => guardias;
exports.getGuardias = getGuardias;
const findById = (id) => {
    const guardia = guardias.find(g => g.id === id);
    if (guardia != null) {
        const { comment } = guardia, restOfGuardia = __rest(guardia, ["comment"]);
        return restOfGuardia;
    }
};
exports.findById = findById;
const getGuardiasWithoutComments = () => {
    return guardias.map(({ id, date, hourStarts, hourEnds, place }) => {
        return {
            id,
            date,
            hourStarts,
            hourEnds,
            place
        };
    });
};
exports.getGuardiasWithoutComments = getGuardiasWithoutComments;
const addGuardia = (bodyGuardia) => {
    const newGuardia = Object.assign({ id: guardias.length + 1 }, bodyGuardia);
    guardias.push(newGuardia);
    return newGuardia;
};
exports.addGuardia = addGuardia;
