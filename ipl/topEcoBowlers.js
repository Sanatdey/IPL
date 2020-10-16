function topEcoBowlers(deliveries) {
    const result = {};
    const count = {};
    const economy = {};
    for (let bowl of deliveries) {
      const season = bowl.bowler;
      const match_id = Number(bowl.match_id);
      const run = bowl.total_runs;
      if (match_id>=518 && match_id<=576){
        if(result[season]) {
        result[season] += Number(run);
        count[season] += 1;
        } else {
        result[season] = Number(run);
        count[season] = 1;
        }
      }
    }
    for (const property in result) {
      //console.log(`${property}: ${object[property]}`);
      const run = result[property];
      const ball = count[property];
      economy[property] = run/(ball/6)
    }

    return economy;
  }
  module.exports = topEcoBowlers;
  