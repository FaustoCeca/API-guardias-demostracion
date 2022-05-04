import { bodyGuardia, Hours, hour, Places, place } from './types';

//Autenticaciones
const isString = (string: string): boolean => {
    return typeof string === 'string';
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
}

const isHour = (hour: any): boolean => {
    return Object.values(Hours).includes(hour)
}

const isPlace = (place: any): boolean => {
    return Object.values(Places).includes(place)
}

//Parses    (Los parametros se llaman Raw porque vienen directamente de la Request)
const parseComment = (commentRaw: any): string => {
    if(!isString(commentRaw)) {
        throw new Error('Incorrect or missing comment');
    }

    return commentRaw
}

const parseDate = (dateRaw: any): string => {
    if(!isString(dateRaw) || !isDate(dateRaw)) {
        throw new Error('Incorrect or missing date');
    }

    return dateRaw
}

const parseHours = (hoursRaw: any): hour => {
    if(!isString(hoursRaw) || !isHour(hoursRaw)) {
        throw new Error('Incorrect or missing Hour')
    }

    return hoursRaw
}

const parsePlace = (placeRaw: any): place => {
    if(!isString(placeRaw) || !isPlace(placeRaw)) {
        throw new Error('Incorrect or missin place')
    }

    return placeRaw
}


const toNewGuardia = (object: any): bodyGuardia => {
    const newGuardia: bodyGuardia = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        hourEnds: parseHours(object.hourEnds),
        hourStarts: parseHours(object.hourStarts),
        place: parsePlace(object.place)
    }

    return newGuardia
}

export default toNewGuardia