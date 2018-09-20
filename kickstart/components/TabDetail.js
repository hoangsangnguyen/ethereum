import React, { Component } from 'react';
import { Container, Image, Grid } from 'semantic-ui-react';
import { Link } from '../routes';
import OverviewCampaign from './Home/OverviewCampaign';
import CampaignList from './Home/CampaignList';

class TabDetail extends Component {
    static async getInitialProps(props) {
        const { category } = props.category;
        const { type } = props.type;
        return { category, type };
    }

    render() {
        return (
            <Container style={{ marginTop: '29px' }}>
                <a style={{ fontSize: '30px' }}>{this.props.category}</a>

                <Link route={`/`}>
                    <a style={{ marginLeft: '20px' }}>View all</a>
                </Link>
                <i aria-hidden='true' class='arrow right disabled icon' />

                <br />

                <h5>FEATURED PROJECT</h5>

                <Grid>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <OverviewCampaign />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <CampaignList />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>




            </Container>
        );
    }
}

export default TabDetail;