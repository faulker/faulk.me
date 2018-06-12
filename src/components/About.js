import React, {Component} from 'react';
import Radium from 'radium';
import Card, {CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import List, {ListItem, ListItemText, ListItemIcon} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {LinearProgress} from 'material-ui/Progress';
import Moment from 'moment';
import Grid from 'material-ui/Grid';
import {MapModal} from './WorldMap.js';

const styles = {
    card: {
        display: 'flex',
        minHeight: 300,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    divider: {
        margin: '15px 0',
    },
    avatar: {
        width: 180,
        height: 180,
        display: 'block',
        margin: '0 auto 10px auto',
    },
    listIcon: {
        fontSize: 32,
        color: '#0a3d62',
        ':hover': {
            color: '#3c6382'
        }
    },
    skillIcon: {
        color: '#0a3d62',
    },
    email: {
        textAlign: 'center'
    }
};

class ListIcon extends Component {
    render()
    {
        return (
            <ListItemIcon>
                <i className={this.props.icon} style={styles.listIcon}/>
            </ListItemIcon>
        );
    }
}

ListIcon = Radium(ListIcon);

class Experiance extends Component {
    static buildExperience()
    {
        const startYear = Moment().year(2001),
              total     = Moment().diff(startYear, 'years');

        return {
            'total': total,
            'breakdown': [
                {
                    'title': 'Dev',
                    'total': total,
                    'progress': 100,
                    'icon': 'fas fa-code'
                },
                {
                    'title': 'PHP',
                    'total': (total - 4),
                    'progress': Math.round(((total - 4) / total) * 100),
                    'icon': 'fab fa-php fa-2x'
                },
                {
                    'title': 'SQL',
                    'total': (total - 12),
                    'progress': Math.round(((total - 12) / total) * 100),
                    'icon': 'fas fa-database',
                    'text': 'SQL'
                },
                {
                    'title': 'laravel',
                    'total': (total - 14),
                    'progress': Math.round(((total - 14) / total) * 100),
                    'icon': 'fab fa-laravel fa-2x'
                },
                {
                    'title': 'react',
                    'total': (total - 16),
                    'progress': Math.round(((total - 16) / total) * 100),
                    'icon': 'fab fa-react fa-2x'
                },
                {
                    'title': 'vue',
                    'total': (total - 16),
                    'progress': Math.round(((total - 16) / total) * 100),
                    'icon': 'fab fa-vuejs fa-2x'
                },
            ]
        };
    }

    render()
    {
        const experience = About.buildExperience();
        return (
            <div>
                <Typography gutterBottom variant="headline" component="h2">
                    Professional experience
                </Typography>
                <List>
                    {experience.breakdown.map(item => (
                        <ListItem key={item.title} style={item.text !== undefined ? { marginTop: '-6px' } : null}>
                            <Grid container
                                  spacing={8}
                                  alignItems="center"
                                  justify="center">
                                <Grid item xs={1} style={{ textAlign: "center" }}>
                                    <i className={item.icon}/>{item.text !== undefined ? (<div style={{ marginTop: '-4px' }}>{item.text}</div>) : ''}
                                </Grid>
                                <Grid item xs={9}>
                                    <ListItemText>
                                        <LinearProgress variant="determinate" value={item.progress}/>
                                    </ListItemText>
                                </Grid>
                                <Grid item xs={2}>
                                    {item.total} years
                                </Grid>
                            </Grid>
                        </ListItem>
                    ))
                    }
                </List>
            </div>);
    }
}

class AboutMe extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            modalOpen: false,
        };
    }

    render()
    {
        return (
            <div>
                <MapModal open={this.state.modalOpen}/>
                <div style={styles.details}>
                    <Typography gutterBottom variant="headline" component="h2">
                        Background
                    </Typography>
                    <Typography component="p">
                        I fell in love with all things computer related when I was 12 years old. My first computer was a Packard Bell with an Intel 486 and 16MB of RAM. After breaking the system over and over again my father got sick of having to pay someone else to fix it and had one of his
                        friends show me how to fix it myself. From that point on I spent hours each day on the system breaking, fixing, and tweaking it. I learned to code in Basic on that system and it was the first system that connected me to the internet. Over the years I continued to learn and taught
                        myself how to write in a number of languages from HTML to asm86, I learned to hate Java by learning to code in it, I learned Visual Basic, and QuakeC (so I could make Quake mods). I spent my teenage years learning that I loved the security and networking side of computers
                        and once I was done with high school I got a multiple Microsoft, Cisco, and CompTIA certificates. Over the next 14 years I worked in the computer field doing everything from network infrastructure to IT support, all the while continuing to learn how to code/script in
                        a number of other languages such as Visual C#, Python and PHP.
                    </Typography>
                    <br/>
                    <Typography component="p">
                        A few years ago I realized I enjoyed coding more than the hardware/networking side of things and switched careers to be a full-time developer. These days I build sites using the PHP framework Laravel and the JavaScript libraries Vue.js and React.
                    </Typography>

                    <Divider style={styles.divider}/>
                    <Typography gutterBottom variant="headline" component="h2">
                        Random things about me
                    </Typography>
                    <List>
                        <ListItem>
                            <ListIcon icon="icon-camera"/>
                            <ListItemText>I am a hobby <a href="http://down-time.com" target="_blank">photographer</a></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListIcon icon="icon-fight"/>
                            <ListItemText primary="I've done martial arts for most of my life" secondary="I am currently learning Krav Maga"/>
                        </ListItem>
                        <ListItem>
                            <ListIcon icon="icon-audiobook"/>
                            <ListItemText>I really enjoy listening to audiobooks</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListIcon icon="icon-travel"/>
                            <ListItemText onClick={() => this.setState({ modalOpen: true })}>I've traveled the world and it is amazing</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListIcon icon="icon-domino"/>
                            <ListItemText primary="My favorite numbers is 365563" secondary="Yes one of the reasons I like it is because it is a palindrome"/>
                        </ListItem>
                    </List>
                </div>
            </div>
        );
    }
}

class HireMe extends Component {
    render()
    {
        return (
            <div>
                <Card style={styles.card}>
                    <div style={styles.details}>
                        <CardContent style={styles.content}>
                            <Typography gutterBottom variant="headline" component="h2">
                                Hire me
                            </Typography>
                            <Typography component="p">
                                Need a website, or maybe you already have one and need it updated.
                                Don't need a website but you do need one migrated from one hosting provider to another or maybe you are having DNS issues or you want a SSL certificate installed.
                                Maybe you want/need a Chrome extension built.
                            </Typography>
                            <br/>
                            <Typography component="p">
                                You can hire me to do all of that and more, send me an email (<a href="mailto:winter@faulk.me">winter@faulk.me</a>) and we can figure out what I can do for you.
                            </Typography>
                            <Divider style={styles.divider}/>
                            <Typography gutterBottom variant="headline" component="h2">
                                Skill set
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <i className="fas fa-server fa-2x" style={styles.skillIcon}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Server/Hosting management"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <i className="fas fa-globe fa-2x" style={styles.skillIcon}/>
                                    </ListItemIcon>
                                    <ListItemText primary="DNS management"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <i className="fas fa-code fa-2x" style={styles.skillIcon}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Build/Update websites"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <i className="fas fa-certificate fa-2x" style={styles.skillIcon}/>
                                    </ListItemIcon>
                                    <ListItemText primary="SSL certificate install/renew"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <i className="fab fa-laravel fa-2x" style={styles.skillIcon}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Laravel"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <i className="fab fa-wordpress fa-2x" style={styles.skillIcon}/>
                                    </ListItemIcon>
                                    <ListItemText primary="WordPress"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <i className="fab fa-chrome fa-2x" style={styles.skillIcon}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Chrome extensions"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <i className="fas fa-info-circle fa-2x" style={styles.skillIcon}/>
                                    </ListItemIcon>
                                    <ListItemText primary="And a lot more"/>
                                </ListItem>
                            </List>
                        </CardContent>
                    </div>
                </Card>
            </div>
        );
    }
}

class About extends Component {
    render()
    {
        return (
            <div>
                <Avatar
                    alt="Winter Faulk"
                    src="/imgs/me.jpg"
                    style={styles.avatar}
                />
                <Typography variant="title" align="center">
                    <a href="mailto:winter@faulk.me" title="Contact me">winter@faulk.me</a>
                </Typography>
                <br/>
                <AboutMe/>
                {/*<br/>*/}
                {/*<HireMe/>*/}
            </div>
        );
    }
}

export default About;