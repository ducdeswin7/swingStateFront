import React from 'react';
import Donut from './Donut/Donut';

class PreElections extends React.Component {

    renderPoll() {
        return (
            this.props.polls.map((poll, i) => {
                return (
                    <div key={i} className="state-data_content_polls_item">
                        <Donut democrat={poll.democrat_value}
                               republican={poll.republican_value} />
                        <h3 className="state-data_content_polls_item_title">{poll.name_value}</h3>
                        <p className="state-data_content_polls_item_text">{poll.date_value}</p>
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <div className="state-data_content_polls">
                {this.renderPoll()}
            </div>
        )
    }
}

export default PreElections;