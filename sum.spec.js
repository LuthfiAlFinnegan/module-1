const { sum } = require("./sum");

test("Testing sum function", () => {
  expect(sum(10, 5)).toBe(15);
  expect(sum(10, 10)).toBe(20);
});
