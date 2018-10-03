import React, { Component } from 'react';
import { Container, Image, Grid, Card } from 'semantic-ui-react';
import { Link } from '../routes';
import OverviewCampaign from './Home/OverviewCampaign';
import CampaignList from './Home/CampaignList';
import factory from '../ethereum/factory';
import Campaign from '../ethereum/campaign';

class TabDetail extends Component {
    state = {
        campaigns : []
    };
    
    async componentWillReceiveProps(nextProps){
        console.log("recei", this.props, nextProps.campaigns)
        if ( this.props.campaigns !== nextProps.campaigns) {
        console.log(this.props !== nextProps)
            
            let campaigns = await nextProps.campaigns.campaigns.map( async (address, i) => {
                const campaign = Campaign(address);
                let title = await campaign.methods.mTitle().call();
                let imageUrl = await campaign.methods.mImageFile().call();
            // console.log("333333333333333333333", address)
                return {
                    title : title,
                    imageUrl : imageUrl,
                    address : address
                }
            });
    
            // console.log("4444444444444444444444", campaigns)
            Promise.all(campaigns).then((completed) => {
                // console.log('After run didMount : ', completed)
                this.setState({campaigns : completed});
            });
        }
        
       
    }

    renderCampaigns() {
        // console.log(this.state.campaigns);
            let items = this.state.campaigns.map( (campaign, i) => {
                return {
                    header: campaign.title,
                    description: (
                        // <Link route={`/campaigns/${address}`}>
                            <a>{campaign.address}</a>
                        // </Link>
                    ),
                    fluid: true
                }
            });

            return <Card.Group items={items} />;
        }
    
    render() {
        console.log("111111111111111111111111111", this.state.campaigns)
        return (

            <Container style={{ marginTop: '29px' }}>
                <a style={{ fontSize: '30px' }}></a>

                <Link route={`/`}>
                    <a style={{ marginLeft: '20px' }}>View all</a>
                </Link>
                <i aria-hidden='true' class='arrow right disabled icon' />

                <br />

                <h5>FEATURED PROJECT</h5>

                {/* <Grid>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <OverviewCampaign address={main} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <CampaignList />
                        </Grid.Column>
                    </Grid.Row>
                </Grid> */}
                {this.renderCampaigns()}


            </Container>
        );
    }
}

// const TabDetail = (props) => {
//     const main = props.campaigns[props.campaigns.length - 1];
//     return (

//         <Container style={{ marginTop: '29px' }}>
//             <a style={{ fontSize: '30px' }}>{main}</a>

//             <Link route={`/`}>
//                 <a style={{ marginLeft: '20px' }}>View all</a>
//             </Link>
//             <i aria-hidden='true' class='arrow right disabled icon' />

//             <br />

//             <h5>FEATURED PROJECT</h5>

//             <Grid>
//                 <Grid.Row>
//                     <Grid.Column width={8}>
//                         <OverviewCampaign address={main} />
//                     </Grid.Column>
//                     <Grid.Column width={8}>
//                         <CampaignList />
//                     </Grid.Column>
//                 </Grid.Row>
//             </Grid>


//         </Container>
//     );
// }

// class TabDetail extends Component {

//     state = {
//         campaigns : [],
//         mainCampaign : ''

//     };


//     render() {
//         console.log('Reender campaign');
//         console.log('Index : ', this.props.campaigns);
//         let main = this.props.campaigns[this.props.campaigns.length-1];
//         console.log('Main : ', main);

//         return (

//             <Container style={{ marginTop: '29px' }}>
//                 <a style={{ fontSize: '30px' }}>{main}</a>

//                 <Link route={`/`}>
//                     <a style={{ marginLeft: '20px' }}>View all</a>
//                 </Link>
//                 <i aria-hidden='true' class='arrow right disabled icon' />

//                 <br />

//                 <h5>FEATURED PROJECT</h5>

//                 <Grid>
//                     <Grid.Row>
//                         <Grid.Column width={8}>
//                             <OverviewCampaign address = {main}/>
//                         </Grid.Column>
//                         <Grid.Column width={8}>
//                             <CampaignList />
//                         </Grid.Column>
//                     </Grid.Row>
//                 </Grid>


//             </Container>
//         );
//     }
// }

export default TabDetail;