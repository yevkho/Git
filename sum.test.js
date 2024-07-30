// const sum = require("./sum");
import capitalize from "./capitalize";
import reverse from "./reverse";
import calculator from "./calculator";
import caesarCipher from "./caesarCipher";

test("capitalize word", () => {
  expect(capitalize("string")).toBe("String");
  expect(capitalize("open")).toBe("Open");
});

test("reverse string", () => {
  expect(reverse("hello")).toBe("olleh");
  expect(reverse("running")).toBe("gninnur");
});

test("calculator", () => {
  expect(calculator.sum(1, 2)).toBe(3);
  expect(calculator.subtract(2, 1)).toBe(1);
  expect(calculator.multiply(2, 2)).toBe(4);
  expect(calculator.divide(10, 5)).toBe(2);
});

test("caesar cipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc"); // wrapping
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr"); // case
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!"); // punctuation
});
