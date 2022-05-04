import express  from "express";
import * as guardiasServices from '../services/guardiasServices';
import toNewGuardia from "../utils";


const router = express.Router();

router.get('/', (_req, res) => {
    res.send(guardiasServices.getGuardiasWithoutComments())
})

router.get('/:id', (req, res) => {
    const guardia = guardiasServices.findById(+req.params.id)       //Transforma mi request.param que viene como string en un number
    
    return (guardia != null) ? res.send(guardia) : res.sendStatus(404);
})

router.post('/', (req, res) => {
    try {        
        const newGuardia = toNewGuardia(req.body);

        const addedGuardia = guardiasServices.addGuardia(newGuardia);
    
        res.json(addedGuardia)
    } catch (e) {
        res.status(400).send(e);
    }
})

export default router