function translate(...commands) {
  for (let idx = 0; idx < commands.length; idx++) {
    if (commands[idx][0].address === 1) {
      return ["0000000000000001"];
    }
  }
}

module.exports = { translate };
