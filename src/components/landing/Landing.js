import React from 'react';
import {Link} from 'react-router';

require('./landing.css');

let imgUrl = '../../images/img_landing.jpg';
let style = {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundSize: 'cover',
    overflow: 'hidden',
};

class Landing extends React.Component {
    render() {
        return (
            <div className="landing" style={style}>
                <div className="absolute-center">
                    <h1 className="united">United</h1>
                    <h2 className="swing-state"><span className="swing-state_red">Swing </span><span className="swing-state_blue">states</span> </h2>
                    <p className="subtext">Welcome here dear user,
                        you will find through this experience a mass of datas about the presidential election. The goal of United Swing States
                        it’s to ease the access of these datas and everything around each election from 1980 to nowadays.</p>

                    <div className="enter">
                        <Link to={"home"} className="enter_button">Enter</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;