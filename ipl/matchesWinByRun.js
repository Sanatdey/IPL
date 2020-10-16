function matchesWinByRun(matches) {
    const result = {};
    for (let match of matches) {
      const season = match.winner;
      const year = match.season;
      const run = match.win_by_runs;
      if(year === '2016'){
        if (result[season]) {
            result[season] += Number(run);
        } else {
            result[season] = Number(run);
        }
      }
    }
    return result;
  }
  module.exports = matchesWinByRun;
  