Meteor.startup(function () {

    chart = {
      target: 'chart1',
      type: 'BarChart',
      columns: [
        ['string', 'Items'],
        ['number', 'Letters']
      ],
      rows: [
        ['TransUnion', 16],
        ['Experian', 6],
        ['Equifax', 4]
      ],
      options: {
        'title':'Here is the progress for your letters',
        'width':430,
        'height':300
      }
    };

    drawChart(chart);

    chart2 = {
      target: 'chart2',
      type: 'Map',
      data: [
        ['Country', 'Population'],
        ['China', 'China: 1,363,800,000'],
        ['India', 'India: 1,242,620,000'],
        ['US', 'US: 317,842,000'],
        ['Indonesia', 'Indonesia: 247,424,598'],
        ['Brazil', 'Brazil: 201,032,714'],
        ['Pakistan', 'Pakistan: 186,134,000'],
        ['Nigeria', 'Nigeria: 173,615,000'],
        ['Bangladesh', 'Bangladesh: 152,518,015'],
        ['Russia', 'Russia: 146,019,512'],
        ['Japan', 'Japan: 127,120,000']
      ]
    };

    drawChart(chart2);

  });
