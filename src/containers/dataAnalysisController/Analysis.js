import React, { Component } from 'react';
import { Chart, Axis, Geom, Tooltip, Legend } from "bizcharts";
import DataSet from '@antv/data-set';
import { data } from './dataAnalysis';

// const data = [
//   { month: 'Jan', Tokyo: 7.0, London: 3.9 },
//   { month: 'Feb', Tokyo: 6.9, London: 4.2 },
//   { month: 'Mar', Tokyo: 9.5, London: 5.7 },
//   { month: 'Apr', Tokyo: 14.5, London: 8.5 },
//   { month: 'May', Tokyo: 18.4, London: 11.9 },
//   { month: 'Jun', Tokyo: 21.5, London: 15.2 },
//   { month: 'Jul', Tokyo: 25.2, London: 17.0 },
//   { month: 'Aug', Tokyo: 26.5, London: 16.6 },
//   { month: 'Sep', Tokyo: 23.3, London: 14.2 },
//   { month: 'Oct', Tokyo: 18.3, London: 10.3 },
//   { month: 'Nov', Tokyo: 13.9, London: 6.6 },
//   { month: 'Dec', Tokyo: 9.6, London: 4.8 }
// ];
class Analysis extends Component {
  render() {
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'fold',
      fields: [ 'men', 'female' ],
      key: 'city',
      value: 'population',
    });
    const cols = {
      month: {
        range: [ 0, 1 ]
      }
    };
    return (
      <div>
        <div className="heading">Data Analysis</div>
        <div>
          <Chart height={400} data={dv} scale={cols} forceFit>
            <Legend />
            <Axis name="year" />
            <Axis name="population" label={{formatter: val => `${val/1000}K`}}/>
            <Tooltip crosshairs={{type : "y"}}/>
            <Geom type="line" position="year*population" size={2} color={'city'} />
            <Geom type='point' position="year*population" size={4} shape={'circle'} color={'city'} style={{ stroke: '#fff', lineWidth: 1}} />
          </Chart>
        </div>
      </div>
    );
  }
}

export default Analysis;
