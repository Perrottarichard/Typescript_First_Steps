import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface Template {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}
const readInput = () => {
    let target: number = 0
    let dailyHours: Array<number> = []
    rl.question('How many hours per day did you PLAN to exercise this week? ', (answer1: string) => {
        if (Number(answer1) <= 0) throw new Error('invalid input');
        target = Number(answer1)
        rl.question('Enter the amount of hours you exercised each day this week separated by a space.  You should input 7 numbers (one number for each day of the week): ', (answer2: string) => {
            console.log(answer2.length)
            if (answer2.length > 13) {
                throw new Error('there are only 7 days in a week')
            }
            if (answer2.length < 13) {
                throw new Error('your missing some days or not adding spaces')
            }
            if (answer2.length === 13) {
                let arr = []
                for (let index = 0; index < answer2.length; index++) {
                    arr.push(answer2[index])
                }
                arr.map(a => a !== ' ' ? dailyHours.push(Number(a)) : a)
                console.log(calculateExercises(target, dailyHours))
                rl.close()
            }
        })
    })
}
const calculateExercises = (target: number, dailyHours: Array<number>): Template => {
    const periodLength = dailyHours.length
    const trainingDays = dailyHours.filter(d => d !== 0).length
    const average = dailyHours.reduce((a, b) => a + b, 0) / periodLength
    const success = average > target
    const calcRating = (target: number, average: number): number => {
        if (target - average > 2) {
            return 1
        } else if (target - average < 2 && target - average > -2) {
            return 2
        } else if (target - average < -2) {
            return 3
        }
    }
    const rating = calcRating(target, average)
    const chooseRatingDescription = (rating: number): string => {
        if (rating === 1) {
            return 'Not good'
        } else if (rating === 2) {
            return 'Ok. But try harder next time'
        } else if (rating === 3) {
            return 'Good Job! Keep it up!'
        }
    }
    const ratingDescription = chooseRatingDescription(rating)
    let result = {
        periodLength: periodLength,
        trainingDays: trainingDays,
        success: success,
        rating: rating,
        ratingDescription: ratingDescription,
        target: target,
        average: average
    }
    return result;
}
readInput();
