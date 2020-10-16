function matchesWon(matches) {
    const result = {};
    for (let match of matches) {
      const season = match.winner;
      if (result[season]) {
        result[season] += 1;
      } else {
        result[season] = 1;
      }
    }
    return result;
  }
  module.exports = matchesWon;
  