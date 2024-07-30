export default function caesarCipher(string, key) {
  key = key % 26;

  return string
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/)) {
        return String.fromCharCode(((char.charCodeAt(0) - 97 + key) % 26) + 97);
      } else if (char.match(/[A-Z]/)) {
        return String.fromCharCode(((char.charCodeAt(0) - 65 + key) % 26) + 65);
      } else {
        return char;
      }
    })
    .join("");
}
