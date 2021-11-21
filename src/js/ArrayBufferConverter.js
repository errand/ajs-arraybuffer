/** @module ArrayBufferConverter
 * Class creating ArrayBufferConverter. Convert data form binary to string
 */
export default class ArrayBufferConverter {
  /**
   * Create a point.
   */
  constructor() {
    this.buffer = '';
  }

  /**
   * Load buffer into the memory as Uint16Array
   * @param {ArrayBuffer} buffer - ArrayBuffer for further conversion
   */
  load(buffer) {
    this.buffer = new Uint16Array(buffer);
  }

  /**
   * Converts Uint16Array into string using String.fromCharCode
   * @return {string} the result of the String.fromCharCode method
   */
  toString() {
    return String.fromCharCode.apply(null, this.buffer);
  }
}
