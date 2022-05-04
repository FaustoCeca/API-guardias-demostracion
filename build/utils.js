"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
//Autenticaciones
const isString = (string) => {
    return typeof string === 'string';
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isHour = (hour) => {
    return Object.values(types_1.Hours).includes(hour);
};
const isPlace = (place) => {
    return Object.values(types_1.Places).includes(place);
};
//Parses    (Los parametros se llaman Raw porque vienen directamente de la Request)
const parseComment = (commentRaw) => {
    if (!isString(commentRaw)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentRaw;
};
const parseDate = (dateRaw) => {
    if (!isString(dateRaw) || !isDate(dateRaw)) {
        throw new Error('Incorrect or missing date');
    }
    return dateRaw;
};
const parseHours = (hoursRaw) => {
    if (!isString(hoursRaw) || !isHour(hoursRaw)) {
        throw new Error('Incorrect or missing Hour');
    }
    return hoursRaw;
};
const parsePlace = (placeRaw) => {
    if (!isString(placeRaw) || !isPlace(placeRaw)) {
        throw new Error('Incorrect or missin place');
    }
    return placeRaw;
};
const toNewGuardia = (object) => {
    const newGuardia = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        hourEnds: parseHours(object.hourEnds),
        hourStarts: parseHours(object.hourStarts),
        place: parsePlace(object.place)
    };
    return newGuardia;
};
exports.default = toNewGuardia;
