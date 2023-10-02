export default class SizeButtons {
  _number: number;
  constructor(number: number) {
    this._number = number;
  }
  _getRandomInt(_number: number) {
    return Math.floor(Math.random() * _number);
  }

  getDatailsSize() {
    const buttonsNumber = 3;
    let buttons = [
      { size: "S", disabled: true },
      { size: "M", disabled: false },
      { size: "L", disabled: true },
    ];
    for (let i = 0; i < buttonsNumber; i++) {
      switch (this._getRandomInt(this._number)) {
        case 0:
          buttons[i].disabled = false;
          break;
        case 1:
          buttons[i].disabled = true;
          break;
        default:
          console.log(`Невозможно обработать элемент ${i}`);
      }
    }
    return buttons;
  }
}
