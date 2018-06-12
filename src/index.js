import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import './assets/icons.css';
import registerServiceWorker from './registerServiceWorker';
import {MemoryRouter} from "react-router-dom";

import Tabs, {Tab} from 'material-ui/Tabs';
import CssBaseline from 'material-ui/CssBaseline';
import {LinearProgress} from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import {AppList, OldAppsList} from './components/AppList';
import About from './components/About';

const styles = {
    linearBar: {
        background: 'rgba(12, 36, 97, 1.0)',
        height: 1,
        width: '60%',
    },
    basicInfo: {
        position: 'fixed',
        width: '40vw',
        minHeight: '100vh',
        top: '40vh',
        verticalAlign: 'middle',
        color: '#333',
    },
    resume: {
        left: '40vw',
        position: 'absolute',
        width: '50vw',
        backgroundColor: 'rgba(255, 255, 255, 1.0)',
        minHeight: '100%',
        borderLeft: '1px solid #777',
        borderRight: '1px solid #777',
        padding: '0 30px'
    },
    name: {
        paddingLeft: '3%',
        marginBottom: '1px',
    },
    tabs: {
        paddingBottom: '15px',
    },
};

class LinearBar extends Component {
    render()
    {
        return (
            <div>
                <LinearProgress style={styles.linearBar} className="title-linear-bar"/>
            </div>
        );
    }
}

function TabContainer(props)
{
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

class Index extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            // alignItems: 'center',
            // justify: 'center',
            // direction: 'row',
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
            <div>
                <div style={styles.basicInfo}>
                    <div className='basic-info'>
                        <h1 style={styles.name}>Winter Faulk</h1>
                        <LinearBar/>
                        <div className="social-links">
                            <a href={this.links.linkedin} title="Linked-In"><i className="fab fa-linkedin fa-2x"/></a>
                            <a href={this.links.github} title="github"><i className="fab fa-github-square fa-2x"/></a>
                        </div>
                    </div>
                </div>
                <div style={styles.resume} className="resume">
                    <Tabs
                        style={styles.tabs}
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered>
                        <Tab label="About"/>
                        <Tab label="Projects"/>
                        {/*<Tab label="Applications"/>*/}

                    </Tabs>
                    {value === 0 && <TabContainer>
                        <About/>
                    </TabContainer>}

                    {value === 1 && <TabContainer>
                        <AppList/>
                        <Divider style={styles.divider}/>
                        <br/>
                        <OldAppsList/>
                    </TabContainer>}

                    {/*{value === 2 && <TabContainer>*/}
                    {/*</TabContainer>}*/}
                </div>
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

registerServiceWorker();
