const { parse } = require("../parser/parser");
const { translate } = require("../translator/translator");

test("integration test: @1 → 0000000000000001", () => {
  const assembly = ["@1"];
  const binary = translate(parse(assembly));
  expect(binary).toEqual(["0000000000000001"]);
});
