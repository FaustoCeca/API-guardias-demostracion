import { Guardia, NoCommentGuardia, bodyGuardia } from '../types';
import guardiasData from './guardias.json';


const guardias: Guardia[] = guardiasData as Guardia[]

export const getGuardias = (): Guardia[] => guardias

export const findById = (id: number): NoCommentGuardia | undefined => {
    const guardia = guardias.find(g => g.id === id);
    if (guardia != null) {
        const { comment, ...restOfGuardia } = guardia;
        return restOfGuardia
    }
}

export const getGuardiasWithoutComments = (): NoCommentGuardia[] => {
    return guardias.map(({id, date, hourStarts, hourEnds, place}) => {
        return {
            id,
            date,
            hourStarts,
            hourEnds,
            place
        }
    })
}

export const addGuardia = (bodyGuardia :bodyGuardia): Guardia => {
        const newGuardia = {
            id: guardias.length + 1,
            ... bodyGuardia
        }

        guardias.push(newGuardia);
        return newGuardia;
    }