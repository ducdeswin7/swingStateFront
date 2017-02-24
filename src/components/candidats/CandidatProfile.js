import React from 'react';

class CandidatProfile extends React.Component {
    showBiography() {
        return this.props.selectedCandidate.biography.map((biography, i) => {
            return (
                <div key={i} className="informations_block">
                    <h3 className="informations_block_title">{biography.title}</h3>
                    <p>{biography.content}</p>
                </div>
            )
        });
    }

    showKeyEvent() {
        return this.props.selectedCandidate.candidate_event.map((event, i) => {
            let alignEnd = {
                alignItems: 'flex-end'
            };
            return (
                <div key={i} className={(i%2 == 0? 'keyevents_block_content alignEnd':'keyevents_block_content alignEnd')}>
                    <h3 className="keyevents_block_content_title">{event.year}</h3>
                    <p className="keyevents_block_content_text">
                        {event.content}
                    </p>
                </div>
            )
        });
    }

    render() {
        var imgProfileUrl = "https://pmctvline2.files.wordpress.com/2016/08/the-simpsons-donald-trump-episode.jpg";

        return(
            <div className="profile">
                <div className="header">
                    <img src={'http://unitedswingstates.com/uploads/candidates/' + this.props.selectedCandidate.path} className="header_img" alt="Candidat picture"/>
                </div>
                <h1 className="profile_title">{this.props.selectedCandidate.last_name} {this.props.selectedCandidate.first_name}</h1>
                <h2 className="profile_slogan">« {this.props.selectedCandidate.campaign_slogan} »</h2>

                <div className="informations">
                    {this.showBiography()}
                </div>

                <div className="keyevents">
                    <h2 className="keyevents_title">Key events</h2>
                    <hr className="keyevents_hr"/>
                    <div className="keyevents_block">
                        {this.showKeyEvent()}
                    </div>
                </div>
            </div>
        )
    }
}

export default CandidatProfile;