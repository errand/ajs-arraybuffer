import ArrayBufferConverter from '../ArrayBufferConverter';

test('Should convert ArrayBuffer to string', () => {
  function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return ((input) => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      /* eslint-disable no-plusplus */
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  }

  const arrayBufferConverter = new ArrayBufferConverter();
  arrayBufferConverter.load(getBuffer());

  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const received = arrayBufferConverter.toString();

  expect(received).toEqual(expected);
});
