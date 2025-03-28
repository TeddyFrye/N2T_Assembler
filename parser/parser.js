class ACommand {
  constructor(address) {
    this.address = address;
  }
}

function parse(code) {
  if (code[0] === "@1") {
    return [new ACommand(1)];
  } else return undefined;
}

module.exports = { parse, ACommand };
