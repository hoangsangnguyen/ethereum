import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button, Embed, Divider } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeFrom';
import { Link } from '../../routes';
import TabCampaign from '../../components/Detail/TabCampaign';


class CampaignShow extends Component {
    state = {
        manager: '',
        title: '',
        description: '',
        videoUrl: '',
        videoUrl : '',
        minimumContribution: '',
        goal: '',
        campaign: '',
        address: ''
    }

    async componentDidMount() {
        const campaign = Campaign(this.props.url.query.address)
        const info = await campaign.methods.getCampaignInfo().call();

        const videoId = this.YouTubeGetID(info['videoFile']);

        this.setState({
            manager: info['manager'],
            title: info['title'],
            description: info['description'],
            videoFile: info['videoFile'] ,
            videoUrl : `https://www.youtube.com/embed/${videoId}`,
            minimumContribution: info['minimumContribution'],
            goal: info['goal'],
        })

    }

    backProject = () => {
        console.log('address');
    }

    YouTubeGetID(url){
        var ID = '';
        url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if(url[2] !== undefined) {
          ID = url[2].split(/[^0-9a-z_\-]/i);
          ID = ID[0];
        }
        else {
          ID = url;
        }
          return ID;
      }
      
    render() {
        console.log('Manager : ', this.state.manager)
        console.log('description : ', this.state.description)
        console.log('title : ', this.state.title)
        console.log('videoUrl : ', this.state.videoUrl)
        console.log('minimumContribution : ', this.state.minimumContribution)
        console.log('Goal : ', this.state.goal)

        return (
            <Layout>
                <h3>{this.state.title}</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <div className="video-detail col-md-8">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe width='800'
                                        height='450'
                                        src={this.state.videoUrl}></iframe>
                                </div>

                            </div>

                        </Grid.Column>

                        <Grid.Column width={4}>
                            <Divider />
                            <div className="details" style={{ marginTop: '40px' }}>
                                <div style={{ color: 'green', 'font-size': '30px' }}>$44,753</div>
                                <div style={{ marginTop: '10px' }}>pledged of $50,000 goal</div>
                                <br />
                                <div style={{ color: 'black', 'font-size': '30px' }}>507</div>
                                <div style={{ marginTop: '10px' }}>backers</div>
                                <br />
                                <Button primary onClick={this.backProject}>Back this project</Button>

                                <div style={{ marginTop: '30px' }}>
                                    <Button circular color='facebook' icon='facebook' />
                                    <Button circular color='twitter' icon='twitter' />
                                    <Button circular color='linkedin' icon='linkedin' />
                                    <Button circular color='google plus' icon='google plus' />
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <br style={{ marginTop: '40px' }} />
                <TabCampaign address = {this.props.url.query.address}/>

                {/* <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                        {this.renderCard()}
                      
                        </Grid.Column>

                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address}/>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                 
                </Grid> */}

            </Layout>
        );
    }
}

export default CampaignShow;