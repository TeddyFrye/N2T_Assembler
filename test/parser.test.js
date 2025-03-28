const { parse, Command } = require("../parser/parser");

test("parse instruction @1", () => {
  const result = parse(["@1"]);
  expect(result[0] instanceof Command).toBe(true);
  expect(result[0].address).toBe(1);
});
