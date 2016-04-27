module.exports = {
  sum: function(num1, num2){
    return num1 + num2;
  },
  isEqual: function(a, b){
    return a === b;
  },
  isEven: function(num1){
    return num1 % 2 === 0;
  },
  isDivisible: function(num1, num2){
    return num1 % num2 === 0;
  },
  discountPercentage: function(original, percentage){
    if(percentage > 100 || percentage < 0){
      return "please enter a number between 0 and 100";
    }
    return original * (percentage/100);
  },
  isVowel: function(letter){
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
      return true;
    }else {
      return false;
    }
  },
  celsiusToFahrenheit: function(num){
    return (num * (9/5) + 32);
  },
  biggestOfThree: function(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
      return num1;
    }else if (num2 > num1 && num2 > num3){
      return num2;
    }else {
      return num3;
    }
  },
  // Bonus
  federalIncomeTaxCalculator: function(){

  }
};
