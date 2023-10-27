import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperObject {
  /**
   * This function removes null, empty string, and undefined values from an object.
   * @param inputObject - The object to remove values from.
   * @returns The object with blank values removed.
   */
  removeBlankValues(inputObject: any) {
    let newObject: any = Object.fromEntries(
      Object.entries(inputObject).filter(([_, value]) => {
        return value !== null && value !== '' && value !== undefined;
      })
    );

    return newObject;
  }

  serialize(object: {}) {
    return this.removeEmptyArrays(this.removeBlankValues(object));
  }

  getKeys(object: Object): string[] {
    return Object.keys(object);
  }

  removeEmptyArrays(obj: any) {
    let newObject: any = {};
    Object.keys(obj).forEach((key) => {
      if (obj[key]) {
        if (obj[key] instanceof Array) {
          if (obj[key].length) newObject[key] = obj[key];
        } else newObject[key] = obj[key];
      }
    });

    return newObject;
  }

  removeFields(obj: any, omitKeys: string[]): {} {
    if (Object.keys(obj).length) {
      return Object.keys(obj).reduce((result: any, key) => {
        if (!omitKeys.includes(key)) {
          result[key] = obj[key];
        }
        return result;
      }, {});
    }

    return {};
  }
}
