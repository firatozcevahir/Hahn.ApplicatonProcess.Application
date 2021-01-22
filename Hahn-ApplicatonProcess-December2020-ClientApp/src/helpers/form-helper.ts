export class FormHelper {

  public checkIfEmpty<T>(obj: T): boolean {
    if(!obj) return true;
    return !Object.values(obj).some(x => (x !== null && x !== undefined && x !== ''));
  }
}
