import React, {Component} from 'react';

export default class Me extends Component {
    render()
    {
        return (
            <React.Fragment>
                <div className="avatar-img">
                    <img
                        alt="Winter Faulk"
                        src="/imgs/me.jpg"
                    />
                </div>
            </React.Fragment>
        );
    }
}