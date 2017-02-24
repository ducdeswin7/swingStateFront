import React from 'react';
let BarChart = require("react-chartjs").Bar;

class ElectoralCollege extends React.Component {

    render() {
        let barOption =  {
            responsive: true,
            barValueSpacing: 2,
            segmentStrokeColor: "transparent",
            multiTooltipTemplate: "<%= datasetLabel %> - <%= value + ' %' %>"
        };

        let barChartData = {
            labels: this.props.labels,
            datasets: [
                {
                fillColor: this.props.color,
                strokeColor: "transparent",
                borderColor: "transparent",
                data: this.props.data
            }
            ]
        };

        return (
            <BarChart
                width={600}
                height={350}
                data={barChartData}
                option={barOption} />
        )
    }
}

export default ElectoralCollege;