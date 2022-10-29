/**
 *
 * @param {number} bin
 */
function binToDecimal(bin) {
  const str = bin.toString();
  const [ints, floats] = str.split('.');
  for (let i = 0; i < ints.length; i++) {
    if (ints[i] !== '0' && ints[i] !== '1')
      throw new Error('二進数で入力してください');
  }
  for (let i = 0; i < floats.length; i++) {
    if (floats[i] !== '0' && floats[i] !== '1')
      throw new Error('二進数で入力してください');
  }

  let decimal = 0;
  let float = 0;

  for (let i = ints.length - 1; 0 <= i; i--) {
    const x = ints.length - (i + 1);
    decimal += Number(ints[i]) * Math.pow(2, x);
  }

  for (let i = 0; i < floats.length; i++) {
    const x = -(1 + i);
    console.log({ a: Math.pow(2, x), x });
    float += Number(floats[i]) * Math.pow(2, x);
  }

  return decimal + float;
}

const a = 11101.1101;
const b = 1.110111111;
console.log(binToDecimal(b));
