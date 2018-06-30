import React, {Component} from 'react';
import {LinearProgress} from '@material-ui/core/Progress';
import Moment from 'moment';

export default class Experiance extends Component {
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
                            <i className={item.icon}/>{item.text !== undefined ? (<div style={{ marginTop: '-4px' }}>{item.text}</div>) : ''}
                            <ListItemText>
                                <LinearProgress variant="determinate" value={item.progress}/>
                            </ListItemText>
                            {item.total} years
                        </ListItem>
                    ))
                    }
                </List>
            </div>);
    }
}