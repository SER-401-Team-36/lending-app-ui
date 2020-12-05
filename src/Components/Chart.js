import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: false,
    legendPosition: 'right',
    position: 'All',
  };

  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          width={200}
          height={50}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'FPTS Rankings:  ' + this.props.position,
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    display: false,
                  },
                },
              ],
            },
            showLine: false,
            showGrid: false,
          }}
        />
      </div>
    );
  }
}

export default Chart;
