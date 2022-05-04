export type hour = '08-00' | '20-00'      
export type place = 'Rosario' | 'Perez' | 'VGG'

export enum Hours {
    hour8 = '08:00',
    hour20 = '20:00'
}

export enum Places {
    Rosario = 'Rosario',
    Perez = 'Perez',
    VGG = 'VGG'
}

export interface Guardia {
    id: number,
    date: string,
    hourStarts: hour,
    hourEnds: hour,
    place: place,
    comment: string
}

// export type NoCommentGuardia = Pick<Guardia, 'id' | 'date' | 'hour' 'place'>

export type NoCommentGuardia = Omit<Guardia, 'comment'> 

export type bodyGuardia = Omit<Guardia, 'id'>