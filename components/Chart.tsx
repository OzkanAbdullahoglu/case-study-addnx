import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useContext } from 'react';
import { CHART_SECONDARY_COLOR, PRIMARY_COLOR } from '../constants/Colors';

import { ListContext } from '../providers/ListProvider';

export default function Chart() {
  const { data } = useContext(ListContext);
  const categories = data?.['events'].map((elm) => parseInt(elm.date, 10));
  const chartData = data?.['events'].map((elm) => elm.int);

  const options: Highcharts.Options = {
    chart: {
      height: 500,
    },
    title: {
      text: 'ADDINEX',
      style: { color: CHART_SECONDARY_COLOR },
    },
    labels: {
      style: { color: PRIMARY_COLOR },
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Date',
        margin: 50,
        style: {
          fontSize: '18',
          color: CHART_SECONDARY_COLOR,
        },
      },
      labels: {
        enabled: true,
        format: '{value:%Y-%m-%d %H:%M}',
        style: {
          fontSize: '12',
          color: PRIMARY_COLOR,
        },
      },
      categories,
    },
    yAxis: {
      title: {
        text: 'Event Values',
        margin: 50,
        style: {
          fontSize: '18',
          color: CHART_SECONDARY_COLOR,
        },
      },
      labels: {
        style: {
          fontSize: '12',
          color: PRIMARY_COLOR,
        },
      },
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '14',
            color: CHART_SECONDARY_COLOR,
          },
        },
      },
    },
    series: [
      {
        type: 'line',
        data: chartData,
        name: 'Addinex Events',
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
