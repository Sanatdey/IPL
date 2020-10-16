const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWon = require("./ipl/matchesWon");
const matchesWinByRun = require("./ipl/matchesWinByRun");
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_OUTPUT_FILE_PATH_WON = "./public/data_won.json";
const JSON_OUTPUT_FILE_PATH_2016 = "./public/data_2016.json";
function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      let result = matchesPlayedPerYear(matches);
      saveMatchesPlayedPerYear(result);
      let res = matchesWon(matches);
      saveMatchesWon(res);
      let run = matchesWinByRun(matches);
      //saveMatchesWinByRun(run);
      console.log(run);

    });
}

function saveMatchesPlayedPerYear(result) {
  const jsonData = {
    matchesPlayedPerYear: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}


function saveMatchesWinByRun(result) {
  const jsonData = {
    matchesPlayedPerYear: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_2016, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}


function saveMatchesWon(result) {
  const jsonData = {
    matchesPlayedPerYear: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_WON, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();
