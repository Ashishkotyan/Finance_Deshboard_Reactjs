import React from "react";
import ReactApexChart from 'react-apexcharts'
import { Component } from "react";

 export default class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        
        series: [props.value],
        options: {
          chart: {
            height: 70,
            type: 'radialBa',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '70%',
              }
            },
          },
          labels: [props.word],
        },
      
      
      };
    }

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={200} />
</div>
      )}
 }