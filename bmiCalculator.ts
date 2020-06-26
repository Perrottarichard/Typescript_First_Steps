
const calculateBmi = (h: number, w: number): string => {
    const bmi = w / Math.pow(h / 100, 2)
    if (bmi >= 40) {
        return "Obese Class 3 (Very severely obese)"
    } else if (bmi >= 35) {
        return "Obese Class 2 (Severely obese)"
    } else if (bmi >= 30) {
        return "Obese Class 1 (Moderately obese)"
    } else if (bmi >= 25) {
        return "Overweight"
    } else if (bmi >= 18.5) {
        return "Normal (heathy weight)"
    } else if (bmi >= 16) {
        return "Underweight"
    } else if (bmi >= 15) {
        return "Severely underweight"
    } else {
        return "Very severely underweight"
    }
}
console.log(calculateBmi(180, 74))