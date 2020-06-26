interface Template {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const calculateExercises = (dailyHours: Array<number>, target: number): Template => {
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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))
