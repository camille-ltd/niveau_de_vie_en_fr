// GRAPHIQUE 1 //
const url = "http://127.0.0.1:8000/"

Highcharts.getJSON(url + "graph",
  function (data) {
    const femmes = data.map(d => [d.annee, d.femmes]);
    const hommes = data.map(d => [d.annee, d.hommes]);
    const total = data.map(d => [d.annee, d.total]);

    Highcharts.chart('container', {

      title: {
        text: 'Evolution du taux de chômage par sexe de 1975 à 2019'
      },

      yAxis: {
        title: {
          text: 'Taux de chomage'
        }
      },

      xAxis: {
        tickInterval: 5,
        accessibility: {
          rangeDescription: 'Range: 1975 to 2019'
        }
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 1975
        }
      },

      series: [{
        name: 'Femmes',
        data: femmes
      }, {
        name: 'Hommes',
        data: hommes
      }, {
        name: 'Total',
        data: total
      }],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }

    })
  }
)
  ;


// GRAPHIQUE 2 //
Highcharts.getJSON(url + "graph2",
  function (data) {
    const dette = data.map(d => [d.annee, d.revenu_median]);
    Highcharts.chart('container2', {

      title: {  
        text: "Niveau de vie median annuel en € de 1996 à 2018"
      },

      xAxis: {
        tickInterval: 1,
        type: 'Année',
        accessibility: {
          rangeDescription: 'Range: 19996 to 2018'
        }
      },

      yAxis: {
        type: "Revenu median",
        minorTickInterval: 5000,
        accessibility: {
          rangeDescription: 'Range: 17500 to 21500'
        }
      },

      tooltip: {
        headerFormat: '<b>{series.name}</b><br />',
        pointFormat: 'x = {point.x}, y = {point.y}'
      },

      series: [{
        data: dette,
        pointStart: 1996
      }]
    })
  }
);

// GRAPHIQUE 3 //
Highcharts.getJSON(url + "graph3",
  function (data) {
    const dette = data.map(d => [d.annee, d.total]);
    Highcharts.chart('container3', {

      title: {
        text: "Evolution de la dette publique entre 1978 à 2020 en milliards d'€"
      },

      xAxis: {
        tickInterval: 1,
        type: 'Année',
        accessibility: {
          rangeDescription: 'Range: 1978 to 2020'
        }
      },

      yAxis: {
        type: "Dette en milliard d'€",
        minorTickInterval: 5000,
        accessibility: {
          rangeDescription: 'Range: 70 to 2700'
        }
      },

      tooltip: {
        headerFormat: '<b>{series.name}</b><br />',
        pointFormat: 'x = {point.x}, y = {point.y}'
      },

      series: [{
        data: dette,
        pointStart: 1978
      }]
    })
  }
);

// GRAPHIQUE 4 //
Highcharts.getJSON(url + "graph4",
  function (data) {
    const pib = data.map(d => [d.annee, d.valeurs]);
    Highcharts.chart('container4', {

      title: {
        text: "Croissance annuelle du PIB en %"
      },

      xAxis: {
        tickInterval: 1,
        type: 'Année',
        accessibility: {
          rangeDescription: 'Range: 1961 to 2018'
        }
      },

      yAxis: {
        type: "Croissance annuelle du PIB en %",
        minorTickInterval: 1,
        accessibility: {
          rangeDescription: 'Range: 4 to 8'
        }
      },

      tooltip: {
        headerFormat: '<b>{series.name}</b><br />',
        pointFormat: 'x = {point.x}, y = {point.y}'
      },

      series: [{
        data: pib,
        pointStart: 1961
      }]
    })
  }
);

// GRAPHIQUE 5 //
Highcharts.getJSON(url + "graph5",
  function (data) {
    const jardinage = data.map(d => [d.annee, d.jardinage]);
    const sport = data.map(d => [d.annee, d.sport]);
    const divers = data.map(d => [d.annee, d.divers]);
    const camping = data.map(d => [d.annee, d.camping]);

    Highcharts.chart('container5', {

      title: {
        text: 'Part des dépenses de loisirs de 1960 à 2015'
      },

      yAxis: {
        title: {
          text: 'Part des dépenses'
        }
      },

      xAxis: {
        tickInterval: 5,
        accessibility: {
          rangeDescription: 'Range: 1960 to 2015'
        }
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 1960
        }
      },

      series: [{
        name: 'Jardinage',
        data: jardinage
      }, {
        name: 'Sport',
        data: sport
      }, {
        name: 'Divers',
        data: divers
      }, {
        name: 'Camping',
        data: camping
      }],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }

    })
  }
)
  ;




