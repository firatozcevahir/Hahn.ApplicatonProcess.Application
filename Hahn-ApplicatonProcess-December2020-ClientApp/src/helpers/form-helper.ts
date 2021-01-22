export class FormHelper {

  public hasValue(obj: any): boolean {
    if(!obj) return false;

    const {id, ...filteredObj} = obj; // omit id because obj might have id that user cannot modify
    return !Object.values(filteredObj).some(p => (p && p !== '')) ? false : true;
  }
}
