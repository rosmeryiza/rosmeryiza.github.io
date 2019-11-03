Highcharts.chart('introChart', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Methane Emissions from Enteric Fermentation'
    },
    subtitle: {
        text: 'Source: uga.edu'
    },
    xAxis: {
        categories: [
            'Cows',
            'Pigs',
            'Chickens'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Methane per animal per year (lbs)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} lbs</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Methane per animal per year',
        data: [271, 10.5, 0.57]
    }]
});

Highcharts.chart('cowChart', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Carbon Footprint of Beef Production by Region'
    },
    subtitle: {
        text: 'Source: https://www.researchgate.net/publication/278730159 <br> Table 1, Global Carbon Footprint Studies Associated with Beef Production'
    },
    xAxis: {
        categories: [
        		'Brazil',
        		'Mid-West USA',
            'European Union',
            'Canada',
            'United Kingdom',
            'Ireland',
            'Australia',
            'Sweden'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Carbon Footprint of Beef Production (kg CO2 emissions per kg live weight)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} kg CO2e per kg LW</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'kg CO2e per kg LW',
        data: [36.7, 34, 25.7, 23.7, 19.1, 13.0, 12.7, 11.6]
    }]
});

Highcharts.chart('pigChart', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Pig Production Emissions by Region'
    },
    subtitle: {
        text: 'Source: GLEAM'
    },
    xAxis: {
        categories: [
            'Eastern and Southeastern Asia',
            'Western Europe',
            'North America',
            'Latin America and the Caribbean',
            'Eastern Europe',
            'Russia',
            'South Asia',
            'Sub-Saharan Africa',
            'Oceania'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'CO2 equivalents per year (million metric tons)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} million metric tons</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'CO2 eq. per year',
        data: [326.2, 147.6, 56.3, 62.2, 41.4, 16.1, 12.0, 10.9, 7.8]
    }]
});

Highcharts.chart('chickenChart', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Chicken Production Emissions by Region'
    },
    subtitle: {
        text: 'Source: GLEAM'
    },
    xAxis: {
        categories: [
        		'Latin America and the Caribbean',
            'North America',
            'Eastern and Southeastern Asia',
            'Western Europe',
            'South Asia',
            'Eastern Europe',
            'Sub-Saharan Africa',
            'Russia',
            'Oceania'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'CO2 equivalents per year (million metric tons)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} million metric tons</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'CO2 eq. per year',
        data: [201.4, 200.9, 189.3, 53.1, 36.4, 29.9, 18.4, 17.9, 14.7]
    }]
});
