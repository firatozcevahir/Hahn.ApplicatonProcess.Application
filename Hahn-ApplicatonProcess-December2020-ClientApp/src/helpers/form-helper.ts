export class FormHelper {

  public hasValue(obj: any): boolean {
    if (!obj) return false;
    return !Object.values(obj).some((p) => p && (p !== '' && p != 0))
      ? false
      : true;
  }

  public hasEmptyValues(obj: any): boolean {
    if (!obj) return true;
    return Object.values(obj).some((p) => p === null || p === undefined || p === '');
  }
}
