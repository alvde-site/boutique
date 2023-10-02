export default class ProductData {
  product: any;
  constructor(product: any) {
    this.product = product;
  }
  _getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  _getDataildSize() {
    const buttonsNumber = 3;
    let buttons = [
      { size: "S", disabled: true },
      { size: "M", disabled: true },
      { size: "L", disabled: true },
    ];
    for (let i = 0; i < buttonsNumber; i++) {
      switch (this._getRandomInt(2)) {
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

  generateProduct() {
    return { ...this.product, buttons: this._getDataildSize() };
  }
}
