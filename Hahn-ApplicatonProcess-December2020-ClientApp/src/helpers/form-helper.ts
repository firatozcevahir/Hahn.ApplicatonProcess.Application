export class FormHelper {

  public hasValue(obj: any): boolean {
    if(!obj) return true;

    const {id, ...filteredObj} = obj; // omit id because obj may has id that user cannot modify
    return !Object.values(filteredObj).find(p => (p !== null && p !== undefined && p !== ''));
  }
}
