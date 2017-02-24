import React from 'react';

require('./progressBarInfo.css')

class ProgressBarInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            progress: {
            }
        }
    }

    getTotal(democratValue, republicanValue, otherValue) {
        return parseInt(democratValue) + parseInt(republicanValue) + parseInt(otherValue);

    }

    getPercent(value, total) {
        return (parseInt(value) * 100) / parseInt(total);
    }

    render () {

        let total = this.getTotal(this.props.election.democrat_value, this.props.election.republican_value, this.props.election.other_value);
        let democratPercent = this.getPercent(this.props.election.democrat_value, total);
        let republicanPercent = this.getPercent(this.props.election.republican_value, total);
        let otherPercent = this.getPercent(this.props.election.other_value, total);

        let bluePartStyle = {
            color: 'white',
            width: democratPercent + '%',
        };

        let redPartStyle = {
            color: 'white',
            width: republicanPercent + '%'
        };

        let swingPartStyle = {
            color: '',
            width: otherPercent + '%',
            backgroundColor: 'white',
        };

        console.log('calcaut', total);

        return (
            <div className="progress-info">
                <div className="progress-info_bar">
                    <div style={redPartStyle} className="progress_bar_red"></div>
                    <div style={swingPartStyle}></div>
                    <div style={bluePartStyle} className="progress_bar_blue"></div>
                </div>
            </div>
        )
    }
}

export default ProgressBarInfo;