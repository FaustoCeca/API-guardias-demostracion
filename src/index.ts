import express from 'express';      //ESmodules
import guardiasRouter from './routes/guardias';

const app = express();
app.use(express.json()) //middleware que transforma la request.body a un json

const PORT = 3000;

app.get('/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong')
})

app.use('/api/guardias', guardiasRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})