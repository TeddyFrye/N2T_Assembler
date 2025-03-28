function test_parse_acommand() {
  // this isn't how jest works at all
  // charles's bad fake JS, use for inspo but don't copy
  assert(typeof parser(["@1"])[0] == "ACommand");
  assert(parser(["@1"])[0].address == 1);
}

class Command {
  constructor(address) {
    this.address = address;
  }
}

function parse(code) {
  return [new Command(1)];
}

module.exports = { parse, Command };
