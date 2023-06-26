const newArr = [100, 200, 300];
const data = [10, 20, ...newArr];
const colors = ["Green", "Blue", "White"];
const allColors = ["Red", "Yallow",...colors];
const newColors=['Black','Gay']
allColors.push(...newColors)
console.log(allColors);
