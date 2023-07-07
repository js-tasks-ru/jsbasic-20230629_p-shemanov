let calculator = {
  firstNumber : null,
  secondNumber : null,

  read(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  },

  sum(){
    return this.firstNumber + this.secondNumber;
  },

  mul(){
    return this.firstNumber * this.secondNumber;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально