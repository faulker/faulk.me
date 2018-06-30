import React, {Component} from 'react';
import {MapModal} from './components/WorldMap.js';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import Radium from 'radium';

let ListIcon = (props) => {
    return (
        <ListItemIcon>
            <i className={props.icon}/>
        </ListItemIcon>
    );
};

ListIcon = Radium(ListIcon);

export default class About extends Component {
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
            <div id="about">
                <Typography gutterBottom variant="headline" component="h2">
                    Background
                </Typography>
                <Typography component="p" style={{paddingTop: 20, textIndent: '20px'}}>
                    I fell in love with all things computer related when I was 12 years old. My first computer was a Packard Bell with an Intel 486 and 16MB of RAM. After breaking the system over and over again my father got sick of having to pay someone else to fix it and had one of his
                    friends show me how to fix it myself. From that point on I spent hours each day on the system breaking, fixing, and tweaking it. I learned to code in Basic on that system and it was the first system that connected me to the internet. Over the years I continued to learn and taught
                    myself how to write in a number of languages from HTML to asm86, I learned Visual Basic, and QuakeC (so I could make Quake mods). I spent my teenage years learning that I loved the security and networking side of computers
                    and once I was done with high school I got a multiple Microsoft, Cisco, and CompTIA certificates. Over the next 14 years I worked in the computer field doing everything from network infrastructure to IT support, all the while continuing to learn how to code/script in
                    a number of other languages such as Visual C#, Python and PHP.
                </Typography>
                <br/>
                <Typography component="p" style={{paddingBottom: 20, textIndent: '20px'}}>
                    A few years ago I realized I enjoyed coding more than the hardware/networking side of things and switched careers to be a full-time developer. These days I build sites using the PHP framework Laravel and the JavaScript libraries Vue.js and React.
                </Typography>

                <Divider/>
                <Typography gutterBottom variant="headline" component="h2">
                    Random things about me
                </Typography>
                <List className="about-me-list">
                    <ListItem>
                        <ListIcon icon="icon-camera" />
                        <ListItemText>I am a hobby <a href="http://down-time.com" target="_blank" rel="noopener noreferrer">photographer</a></ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListIcon icon="icon-fight" />
                        <ListItemText primary="I've done martial arts for most of my life" secondary="I am currently learning Krav Maga"/>
                    </ListItem>
                    <ListItem>
                        <ListIcon icon="icon-audiobook" />
                        <ListItemText>I really enjoy listening to audiobooks</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListIcon icon="icon-travel" />
                        <ListItemText onClick={() => this.setState({ modalOpen: true })}>I've traveled the world and it is amazing</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListIcon icon="icon-domino" />
                        <ListItemText primary="My favorite numbers is 365563" secondary="Yes one of the reasons I like it is because it is a palindrome"/>
                    </ListItem>
                </List>
                <MapModal open={this.state.modalOpen}/>
            </div>
        );
    }
}