export default function validateInput(text) {
  if (!text) {
    return {
      result: false,
      err: 'Please, write HEX like #ff33a5',
    };
  }

  if (text.length !== 7) {
    return {
      result: false,
      err: 'Write 7 symbols with # like #123456',
    };
  }

  if (text[0] !== '#') {
    return {
      result: false,
      err: 'HEX would be start with # like #ff33a5',
    };
  }

  for (let i = 1; i < 7; i += 1) {
    if (text[i].search(/[0-9a-fA-F]/) === -1) {
      return {
        result: false,
        err: 'HEX can be 0-9, a-f или A-F like #ab09ef',
      };
    }
  }

  return { result: true };
}