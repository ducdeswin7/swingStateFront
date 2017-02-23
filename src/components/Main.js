import React from 'react';
require('./_reset.css');
require('./main.css');


class Main extends React.Component {
    render() {
        return (
            <div className="main-container">
                {this.props.children}
            </div>
        )
    }
}

export default Main;