const { parse } = require("../src/parser/parser");
const { translate } = require("../src/translator/translator");

test("integration test: @1 → 0000000000000001", () => {
  const assembly = ["@1"];
  const binary = translate(parse(assembly));
  expect(binary).toEqual(["0000000000000001"]);
});
