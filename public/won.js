function fetchAndVisualizeData() {
  fetch("./data_won.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    if(year != ''){seriesData.push([year, matchesPlayedPerYear[year]]);}
    
  }

  Highcharts.chart("matches-won", {
    chart: {
      type: "column"
    },
    title: {
      text: ""
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Team",
        data: seriesData
      }
    ]
  });
}
