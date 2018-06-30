import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {unregister} from './registerServiceWorker';

import './assets/index.css';
import './assets/icons.css';
import './assets/app-device.css';
import './assets/app-desktop.css';

import {MemoryRouter} from "react-router-dom";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CssBaseline from '@material-ui/core/CssBaseline';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';

import {AppList, OldAppsList} from './components/AppList';
import About from './About';
import Me from './components/Me';
import Footer from './components/Footer';

const TabContainer = (props) => {
    return (
        <Typography component="div" className="tab-content">
            {props.children}
        </Typography>
    );
};

class Index extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            value: 0
        };
        this.links = {
            github: 'https://github.com/faulker',
            linkedin: 'https://www.linkedin.com/in/wfaulk/',
        };
    }

    handleChange = (event, value) => {
        this.setState({
            value
        });
    };

    render()
    {
        const { value } = this.state;
        return (
            <div className="wrapper">
                <div id="avatar" className="section">
                    <Me/>
                </div>

                <div id="header" className="section">
                    <h1 className="my-name">Winter Faulk</h1>
                    <LinearProgress className="title-linear-bar"/>
                    <div className="social-links">
                        <Tooltip
                            title="Email"
                            enterDelay={300}
                        >
                            <a href="mailto:winter@faulk.me"><i className="fas fa-envelope-square fa-2x"/></a>
                        </Tooltip>
                        <Tooltip
                            title="Linked-In"
                            enterDelay={300}
                        >
                            <a href={this.links.linkedin}><i className="fab fa-linkedin fa-2x"/></a>
                        </Tooltip>
                        <Tooltip
                            title="GitHub"
                            enterDelay={300}
                        >
                            <a href={this.links.github}><i className="fab fa-github-square fa-2x"/></a>
                        </Tooltip>
                    </div>
                </div>
                <div id="menu" className="section">
                    <Tabs
                        className="tabs"
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered>
                        <Tab label="About"/>
                        <Tab label="Projects"/>
                    </Tabs>
                </div>
                <div id="content" className="section">
                    {value === 0 && <TabContainer>
                        <About/>
                    </TabContainer>}

                    {value === 1 && <TabContainer>
                        <AppList/>
                        <Divider/>
                        <br/>
                        <OldAppsList/>
                    </TabContainer>}
                </div>
                <Footer className="section"/>
            </div>
        );
    }
}

ReactDOM.render(
    <MemoryRouter>
        <CssBaseline>
            <Index/>
        </CssBaseline>
    </MemoryRouter>,
    document.getElementById('root')
);

unregister();
