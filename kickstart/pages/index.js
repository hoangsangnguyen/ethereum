import React, { Component } from 'react';
import { Card, Button, Segment, Grid, Image, Label, List, Divider } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';
import TabCampaign from '../components/TabCampaign';

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaign().call();
        return { campaigns };
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`}>
                        <a>View Campaign</a>
                    </Link>
                ),
                fluid: true
            }
        });

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <div>
                <Layout>
                    <Grid columns='three' divided>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <List>
                                    <List.Item>
                                        September 19, 2018
                                    </List.Item>
                                    <List.Item>
                                        Bringing creative projects to life.
                                    </List.Item>
                                </List>
                            </Grid.Column>

                            <Grid.Column width={4}>
                                <List>
                                    <List.Item>
                                        TOTAL BACKERS
                                    </List.Item>
                                    <List.Item>
                                        15.199.786
                                    </List.Item>
                                </List>
                            </Grid.Column>

                            <Grid.Column width={4}>
                                <List>
                                    <List.Item>
                                        FUNDED PROJECTS
                                    </List.Item>
                                    <List.Item>
                                        150.551
                                    </List.Item>
                                </List>
                            </Grid.Column>

                            <Grid.Column width={4}>
                                <List>
                                    <List.Item>
                                        LIVE PROJECTS
                                    </List.Item>
                                    <List.Item>
                                        3.622
                                    </List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Divider/>

                    <TabCampaign/>
                    {/* <h3>Open Campaigns</h3>
                    <Link route="/campaigns/new">
                        <a>
                            <Button
                            floated="right"
                            content="Create Campaign"
                            icon="add circle"
                            primary
                            />
                        </a>
                    </Link> */}
                    {this.renderCampaigns()}
                </Layout>
            </div>
        );

    }
}

export default CampaignIndex;