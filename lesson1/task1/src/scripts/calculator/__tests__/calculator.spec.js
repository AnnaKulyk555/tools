import { sum, mult } from "../calculator";

it("should return sum of numbers", () => {
  expect(sum(1, 2)).toEqual(3);
});

it("should return mult of numbers", () => {
  expect(mult(1, 2)).toEqual(2);
});
