const currentAge = 20;
const maximumAge= 100;
let potatoesPerWeek= 30;
let numberOfWeeks = (maximumAge - currentAge)*365/7;

let totalPotatoes = numberOfWeeks * potatoesPerWeek;

console.log(`Arman has  ${maximumAge - currentAge} and will eat ${totalPotatoes} until age of ${maximumAge}`);