import React from 'react';
import PreElections from './preElections';
import ElectoralCollege from './ElectoralCollege';
import ProgressBarInfo from '../../progressBar/ProgressBarInfo';
import KeyFigures from './KeyFigures';
let _ = require('lodash');

class StateData extends React.Component {
    showRecentElection() {
        return (
            this.props.state.recent_election.map((election, i) => {
                return (<ProgressBarInfo key={i} election={election} />);
            })
        )
    }

    render() {
        let imgUrl = 'http://unitedswingstates.com/uploads/states/' + this.props.state.path;
        let backgroundStyle = {
            background: 'url(' + imgUrl + ')no-repeat',
            backgroundSize: 'contain',
            overflow: 'hidden',
        };

        let electoral_college_data = [],
            electoral_college_color = [],
            electoral_college_label = [];

        _.each(this.props.state.electoral_college, (college) => {
           electoral_college_color.push(college.party.party_color);
            electoral_college_data.push(college.value);
            electoral_college_label.push(college.election.year)

        });

        console.log('props', this.props.state.electoral_college);

        console.log('electoral_college_color', electoral_college_color);
        console.log('electoral_college_data', electoral_college_data);


        return (
            <div className="state-data">
                <div className="state-data_header" style={backgroundStyle}>
                    <h1 className="state-data_header_title">{this.props.state.name}</h1>
                </div>
                <div className="state-data_content">
                    <h2 className="state-data_content_title">
                        Context of the election
                    </h2>

                    <div className="state-data_content_informations">
                        <p> {this.props.state.state_context[0].content} </p>
                    </div>
                    <h2 className="state-data_content_title">
                        Pre-election polls
                    </h2>

                    <PreElections polls={this.props.state.poll[0].poll_data} />

                    <div className="state-data_content_title-double">
                        <div className="state-data_content_title-double_container">
                            <h2 className="state-data_content_title-double_container_title">Electoral college</h2>
                            <h2 className="state-data_content_title-double_container_title">Recent elections</h2>
                        </div>
                    </div>

                    <div className="state-data_content_informations">
                        <div className="state-data_content_informations_block">
                            <ElectoralCollege labels={electoral_college_label}
                                              data={electoral_college_data}
                                              color={electoral_college_color} />
                        </div>

                        <div className="state-data_content_informations_block">
                            {this.showRecentElection()}
                        </div>
                    </div>

                    <h2 className="state-data_content_title">
                        Key Figures
                    </h2>

                    <KeyFigures />

                </div>
            </div>
        )
    }
}

export default StateData;