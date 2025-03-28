const { ACommand } = require("../parser/parser");
const { translate } = require("../translator/translator");

test("translate ACommand @1", () => {
  const command = new ACommand(1);
  const result = translate([command]);
  expect(result[0]).toBe("0000000000000001");
});
