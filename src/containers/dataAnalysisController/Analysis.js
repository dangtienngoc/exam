import React, { Component } from 'react';
import { Chart, Axis, Geom, Tooltip, Legend } from "bizcharts";
import DataSet from '@antv/data-set';
import { data } from './dataAnalysis';

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
