// interface Measurements {
//     height: number,
//     weight: number
// }
// const parseArgs = (args: Array<string>): Measurements => {
//     if (args.length < 4) throw new Error('not enough arguments');
//     if (args.length > 4) throw new Error('too many arguments')

//     if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
//         return {
//             height: Number(args[2]),
//             weight: Number(args[3])
//         }
//     } else {
//         throw new Error('Provided values are not numbers')
//     }
// }
export const calculateBmi = (height: number, weight: number): string => {
    const bmi = weight / Math.pow(height / 100, 2);
    if (bmi >= 40) {
        return "Obese Class 3 (Very severely obese)";
    } else if (bmi >= 35) {
        return "Obese Class 2 (Severely obese)";
    } else if (bmi >= 30) {
        return "Obese Class 1 (Moderately obese)";
    } else if (bmi >= 25) {
        return "Overweight";
    } else if (bmi >= 18.5) {
        return "Normal (heathy weight)";
    } else if (bmi >= 16) {
        return "Underweight";
    } else if (bmi >= 15) {
        return "Severely underweight";
    } else {
        return "Very severely underweight";
    }
};
// try {
//     const { height, weight } = parseArgs(process.argv)
//     console.log(process.argv)
//     console.log(calculateBmi(height, weight))
// } catch (error) {
//     console.log(process.argv)
//     console.log('Error message: ', error.message)
// }

