export class DropDownHolder {
  static dropDown;

  static setDropDown(dropDown) {
    this.dropDown = dropDown;
  }

  static getDropDown() {
    return this.dropDown;
  }

  static showErrorMessage(title = 'Ops...', message) {
    this.getDropDown().alertWithType('error', title, message);
  }

  static showSuccessMessage(title = 'Operação realizada com sucesso', message) {
    this.getDropDown().alertWithType('success', title, message);
  }

  static showDefaultSuccessMessage(message) {
    return this.showSuccessMessage(undefined, message);
  }

  static showDefaultErrorMessage(message) {
    return this.showErrorMessage(undefined, message);
  }
}
