import React, {Component} from 'react';
import Modal from 'material-ui/Modal';

const styles = {
    worldMap: {
        width: '1200px',
        height: '666px',
    },
    paper: {
        top: '50%',
        left: '50%',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        padding: 5,
        backgroundColor: '#dfdfdf'
    },
};

class WorldMap extends Component {
    componentDidMount()
    {
        this.drawMap();
    }

    componentDidUpdate()
    {
        this.drawMap();
    }

    drawMap()
    {
        window.google.charts.load('current', {
            'packages': ['geochart'],
            // https://developers.google.com/chart/interactive/docs/gallery/geochart
            'mapsApiKey': process.env.REACT_APP_GOOGLE_MAP_API
        });
        window.google.charts.setOnLoadCallback(drawRegionsMap);

        function drawRegionsMap()
        {
            const data = window.google.visualization.arrayToDataTable([
                ['Country', 'Visits'],
                ['Canada', 1],
                ['England', 1],
                ['Spain', 1],
                ['France', 1],
                ['Italy', 1],
                ['Mexico', 7],
                ['Guatemala', 2],
                ['Honduras', 1],
                ['Belize', 1],
                ['Turkey', 1],
                ['Belize', 1],
                ['Thailand', 1],
                ['Czech Republic', 1],
                ['Netherlands', 1],
                // ['USA', 10],
            ]);

            const options = {
                colorAxis: { colors: ['#88C9A0', '#287D47'] },
                backgroundColor: '#333333',
                datalessRegionColor: '#efefef',
                defaultColor: '#88B2CC',
                legend: 'none'
            };

            let chart = new window.google.visualization.GeoChart(document.getElementById('worldMap'));

            chart.draw(data, options);
        }
    }

    render()
    {
        return (
            <div id="worldMap" style={styles.worldMap}/>
        );
    }
}

class MapModal extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            open: props.open
        };
    }

    handleClose()
    {
        this.setState({ open: false });
    };

    componentWillReceiveProps(nextProps)
    {
        if (nextProps.open !== this.state.open)
        {
            this.setState({ open: nextProps.open });
        }
    }

    render()
    {
        return (
            <div>
                <Modal
                    aria-labelledby="World Map"
                    aria-describedby="The countries I've visited"
                    open={this.state.open}
                    onClose={() => this.handleClose()}>
                    <div style={styles.paper}>
                        <WorldMap/>
                    </div>
                </Modal>
            </div>
        );
    }
}

export {WorldMap, MapModal};