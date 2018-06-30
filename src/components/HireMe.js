import React, {Component} from 'react';
import Card, {CardContent} from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import List, {ListItem, ListItemText, ListItemIcon} from '@material-ui/core/List';
import Radium from 'radium';

let ListIcon = () => {
    return (
        <ListItemIcon>
            <i className={this.props.icon} />
        </ListItemIcon>
    )
};

ListIcon = Radium(ListIcon);

export default class HireMe extends Component {
    render()
    {
        return (
            <div>
                <Card>
                    <div>
                        <CardContent>
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
                                        <i className="fas fa-server fa-2x"/>
                                    </ListItemIcon>
                                    <ListItemText primary="Server/Hosting management"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <i className="fas fa-globe fa-2x"/>
                                    </ListItemIcon>
                                    <ListItemText primary="DNS management"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <i className="fas fa-code fa-2x"/>
                                    </ListItemIcon>
                                    <ListItemText primary="Build/Update websites"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <i className="fas fa-certificate fa-2x"/>
                                    </ListItemIcon>
                                    <ListItemText primary="SSL certificate install/renew"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <i className="fab fa-laravel fa-2x"/>
                                    </ListItemIcon>
                                    <ListItemText primary="Laravel"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <i className="fab fa-wordpress fa-2x"/>
                                    </ListItemIcon>
                                    <ListItemText primary="WordPress"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <i className="fab fa-chrome fa-2x"/>
                                    </ListItemIcon>
                                    <ListItemText primary="Chrome extensions"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <i className="fas fa-info-circle fa-2x"/>
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