import React, {Component} from 'react';
import List, {ListItem, ListItemText} from 'material-ui/List';
import {ResumeApps, OldApps} from "../assets/Apps";
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

class AppList extends Component {
    render()
    {
        return (
            <div>
                <Typography gutterBottom variant="headline" component="h2">Current Projects</Typography>
                <MuiThemeProvider theme={customTheme}>
                    <div style={styles.appsList}>
                        <List>
                            {ResumeApps.map(sections => (
                                sections.apps.map(app => (
                                    <a href={app.link} style={styles.link} key={app.key} target="_blank">
                                        <ListItem>
                                            <i className={'fab ' + app.icon} style={styles.icon}/>
                                            <ListItemText primary={app.title} secondary={app.description}/>
                                        </ListItem>
                                    </a>
                                ))
                            ))}
                        </List>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

class OldAppsList extends Component {
    render()
    {
        return (
            <div>
                <Typography gutterBottom variant="headline" component="h2">Vintage Projects</Typography>
                <MuiThemeProvider theme={customTheme}>
                    <div style={styles.appsList}>
                        <List>
                            {OldApps.map(sections => (
                                sections.apps.map(app => (
                                    <a href={app.download} style={styles.link} key={app.key}>
                                        <ListItem>
                                            <i className={'fas ' + app.icon + ' fa-2x'}/>
                                            <ListItemText primary={app.title} secondary={app.description}/>
                                        </ListItem>
                                    </a>
                                ))
                            ))}
                        </List>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const customTheme = createMuiTheme({
    overrides: {
        MuiListItemText: {
            'primary': {
                '&:hover': {
                    textDecoration: 'underline'
                }
            }
        },
        MuiListItem: {
            root: {
                color: '#002984',
                '&:hover': {
                    color: '#3f51b5',
                }
            }
        }
    }
});

const styles = {
    appsList: {
        width: '100%',
    },
    icon: {
        fontSize: 32
    },
    link: {
        textDecoration: 'none'
    }
};

export {AppList, OldAppsList};