/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import bodyParser from 'body-parser';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(bodyParser.json());

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const { height, weight } = req.query;
    if (!height || isNaN(Number(height))) {
        throw new Error('you must include a height and it must be a number');
    }
    if (!weight || isNaN(Number(weight))) {
        throw new Error('you must include a weight and it must be a number');
    }
    res.json({
        height: height,
        weight: weight,
        bmi: calculateBmi(Number(height), Number(weight))
    });
});

app.post('/exercises', (req, res) => {
    const { daily_exercises, target } = req.body;
    if (!daily_exercises || !target) {
        res.status(400).send('Bad Request: you must include the daily exercises hours and a target value');
    }
    if (isNaN(target)) {
        res.status(400).send('Bad Request: target must be a number');
    }
    const hasNonNumber = daily_exercises.filter((d: any) => typeof d !== 'number');
    if (hasNonNumber.length !== 0) {
        res.status(400).send('Bad Request: daily hours must only contain numbers');
    }
    res.json(calculateExercises(target, daily_exercises));
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});